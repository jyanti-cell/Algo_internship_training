# 🎓 Today's Learning: Student Management System REST API

Today, as part of my backend development training, I learned how to build and test a complete **REST API** from scratch using **Node.js** and **Express.js**. I successfully implemented full CRUD operations managed via an in-memory array database.

---

## 🧠 What I Learned Today

### 1. Backend Concepts & Architecture
* Setting up a Node.js project environment using `npm`.
* Understanding how Express routing works for different HTTP methods.
* Handling dynamic incoming data using `req.body` and `req.params`.
* Using `express.json()` middleware to parse JSON payloads smoothly.

### 2. Building REST API Endpoints (CRUD)
* 📝 **Create (POST):** Learned how to implement auto-incrementing IDs to add a new student dynamically.
* 📋 **Read All (GET):** Created an endpoint to fetch the entire list of registered students.
* 🔍 **Read by ID (GET):** Used `.find()` to retrieve specific data by filtering the array with an ID.
* 🔄 **Update (PUT):** Mastered updating existing object details by mapping over request params.
* ❌ **Delete (DELETE):** Used the `.filter()` method to remove a student safely from the database array.

### 3. API Testing Tools
* Tested baseline `GET` requests directly via the web browser.
* Learned how to use the **Thunder Client** extension inside VS Code to send custom `POST`, `PUT`, and `DELETE` requests with JSON data.

---

## 💻 Project Implementation & Setup

To replicate what I built today, follow these steps locally:

1. **Go to the project folder:**
   ```bash
   cd student-api
   ```

2. **Initialize and install Express framework:**
   ```bash
   npm init -y
   npm install express
   ```

3. **Run the local server:**
   ```bash
   node server.js
   ```
   *The server runs locally at: `http://localhost:3002`*

---

## 🔌 Endpoints I Created & Verified

| HTTP Method | Endpoint | Description | Sample Request Body |
| :--- | :--- | :--- | :--- |
| **GET** | `/students` | Get all registered students | *None* |
| **GET** | `/students/:id` | Get a specific student by ID | *None* |
| **POST** | `/students` | Add a new student record | `{"name": "Amit", "age": 23, "course": "MCA"}` |
| **PUT** | `/students/:id` | Update student details | `{"name": "Rahul Sharma", "age": 22, "course": "MCA"}` |
| **DELETE** | `/students/:id` | Remove a student by ID | *None* |

---
*Looking forward to expanding these concepts by integrating a real database in the next session!*
