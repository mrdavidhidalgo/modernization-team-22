
from pydantic import BaseModel
from typing import Optional
from datetime import date

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
    gender : Optional[str] = None