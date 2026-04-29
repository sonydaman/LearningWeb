# pip install fastapi uvicorn
from fastapi import FastAPI, status, Depends
from pydantic import BaseModel, EmailStr
from typing import Optional
from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base

app = FastAPI()

# --- Database Setup ---
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

class DBItem(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)

# Create the tables
Base.metadata.create_all(bind=engine)

# Dependency to get the DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
# ----------------------

# 1. This is what we receive (includes password)
class UserIn(BaseModel):
    username: str
    password: str
    email: EmailStr

# 2. This is what we send back (No password!)
class UserOut(BaseModel):
    username: str
    email: str

# @app.get("/")
# def read_root():
#     return {"message": "Hello World"}

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "message": f"Fetching data for item {item_id}"}

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
def read_items(skip: int = 0, limit: int = 10):
    # This slices the list based on the user's input
    return fake_items_db[skip : skip + limit]


class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: float = 0.0

@app.post(
    "/items/", 
    status_code=status.HTTP_201_CREATED, # Sets the default success code
    tags=["Items"],                      # Groups these routes in the docs
    summary="Create a new item",          # Short description
    description="Allows you to create an item and automatically calculates tax."
)
def create_item(item: Item):
    item_dict = item.model_dump()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict


@app.post("/user/", response_model=UserOut)
def create_user(user: UserIn):
    # In a real app, you'd save 'user' to a database here
    # Notice we return the WHOLE user object (with password)
    return user

@app.post("/items/db/")
def create_item_in_db(name: str, db=Depends(get_db)):
    new_item = DBItem(name=name)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item