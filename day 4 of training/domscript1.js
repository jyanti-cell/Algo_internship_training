const [first,second] =numberset;

const umap = new Map(
  ["name","Anish"],
  ["age",25]
)

const [[key1,value1],[key2,value2]]=umap;


const students = [
  {
    name:"ABC",
    age:25
  },
  {
    name:"XYZ",
    age:24
  },
  {
    name:"PQR",
    age:20
  }
]

let names=[]
let ages=[]

for (const {name,age} of students){
  names=[...names,name];
  ages=[...ages,age];
}

console.log(names);
console.log(ages)


import { greetscript, result } from "./script.js";
console.log(result);
greetscript();

// sync
console.log("Start");
console.log("Middle");
console.log("End");


// async
console.log("Start");

setTimeout(() => {
  console.log("Inside Timeout");
}, 2000);

console.log("End");

const myPromise = new Promise((resolve, reject) => {

  let a=5;
  if (a>10)
    resolve("two digit number");
  else
    reject("single digit number");

});

const myPromise1 = new Promise((resolve, reject) => {

  let a=5;
  if (a>10)
    resolve("two digit number");
  else
    reject("single digit number");

});

Promise.race([p1,p2])
.then(console.log);

myPromise.then((result) =>{
  console.log(result);
})
.catch((error) => {
  console.log(error);
});

// returns and integer/string.
function getadd(a,b){
  return a+b;
}

//returns a promise -> that it will return an integer/string in future.
async function getaddasync(a,b){
  return a+b;
}

const sum = await getaddasync(3,5);

url = "https://onrender.com/getUser";

/*
[
  {
    "id": 1,
    "name": "Leanne Graham"
  }
]
*/

fetch(url).then((response) => response.json()).then((data) => {console.log(data)});

const math = require("./app");
console.log(add(3,5));
console.log(sub(3,5));