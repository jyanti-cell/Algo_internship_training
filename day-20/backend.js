const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

const users = [
  {
    id: 1,
    name: "Jayanti Mishra",
    department: "IT"
  },
  {
    id: 2,
    name: "Rahul Kumar",
    department: "CSE"
  },
  {
    id: 3,
    name: "Priya Singh",
    department: "ECE"
  }
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.listen(7000, () => {
  console.log("Server running at http://localhost:7000");
});