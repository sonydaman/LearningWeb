# The Setup

pip install fastapi uvicorn
# pip install fastapi uvicorn

## STEP 1

## --Main.py---
```
from fastapi import FastAPI

app = FastAPI()

@app.get("/")
def read_root():
    return {"message": "Hello World"}
```
# For run 
---
```fastapi dev main.py```
---
# STEP 2
```
@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "message": f"Fetching data for item {item_id}"}
```
# STEP 3

# A dummy list of items to "filter"
```
fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/")
def read_items(skip: int = 0, limit: int = 10):
    # This slices the list based on the user's input
    return fake_items_db[skip : skip + limit]
```
## Test
```
curl http://127.0.0.1:8000/items/42

```
from pydantic import BaseModel
from typing import Optional
# STEP 4
# 1. Define the 'Contract'
```
class Item(BaseModel):
    name: str
    description: Optional[str] = None
    price: float
    tax: float = 0.0

@app.post("/items/")
def create_item(item: Item):
    # FastAPI has already validated 'item' and turned it into an object
    item_dict = item.model_dump()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict
```
## Test
```
curl -X POST "http://127.0.0.1:8000/items/" \
     -H "Content-Type: application/json" \
     -d '{"name": "Test Item", "price": 100.0, "tax": 10.0}'

```

---
# STEP 5

```
from fastapi import FastAPI, status

@app.post(
    "/items/", 
    status_code=status.HTTP_201_CREATED, # Sets the default success code
    tags=["Items"],                      # Groups these routes in the docs
    summary="Create a new item",          # Short description
    description="Allows you to create an item and automatically calculates tax."
)
def create_item(item: Item):
    return item

```
## Test
```
curl -i -X POST "http://127.0.0.1:8000/items/" \
     -H "Content-Type: application/json" \
     -d '{"name": "Verified Item", "price": 100.0, "tax": 5.0}'
```
---

# Step 6: Response Models
```
from pydantic import BaseModel, EmailStr

# 1. This is what we receive (includes password)
class UserIn(BaseModel):
    username: str
    password: str
    email: str

# 2. This is what we send back (No password!)
class UserOut(BaseModel):
    username: str
    email: str

@app.post("/user/", response_model=UserOut)
def create_user(user: UserIn):
    # In a real app, you'd save 'user' to a database here
    # Notice we return the WHOLE user object (with password)
    return user
```

## Test
```
ccurl -X POST "http://127.0.0.1:8000/user/" \
     -H "Content-Type: application/json" \
     -d '{"username": "jdoe", "password": "secretpassword", "email": "jdoe@example.com"}'

```
---
# Step 7: Dependency Injection
## pip install sqlalchemy email-validator
```
from typing import Annotated
from fastapi import Depends, HTTPException, Header

# 1. Define the dependency logic
async def verify_token(x_token: Annotated[str, Header()]):
    if x_token != "super-secret-token":
        raise HTTPException(status_code=400, detail="X-Token header invalid")
    return x_token

# 2. Inject it into an endpoint
@app.get("/protected-data/", dependencies=[Depends(verify_token)])
async def get_secret_info():
    return {"data": "This is top secret!"}
```
# STEP 8 Database Integration
```
pip install sqlalchemy

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker, declarative_base
```
# 1. Connect to SQLite file
```
SQLALCHEMY_DATABASE_URL = "sqlite:///./test.db"
engine = create_engine(SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False})
```
# 2. Session factory
```
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
```
# 3. Base class for models
```
Base = declarative_base()
```
# 4. The Database Model (What the table looks like)
```
class DBItem(Base):
    __tablename__ = "items"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String)
```
# Create the table in the file
```
Base.metadata.create_all(bind=engine)
```
# Connecting to FastAPI
```
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/items/db/")
def create_item_in_db(name: str, db=Depends(get_db)):
    new_item = DBItem(name=name)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item

```
## Test
```
curl -X POST "http://127.0.0.1:8000/items/db/?name=DatabaseItem"

```
---


