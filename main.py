# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pymongo import MongoClient
# from pydantic import BaseModel
# from bson import ObjectId

# app = FastAPI()

# # Connect to MongoDB
# client = MongoClient("mongodb+srv://root:root@mdb.jr6cv9n.mongodb.net/")
# db = client["MDB"]

# # Enable CORS (Cross-Origin Resource Sharing) to allow requests from the frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Update with the actual frontend URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class Employee(BaseModel):
#     name: str
#     email: str

# @app.post("/employees")
# def create_employee(employee: Employee):
#     result = db.employees.insert_one(employee.dict())
#     return {"message": "Employee created successfully", "id": str(result.inserted_id)}

# @app.get("/employees")
# def get_employees():
#     employees = list(db.employees.find())
    
#     # Convert ObjectId to string in each employee document
#     for employee in employees:
#         employee["_id"] = str(employee["_id"])
    
#     return {"employees": employees}

# @app.get("/employees/{employee_id}")
# def get_employee(employee_id: str):
#     employee = db.employees.find_one({"_id": ObjectId(employee_id)})
#     if not employee:
#         raise HTTPException(status_code=404, detail="Employee not found")
    
#     # Convert ObjectId to string
#     employee["_id"] = str(employee["_id"])
    
#     return {"employee": employee}

# @app.put("/employees/{employee_id}")
# def update_employee(employee_id: str, employee: Employee):
#     result = db.employees.update_one(
#         {"_id": ObjectId(employee_id)},
#         {"$set": employee.dict(exclude_unset=True)}
#     )
    
#     if result.modified_count == 0:
#         raise HTTPException(status_code=404, detail="Employee not found")
    
#     return {"message": "Employee updated successfully"}

# @app.delete("/employees/{employee_id}")
# def delete_employee(employee_id: str):
#     result = db.employees.delete_one({"_id": ObjectId(employee_id)})
    
#     if result.deleted_count == 0:
#         raise HTTPException(status_code=404, detail="Employee not found")
    
#     return {"message": "Employee deleted successfully"}

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
















# from fastapi import FastAPI, HTTPException
# from fastapi.middleware.cors import CORSMiddleware
# from pymongo import MongoClient
# from pydantic import BaseModel
# from datetime import datetime

# app = FastAPI()

# # Connect to MongoDB
# client = MongoClient("mongodb+srv://root:root@mdb.jr6cv9n.mongodb.net/")
# db = client["MDB"]

# # Enable CORS (Cross-Origin Resource Sharing) to allow requests from the frontend
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["*"],  # Update with the actual frontend URL
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# class Employee(BaseModel):
#     name: str
#     email: str
#     department_id: str  # Update the type accordingly
#     projects: list[str] = []

# class Department(BaseModel):
#     name: str

# class Project(BaseModel):
#     name: str

# class Salary(BaseModel):
#     employee_id: str  # Update the type accordingly
#     amount: float

# @app.post("/employees")
# def create_employee(employee: Employee):
#     result = db.employees.insert_one(employee.dict())
#     return {"message": "Employee created successfully", "id": str(result.inserted_id)}

# @app.get("/employees")
# def get_employees():
#     employees = list(db.employees.find())
    
#     # Convert ObjectId to string in each employee document
#     for employee in employees:
#         employee["_id"] = str(employee["_id"])
    
#     return {"employees": employees}

# # Similar routes for departments, projects, and salaries

# if __name__ == "__main__":
#     import uvicorn
#     uvicorn.run(app, host="127.0.0.1", port=8000)
from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pymongo import MongoClient
from pydantic import BaseModel
from bson import ObjectId

app = FastAPI()

# Connect to MongoDB
client = MongoClient("mongodb+srv://root:root@mdb.jr6cv9n.mongodb.net/")
db = client["MDB"]

# Enable CORS (Cross-Origin Resource Sharing) to allow requests from the frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Update with the actual frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Employee(BaseModel):
    name: str
    email: str
    dept_name:str
    proj_name:str
    amount_by_day: float
    days_worked:int


# class Department(BaseModel):
#     name: str

# class Project(BaseModel):
#     name: str

# class Salary(BaseModel):
#     employee_id: str  # Update the type accordingly
#     amount: float

@app.post("/employees")
def create_employee(employee: Employee):
    result = db.employees.insert_one(employee.dict())
    return {"message": "Employee created successfully", "id": str(result.inserted_id)}

@app.get("/employees")
def get_employees():
    employees = list(db.employees.find())
    
    # Convert ObjectId to string in each employee document
    for employee in employees:
        employee["_id"] = str(employee["_id"])
    
    return {"employees": employees}

@app.get("/employees/{employee_id}")
def get_employee(employee_id: str):
    employee = db.employees.find_one({"_id": ObjectId(employee_id)})
    if not employee:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    # Convert ObjectId to string
    employee["_id"] = str(employee["_id"])
    
    return {"employee": employee}

@app.put("/employees/{employee_id}")
def update_employee(employee_id: str, employee: Employee):
    result = db.employees.update_one(
        {"_id": ObjectId(employee_id)},
        {"$set": employee.dict(exclude_unset=True)}
    )
    
    if result.modified_count == 0:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    return {"message": "Employee updated successfully"}

@app.delete("/employees/{employee_id}")
def delete_employee(employee_id: str):
    result = db.employees.delete_one({"_id": ObjectId(employee_id)})
    
    if result.deleted_count == 0:
        raise HTTPException(status_code=404, detail="Employee not found")
    
    return {"message": "Employee deleted successfully"}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="127.0.0.1", port=8000)
