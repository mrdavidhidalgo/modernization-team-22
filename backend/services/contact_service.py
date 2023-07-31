
from .contracts.contact_repository import ContactRepository
from .model import model
from typing import List
from services import  logs

_LOGGER = logs.get_logger()

def create_contact(contact_repository: ContactRepository, 
                             contact: model.Contact)-> None:
    
    _LOGGER.info("Creating contact with name %s", contact.name)
    
    contact_repository.create_contact(contact = contact)
    
    _LOGGER.info("Contact with name %s was created", contact.name)
    
def create_contacts(contact_repository: ContactRepository, 
                             contacts: List[model.Contact])-> None:
    
    _LOGGER.info("Creating contacts in batch %s", len(contacts))
    
    contact_repository.create_contacts_in_batch(contacts = contacts)
    
    _LOGGER.info("Contacts in batch were created")