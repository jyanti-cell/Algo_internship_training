# React Routing and Context API

## Project Description

This project demonstrates the use of React Router DOM for navigation and Context API for sharing data across multiple components without prop drilling.

The application contains three pages:

- Home Page – Displays the user's name.
- About Page – Displays the user's age.
- Contact Page – Displays the user's contact number.

All user information is managed using React Context and accessed with the `useContext()` hook.

## Features

- React Router DOM
- Context API
- useContext Hook
- Multiple Routes
- Simple and Clean UI

## Technologies Used

- React.js
- React Router DOM
- JavaScript (ES6)
- JSX
- CSS
- Vite

## Project Structure

```
src/
│── pages/
│   ├── Home.jsx
│   ├── About.jsx
│   └── Contact.jsx
│
│── UserContext.jsx
│── App.jsx
│── main.jsx
│── App.css
│── index.css
```

## How to Run

1. Clone the repository.
2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open the browser:

```
http://localhost:5173/
```

## Routes

| Route | Description |
|--------|-------------|
| / | Home Page |
| /about | About Page |
| /contact | Contact Page |

## Learning Outcomes

- Implemented React Router for page navigation.
- Used Context API to share data globally.
- Accessed context values using the `useContext()` hook.
- Organized the project using reusable React components.

---

**Branch:** Information Technology
