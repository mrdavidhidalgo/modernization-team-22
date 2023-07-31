from typing import Optional
from fastapi import Depends, FastAPI, HTTPException
from fastapi import FastAPI
import enum
from pydantic import BaseModel

from sqlalchemy.orm import Session

from repositories.db_model import db_model

from repositories.db_model.database import SessionLocal, engine

from entrypoints.web import contact

from fastapi.middleware.cors import CORSMiddleware

origins = [
    "http://localhost:4200",
]

db_model.Base.metadata.create_all(bind=engine)

class ModelName(enum.Enum):
    alexnet = "alexnet"
    resnet = "resnet"
    lenet = "lenet"
    
    
class Contact(BaseModel):
    name: str
    description: str
    

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(contact.router)
        
"""
@app.post("/users/", response_model=schemas.User)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    db_user = crud.get_user_by_email(db, email=user.email)
    if db_user:
        raise HTTPException(status_code=400, detail="Email already registered")
    return crud.create_user(db=db, user=user)
"""


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/contacts/{contact_id}")
async def get_contact(contact_id: int):
    return {"message": contact_id}

@app.get("/contacts-model/{model_name}")
async def get_contact_type(model_name: ModelName):
    return {"message": model_name}

@app.get("/elements/")
async def get_contact_type(nombre: str, cedula: Optional[int] = None):
    return {"nombre": nombre, "cedula": cedula}

@app.post("/contacts/")
async def create_contact(contact: Contact):
    return {"nombre": contact.name}