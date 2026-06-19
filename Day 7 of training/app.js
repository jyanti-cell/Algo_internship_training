const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.static(__dirname));
app.get("/", (req,res)=>{
 res.sendFile(path.join(__dirname,"index.html"));
});

app.post("/register", (req,res) => {
 const studentData = `Name: ${req.body.studentName}, Roll No: ${req.body.rollno}\n`;
 console.log(studentData);
 fs.appendFileSync("student_registry.txt", studentData);
 
 res.send(`
    <html>
    <head>
        <title>Success</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div style="background: white; padding: 30px; border-radius: 8px; border: 1px solid #dddddd; max-width: 400px; margin: 40px auto;">
            <h3 style="color: #27ae60; margin-bottom: 15px;">🎉 ${req.body.studentName} has been saved!</h3>
            <a href="/" style="display: inline-block; color: #3498db; text-decoration: none; font-weight: bold; font-size: 15px;">Go back to main page</a>
        </div>
    </body>
    </html>
 `);
});

app.get("/students", (req,res) => {
  let students = "";
  if (fs.existsSync("student_registry.txt")){
   students = fs.readFileSync("student_registry.txt", "utf8");
   res.send(`
    <html>
    <head>
        <title>Registered Students</title>
        <link rel="stylesheet" href="/style.css">
    </head>
    <body>
        <div style="background: white; padding: 30px; border-radius: 8px; border: 1px solid #dddddd; max-width: 500px; margin: 0 auto; text-align: left;">
            <h2 style="color: #2c3e50; margin-bottom: 20px; border-bottom: 2px solid #3498db; padding-bottom: 10px;">Registered Students List:</h2>
            <pre style="font-family: Arial, sans-serif; font-size: 16px; background: #f9f9f9; padding: 15px; border-radius: 4px; line-height: 1.8; white-space: pre-wrap;">${students}</pre>
            <br>
            <a href="/" style="display: inline-block; color: #3498db; text-decoration: none; font-weight: bold; font-size: 15px;">← Back to Registration Form</a>
        </div>
    </body>
    </html>
   `);
  } else {
   res.send("<h2>No students registered yet!</h2>");
  }
});

app.listen(3000, ()=>{
 console.log("Server is running on 3000");
})