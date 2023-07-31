import abc
from services.model import model
from typing import List

class ContactRepository(abc.ABC):
    
    @abc.abstractmethod
    def create_contact(self, contact: model.Contact)-> str:
        ...
        
    @abc.abstractmethod
    def create_contacts_in_batch(self, contacts: List[model.Contact])-> str:
        ...
