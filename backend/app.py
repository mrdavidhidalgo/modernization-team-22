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