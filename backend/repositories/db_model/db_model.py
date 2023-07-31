from sqlalchemy import Boolean, Column, ForeignKey, Integer, String, DateTime
from sqlalchemy.orm import relationship
import datetime

from .database import Base


class Contact(Base):
    __tablename__ = "k_contacts"

    gu_contact = Column(Integer, primary_key=True, index=True, autoincrement=True)
    gu_workarea = Column(String(32))
    dt_created = Column(DateTime, default=datetime.datetime.utcnow)
    bo_restricted = Column(Integer, default=0)
    bo_private = Column(Integer, default=0)
    nu_notes = Column(Integer, default=0)
    nu_attachs = Column(Integer, default=0)
    bo_change_pwd = Column(Integer, default=1)
    tx_nickname = Column(String(100), default=None)
    tx_pwd = Column(String(50), default=None)
    tx_challenge = Column(String(100), default=None)
    tx_reply = Column(String(100), default=None)
    dt_pwd_expires = Column(DateTime, default=None)
    dt_modified = Column(DateTime, default=None)
    gu_writer = Column(String(32), default=None)
    gu_company = Column(String(32), default=None)
    id_batch = Column(String(32), default=None)
    id_status = Column(String(30), default=None)
    id_ref = Column(String(50), default=None)
    id_fare = Column(String(32), default=None)
    id_bpartner = Column(String(32), default=None)
    tx_name = Column(String(100), default=None)
    tx_surname = Column(String(100), default=None)
    de_title = Column(String(70), default=None)
    id_gender = Column(String(1), default=None)
    dt_birth = Column(DateTime, default=None)
    ny_age = Column(Integer, default=0)
    id_nationality = Column(String(3), default=None)
    sn_passport = Column(String(16), default=None)
    tp_passport = Column(String(1), default=None)
    sn_drivelic = Column(String(16), default=None)
    dt_drivelic = Column(DateTime, default=None)
    tx_dept = Column(String(70), default=None)
    tx_division = Column(String(70), default=None)
    gu_geozone = Column(String(32), default=None)
    gu_sales_man = Column(String(32), default=None)
    tx_comments = Column(String(254), default=None)
    url_linkedin = Column(String(254), default=None)
    url_facebook = Column(String(254), default=None)
    url_twitter = Column(String(254), default=None)
    
    
class Company(Base):
    __tablename__ = "k_companies"

    gu_company= Column(String, primary_key=True, index=True)
    dt_created = Column(DateTime, default=datetime.datetime.utcnow)
    nm_legal = Column(String(70))
    gu_workarea = Column(String(32))
    bo_restricted = Column(Integer, default=0)
    nm_commercial = Column(String(70), default=None)
    dt_modified = Column(DateTime, default=None)
    dt_founded = Column(DateTime, default=None)
    id_batch = Column(String(32), default=None)
    id_legal = Column(String(16), default=None)
    id_sector = Column(String(16), default=None)
    id_status = Column(String(30), default=None)
    id_ref = Column(String(50), default=None)
    id_fare = Column(String(32), default=None)
    id_bpartner = Column(String(32), default=None)
    tp_company = Column(String(30), default=None)
    gu_geozone = Column(String(32), default=None)
    nu_employees = Column(Integer, default=None)
    gu_sales_man = Column(String(32), default= None)
    tx_franchise = Column(String(100), default= None)
    de_company = Column(String(254), default= None)
    
