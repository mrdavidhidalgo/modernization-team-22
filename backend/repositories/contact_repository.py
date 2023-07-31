



from .db_model import db_model as models

from fastapi import Depends

import uuid
from typing import List

from .db_model import database

from sqlalchemy.orm import Session

from services.model import model
from services.contracts import contact_repository

class MySqlContactRepository(contact_repository.ContactRepository):
    
    def __init__(self, db: Session) -> None:
        super().__init__()
        self.db = db
    
    def create_contact(self, contact: model.Contact)-> str:
        
        id = str(uuid.uuid4())
    
        contact = models.Contact(gu_contact = id, 
                                 tx_name = contact.name, 
                                 tx_surname =  contact.surname, 
                                 gu_workarea="c0a814171897b6d5a6f100000c64214f", 
                                 id_ref = contact.reference, 
                                 de_title = contact.position,
                                 dt_birth = contact.birth_date,
                                 sn_passport = contact.legal_id,
                                 id_nationality = contact.nationality,
                                 tx_comments = contact.comments,
                                 ny_age = contact.age,
                                 tx_dept = contact.state,
                                 tx_division = contact.city,
                                 id_status = contact.status,
                                 id_gender = contact.gender)
        self.db.add(contact)
        self.db.commit()
        #self.db.refresh(contact)
        return id
    
    def create_contacts_in_batch(self, contacts: List[model.Contact])-> str:
        
        try:
            for contact in contacts:
                id = str(uuid.uuid4())
                new_contact = models.Contact(gu_contact = id, 
                                 tx_name = contact.name, 
                                 tx_surname =  contact.surname, 
                                 gu_workarea="c0a814171897b6d5a6f100000c64214f", 
                                 id_ref = contact.reference, 
                                 de_title = contact.position,
                                 dt_birth = contact.birth_date,
                                 sn_passport = contact.legal_id,
                                 id_nationality = contact.nationality,
                                 tx_comments = contact.comments,
                                 ny_age = contact.age,
                                 tx_dept = contact.state,
                                 tx_division = contact.city,
                                 id_status = contact.status,
                                 id_gender = contact.gender)
                
                self.db.add(new_contact)
            self.db.commit()
        except:
            self.db.rollback()  # Si algo sale mal, se revierte la transacción
            raise
        finally:
            self.db.close()