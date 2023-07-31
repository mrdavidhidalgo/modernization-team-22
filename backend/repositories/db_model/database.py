from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

from sqlalchemy.orm import Session

SQLALCHEMY_DATABASE_URL = "mysql+pymysql://frank:6543..AbcX@34.132.7.242:3306/hipergate7"
#SQLALCHEMY_DATABASE_URL = "mysql://user:password@server"
#SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db"
#SQLALCHEMY_DATABASE_URL = "postgresql://user:password@postgresserver/db"

# connect_args_only for sqllite
#engine = create_engine(
#    SQLALCHEMY_DATABASE_URL, connect_args={"check_same_thread": False}
#)

engine = create_engine(SQLALCHEMY_DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

