// Javascript Es6 basic with example

//let  => variable=> use when the value can change

// let a  = 10;
// let a => declaration
// a = 10 => initialization
//let -  cannot be redeclared but can reinitialize ✅
// let a = 10;
// let a = 20;
// console.log(a)

let b = 10;
b = 20;
console.log(b);//20


let lunch = "🍕";
lunch = "🍔";//can change✅

const collgeID = 12345;
//collgeID = 12345 // cannot be changed❌

//loop variable
for (let i = 1; i <= 3; i++) {
    console.log(i)
}

// inside the block

let course = "mern";

if (true) {
    let course = "mean"; //different variable inside block
    console.log(course)//
}
console.log(course)

// const
const courses = ["maths", "physics", "fullstack"];
courses.push('science') //add an element
console.log(courses) //['maths', 'physics', 'fullstack', 'science']

//regular function => write a long homework
const functionName = (parameter) => { }

function greet(name) {
    return "Hello " + name + "👋";
}

console.log(greet("Ajitha"));

//arrow function => short way of writing function => sending a quick whatsapp message

const greetArrowFunc = (name) => "Hello " + name + "👋";

console.log(greetArrowFunc("Akshaya"));

const sumMarks = (express, nodejs, mongodb, react) => express + nodejs + mongodb + react;

console.log(sumMarks(80, 90, 85, 90))

//array methods
//map => change each item
//filter  => pick certain items
//reduce => combine into one total

const prices = [50, 70, 60];

//map: add tax
const newPrice = prices.map(p => p + 10);
console.log(newPrice);

//filter: only > 55

const expensive = prices.filter(p => p > 55);
console.log(expensive)

//reduce: total price
//syntax => array.reduce((accumulator, currentValue) => {}, initialValue)
//accumulator(sum) => stores running result
//currentValue(p) => current item in array
//initialValue(0) => starting point
const total = prices.reduce((sum, p) => sum + p, 0)
// 1. start with sum = 0(initial value)
//2. take first number 50 :  0 + 50 =50
//3 . Next number 70: 50 + 70  = 120
//4. Next number 60: 120 + 60 = 180