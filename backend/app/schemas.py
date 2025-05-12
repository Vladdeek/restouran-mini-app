from pydantic import BaseModel
from typing import List



#To-Do
class MenuBase(BaseModel):
    title: str
    description: str
    price: int 
    image_path: str
    #user_name: str  # Убедитесь, что это поле может быть None

class MenuCreate(MenuBase):
    pass

class Menu(MenuBase):
    id: int

    class Config:
        orm_mode = True

class StatusBase(BaseModel):
    status: str

class StatusCreate(StatusBase):
    pass

class Status(StatusBase):
    id: int

    class Config:
        orm_mode = True

# Pydantic-схема для таблицы Orders
class OrdersBase(BaseModel):
    order_num: int
    orders: str  # Список ID блюд
    status_id: int         # ID статуса заказа
    total_price: int  # Общая стоимость заказа (целое число)

class OrdersCreate(OrdersBase):
    pass

class Orders(OrdersBase):
    id: int

    class Config:
        orm_mode = True

#User 
class UserBase(BaseModel):
    name: str
    password: str

class UserCreate(UserBase):
    pass

class User(UserBase):
    id: int
    class Config:
        orm_mode = True 


# Здесь описаны различные схемы,
# нужны для описания API
# нужны для описания того что мы будем принимать
# и что мы будем принимать 
