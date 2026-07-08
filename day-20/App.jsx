// import { useState } from 'react'
//  import reactLogo from './assets/react.svg'
//  import viteLogo from './assets/vite.svg'
//  import heroImg from './assets/hero.png'
//  import './App.css'


// function EmployeeCard(props) {
//   return (
//     <>
//       <h2>Employee Card</h2>

//       <p>Name: {props.name}</p>
//       <p>Employee ID: {props.empId}</p>
//       <p>Department: {props.dept}</p>

//       <hr />
//     </>
//   );
// }

// function App() {
//   const [name, setName] = useState("");
//   const [empId, setEmpId] = useState("");
//   const [dept, setDept] = useState("");

//   return (
//     <>
//       <h1>Employee Form</h1>

//       <label>Name: </label>
//       <input
//         type="text"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//       />

//       <br /><br />

//       <label>Employee ID: </label>
//       <input
//         type="text"
//         value={empId}
//         onChange={(e) => setEmpId(e.target.value)}
//       />

//       <br /><br />

//       <label>Department: </label>
//       <input
//         type="text"
//         value={dept}
//         onChange={(e) => setDept(e.target.value)}
//       />

//       <br /><br />

//       <EmployeeCard
//         name={name}
//         empId={empId}
//         dept={dept}
//       />
//     </>
//   );
// }

// export default App;

// for- Make a endpoint that returns a list of users from Backend
// Call them from Frontend reactjs

import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:7000/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h1>User List</h1>

      {users.map((user) => (
        <div key={user.id}>
          <h3>{user.name}</h3>
          <p>ID: {user.id}</p>
          <p>Department: {user.department}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default App;




// day-21 
// import {
//   Routes, Route
// } from "react-router-dom";

// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";


// function App(){
//   return (
//     <Routes>
//       <Route path="/" element={<Home/>}/>
//       <Route path="/about" element={<About/>}/>
//       <Route path="/contact" element={<Contact/>}/>
//     </Routes>
//   );
// }

// export default App;