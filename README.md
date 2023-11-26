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

   npm start


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
![Admin-Register](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/4b99eb8a-dbe6-4187-8a7f-13e3ed739163)


 ### 2. Login

 - **Method:** POST
- **Endpoint:** `/users/login`
- **Body:**
  ```json
  {
    "username": "Admin",
    "password": "admin123",
  }
  
![Admin-Login](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/9b0fb87e-f7e0-4175-b2c6-b70e5357dfe8)


## Admin Endpoints

### 1. Create a New Doctor
![Create doctor](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/05aff775-784f-4e8b-b428-7bf627967807)


### 2. Get List of Patients and Their Assigned Doctors
![List of Patients and Their Assigned Doctors](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/aa986b53-13f9-40e7-a8b5-91276af52324)


### 3. Get List of All Doctors and Their Schedules
![All doctors and their schedule](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/b2e3bca8-bb9b-47a1-9cc6-23c851eb360b)


## Doctor Endpoints

### 1. Assign a Doctor to a Patient
![Assign a doctor to a patient](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/fae263e6-6dc8-4c23-b7b6-95a9840684c8)


### 2. Unassign a Doctor from a Patient
![Unassign a doctor to a patient](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/118ca15d-07b8-4735-8aa7-03f2bd8c1a09)


### 3. Upload Test File
![Upload test file](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/a0962c76-ed84-43c6-9205-b455574d1ad7)


### 4. View Own Schedule
![View Own schedule](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/0344a6d3-7445-42cd-af52-bcc52acf63d6)


## Patient Endpoints

### 1. Create a New Patient
![Create new patient](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/193ab07d-e47f-4367-9d38-7fd5ca0671d2)


### 2. Assign a Patient to a Doctor
![Assign a patient to a doctor](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/096a3057-213e-4d64-9c8e-bcc088efa99d)


### 3. Unassign a Patient from a Doctor
![Unassign a Patient from a Doctor](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/98e464db-21e2-4a9e-ba1f-c57d8751fbc2)


### 4. View Assigned Doctors
![View Assigned Doctors](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/caea74b6-f4cb-4624-a338-1f61060767e6)


### 5. Schedule an Appointment
![Schedule an Appointment](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/680c7472-96aa-4d77-9969-2a7c3acfc948)


### 6. Cancel an Appointment
![Cancel an Appointment](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/02fd847f-d603-46be-915e-fb6e081cf1b0)


### 7. Change Appointment Status
![Change Appointment Status](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/ea7702d0-7caf-4743-b2ab-6dac7774edf5)


## Pagination and Filtering

### 1. Pagination
![pagination](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/2d44909a-1d9c-4286-ba76-aeb5c2902ca8)


### 2. Filtering
![Filtering](https://github.com/MahmoudKalekish/Hospital-Management-System-RESTful-API/assets/101974539/d4f9eeac-90cf-43b8-9065-eff56ac36a31)


