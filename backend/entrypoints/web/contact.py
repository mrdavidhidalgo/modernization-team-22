from fastapi import APIRouter
from repositories.contact_repository import MySqlContactRepository

from fastapi import Depends

from pydantic import BaseModel
from typing import Optional, List

from datetime import date

from services.model import model
from services import contact_service

from repositories.db_model.database import SessionLocal, engine
    
from sqlalchemy.orm import Session

import enum 

router = APIRouter()

class Gender(str, enum.Enum):
    M = "M"
    F = "F"
    
class Contact(BaseModel):
    reference: Optional[str] = None
    name: str
    surname:  Optional[str] = None
    company : Optional[str] = None
    email : Optional[str] = None
    telephone : Optional[str] = None
    sector : Optional[str] = None
    position : Optional[str] = None
    id_document : Optional[str] = None
    id_document_type : Optional[str] = None
    birth_date : Optional[date] = None
    age : Optional[int] = None
    street_type : Optional[str] = None
    street_name : Optional[str] = None
    number : Optional[str] = None
    suite : Optional[str] = None
    other_address : Optional[str] = None
    country : Optional[str] = None
    state : Optional[str] = None
    city : Optional[str] = None
    zipcode : Optional[str] = None
    legal_id : Optional[str] = None
    nationality : Optional[str] = None
    comments : Optional[str] = None
    status : Optional[str] = None
    gender : Optional[Gender] = None
    
class BatchContactInput(BaseModel):
    data : List[Contact]
    

    
# Dependency
def get_db() -> Session:
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()    

    
@router.post("/contact/", status_code=201)
async def create_contact(contact: Contact, db: Session = Depends(get_db)):
    
    contact_repository = MySqlContactRepository(db = db)
    
    new_contact = model.Contact.model_validate(contact.model_dump())
    
    contact_service.create_contact(contact_repository=contact_repository, contact=new_contact)
    
    return {"msg": "Contacto creado exitosamente", "data": contact.model_dump(exclude_unset=True)}

@router.post("/contact/batch", status_code=201)
async def create_contacts(contacts: BatchContactInput, db: Session = Depends(get_db)):
    
    contact_repository = MySqlContactRepository(db = db)
    
    contact_list = list(map(transformar_objeto, contacts.data))
    
    contact_service.create_contacts(contact_repository=contact_repository, contacts=contact_list)
    
    return {"msg": "Contactos creados exitosamente"}


def transformar_objeto(contact: Contact) ->model.Contact:
    return model.Contact.model_validate(contact.model_dump())