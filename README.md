# Hospital Management System API

## Introduction

This README provides instructions for testing the Hospital Management System API using Postman. The API includes functionalities for patients, doctors, appointments, and administrators.

### Base URL

http://localhost:8080

## Postman Setup

1. Download and install [Postman](https://www.postman.com/downloads/).
2. Open Postman.


## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API.git
   npm install


## User Registration and Login

### 1. Register a User

- **Method:** POST
- **Endpoint:** `/users/register`
- **Body:**
  ```json
  {
    "username": "Admin",
    "password": "admin123",
    "role": "admin"
  }


 ### 2. Login

 - **Method:** POST
- **Endpoint:** `/users/login`
- **Body:**
  ```json
  {
    "username": "Admin",
    "password": "admin123",
  }


## Admin Endpoints

### 1. Create a New Doctor


### 2. Get List of Patients and Their Assigned Doctors


### 3. Get List of All Doctors and Their Schedules


## Doctor Endpoints

### 1. Assign a Doctor to a Patient


### 2. Unassign a Doctor from a Patient


### 3. Upload Test File


### 4. View Own Schedule


## Patient Endpoints

### 1. Create a New Patient


### 2. Assign a Patient to a Doctor


### 3. Unassign a Patient from a Doctor


### 4. View Assigned Doctors


### 5. Schedule an Appointment


### 6. Cancel an Appointment


### 7. Change Appointment Status


