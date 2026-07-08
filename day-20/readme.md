# User List API with React

## Project Description

This project demonstrates communication between a React frontend and a Node.js + Express backend. The backend provides a list of users through a REST API endpoint, and the React application fetches and displays the user data.

## Features

- REST API using Express.js
- React Frontend
- Fetch API Integration
- Dynamic User List
- CORS Support

## Technologies Used

- React.js
- Node.js
- Express.js
- JavaScript (ES6)
- Vite
- CSS

## Project Structure

```
project/
│── backend/
│   └── app.js
│
│── my-app/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── ...
│   └── package.json
```

## API Endpoint

### Get Users

```
GET /users
```

Returns a list of users in JSON format.

### Sample Response

```json
[
  {
    "id": 1,
    "name": "Jayanti Mishra",
    "department": "IT"
  },
  {
    "id": 2,
    "name": "Rahul Kumar",
    "department": "CSE"
  },
  {
    "id": 3,
    "name": "Priya Singh",
    "department": "ECE"
  }
]
```

## How to Run

### Install Dependencies

```bash
npm install
```

### Start Backend

```bash
node app.js
```

Backend runs on:

```
http://localhost:7000
```

### Start Frontend

```bash
cd my-app
npm run dev
```

Frontend runs on:

```
http://localhost:5173
```

## Learning Outcomes

- Created a REST API using Express.js.
- Implemented a GET endpoint to return user data.
- Connected React frontend with the backend using Fetch API.
- Displayed dynamic data received from the backend.
- Understood client-server communication in a full-stack application.

---

**Branch:** Information Technology
