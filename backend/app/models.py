from sqlalchemy import Column, Integer, String, ForeignKey, ARRAY #ForeignKey будет ссылаться на поле из другой таблицы 
from sqlalchemy.orm import relationship # для создания связи между полями 
from .database import Base # все наше подключение которое которое на основе наших моделей создает таблицы в БД

#To-Do
class Menu(Base):
    __tablename__ = "Menu"

    id = Column(Integer, primary_key=True, index=True)# index=True - поиск по этому столбцу
    title = Column(String, index=True)
    price = Column(Integer)
    image_path = Column(String)  # Путь к изображению
    description = Column(String)

class Status(Base):
    __tablename__ = "Status"

    id = Column(Integer, primary_key=True, index=True)# index=True - поиск по этому столбцу
    status = Column(String)
    
class Orders(Base):
    __tablename__ = "Orders"  # Исправил название таблицы

    id = Column(Integer, primary_key=True, index=True)
    order_num = Column(Integer)
    orders = Column(String)  # Массив чисел (ID блюд из Menu)
    total_price = Column(Integer)
    status_id = Column(Integer, ForeignKey("Status.id"))  # Внешний ключ на статус заказа

    status = relationship("Status")  # Связь с таблицей Status

#User
class User(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key=True, index=True)# index=True - поиск по этому столбцу
    name = Column(String)
    password = Column(String)

   #todos = relationship("Todo", back_populates="user")  # Связь с задачами пользователя



# Этот файл описывает каждую табличку для БД
# на основе этого файла на основе этих классов 
# будут созданы разные таблицы в БД