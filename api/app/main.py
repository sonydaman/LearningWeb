from fastapi import FastAPI, status, Depends
from . import models, schemas, database

app = FastAPI()

# Create tables
models.Base.metadata.create_all(bind=database.engine)

fake_items_db = [{"item_name": "Foo"}, {"item_name": "Bar"}, {"item_name": "Baz"}]

@app.get("/items/{item_id}")
def read_item(item_id: int):
    return {"item_id": item_id, "message": f"Fetching data for item {item_id}"}

@app.get("/items/")
def read_items(skip: int = 0, limit: int = 10):
    return fake_items_db[skip : skip + limit]

@app.post(
    "/items/", 
    status_code=status.HTTP_201_CREATED,
    tags=["Items"],
    summary="Create a new item",
    description="Allows you to create an item and automatically calculates tax."
)
def create_item(item: schemas.Item):
    item_dict = item.model_dump()
    if item.tax:
        price_with_tax = item.price + item.tax
        item_dict.update({"price_with_tax": price_with_tax})
    return item_dict

@app.post("/user/", response_model=schemas.UserOut)
def create_user(user: schemas.UserIn):
    return user

@app.post("/items/db/")
def create_item_in_db(name: str, db=Depends(database.get_db)):
    new_item = models.DBItem(name=name)
    db.add(new_item)
    db.commit()
    db.refresh(new_item)
    return new_item
