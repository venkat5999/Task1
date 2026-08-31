// JavaScript Tasks

//  Task 1 — var, let, const

// Create three variables:
// var → student name
// let → student age
// const → college name
// Requirements:
// Print all three values.
// Change the var value.
// Change the let value.
// Try changing the const value and observe the error.
// Try redeclaring the var variable.
// Try redeclaring the let variable and observe the error.

// var studentName = 'venkat';
// let studentAge=25;
// const collegeName = 'GITAM UNIVERSITY';


// Print all three values.
// console.log(studentName)
// console.log(studentAge)
// console.log(collegeName)

// Change the var value.

// studentName="prasad";
// console.log(studentName)

// Change the let value.

//  studentAge = 34;
//  console.log(studentAge)

 // Try changing the const value and observe the error.

//  const collegeName = 'UNIVERSITY';
//  console.log(collegeName)

// Try redeclaring the var variable.

// var student = 'vijay';
// console.log(student)

// Try redeclaring the let variable and observe the error.
// let studentAge = 27;
// console.log(studentAge)

// ---------------------------------------------------------------------------------------------------------

// Task 2 — User Information
// Get the following information from the user using prompt():
// Name
// Age
// City
// Print the result in the console.
// Expected:
// Name: Naveen
// Age: 22
// City: Trichy


// let name = prompt("Enter your name:");
// let age = prompt("Enter your age:");
// let city = prompt("Enter your city:");

// console.log("Name:", name);
// console.log("Age:", age);
// console.log("City:", city);

// -------------------------------------------------------------------------------------------------------
// Task 3 — Welcome Message
// Get the user's name using prompt().
// Display:
// Welcome Naveen!
// Use alert().


// let name = prompt("Enter your name:");

// alert("Welcome " + name );

// ---------------------------------------------------------------------------------------------------------------------------
// Task 4 — Age Calculator
// Ask the user for their birth year.
// Calculate their approximate age using:
// Current Year - Birth Year
// Print the age in the console.
// Example:
// Birth Year: 2000
// Age: 26



// let birthYear = prompt("Enter your birth year:");

// let currentYear = 2026;
// let age = currentYear - birthYear;

// console.log("Birth Year:", birthYear);
// console.log("Age:", age);
// ------------------------------------------------------------------------------------------------------------ Data Type Tasks
// Task 5 — Identify Data Types
// Create variables containing:
// "Hello"
// 100
// 25.5
// true
// false
// undefined
// null
// Use typeof and print each data type.

// let greeting = "hello";
// console.log(typeof(greeting))

// let num =100;
// console.log(typeof(num))

// let decimal = 25.5;
// console.log(typeof(decimal))

// let isTrue = true;
// console.log(isTrue)

// let isFalse = false;
// console.log(typeof(isFalse))

// let valueUndefined = undefined;
// console.log(typeof(valueUndefined))

// let valueNull = null;
// console.log(typeof(valueNull))

// ---------------------------------------------------------------------------------------------------------------------
//TASK 6----
// Student Data
// Create an object:
// name
// age
// city
// qualification
// isStudent
// Print:
// Complete object
// Name
// Age
// Qualification
// isStudent


// let StudentData = {
//     name:"venkat",
//     Age : 25,
//     city:"Andhra Pradesh",
//     qualification:"btech",
//     isStudent :true
// }

// console.log(StudentData)
// console.log(StudentData.name)
// console.log(StudentData.Age)
// console.log(StudentData.qualification)
// console.log(StudentData.isStudent)

// ---------------------------------------------------------------------------------------------------------------------------- Fruit Array
// Create an array containing 6 fruits.
// Apple
// Mango
// Orange
// Banana
// Grapes
// Papaya
// Print:
// First fruit
// Second fruit
// Last fruit
// Total number of fruits
// Hint:
// array.length
// array.length - 1

// let fruits = ["Apple","Mango","Orange","Banana","Grapes","Papaya"];
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[fruits.length-1])
// console.log(fruits.length)
// --------------------------------------------------------------------------------------------------------------
// 🟡 Arithmetic Operator Tasks
// Task 8 — Basic Calculator
// Create two numbers:
// let a = 20;
// let b = 5;
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// Print every result separately.

// let a = 9;
// let b = 3;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// ----------------------------------------------------------------------------------------------------------

// Task 9 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Calculate the total price.
// Expected:
// Total = 4497

// let shirt = 999;
// let pant = 1499;
// let shoes =1999;

// total = shirt+pant+shoes
// console.log("total:" + total)

// ------------------------------------------------------------------------------------------------------------------
// Create marks for 3 subjects:
// Tamil = 80
// English = 75
// Maths = 90
// Calculate:
// Total marks
// Average marks

// let Tamil = 80;
// let English = 75;
// let maths = 90;

// totalmarks = Tamil+English+maths
// averagemarks=totalmarks/3
// console.log(totalmarks)
// console.log(averagemarks)

// ----------------------------------------------------------------------------------------------------
// 🟠 Increment & Decrement Tasks
// Task 11 — Post Increment
// Predict the output before running the code:
// let a = 10;

// let b = a++;

// console.log(a);
// console.log(b);

// o/p----a=11,b=10

// --------------------------------------------------------------------------------------------------------------
//  Task 12 — Pre Increment
// Predict the output:
//  let a = 10;

//  let b = ++a;

//  console.log(a);
//  console.log(b);

//  o/p---a=11 b =11
// ------------------------------------------------------------------------------------------------------------------

// Task 13 — Post Decrement
// Predict:
// let a = 20;

// let b = a--;

// console.log(a);
// console.log(b);

// o/p ---a =19 b=20

// -------------------------------------------------------------------------------------------------------
// Task 14 — Pre Decrement
// Predict:
// let a = 20;

// let b = --a;

// console.log(a);
// console.log(b);
// 0/p-----a=19 b=19
// ------------------------------------------------------------------------------------------------------------🔴 Challenge Tasks
// Task 15 — Find the Final Values
// Without running the code, find the output:
// let a = 5;

// let b = a++;

// let c = ++a;

// let d = b--;

// console.log(a);--7
// console.log(b);--5
// console.log(c);--7
// console.log(d);--4
// --------------------------------------------------------------------------------------------------------------------Given:
// task 16 
// let num = 10;
// Perform each operation separately:
// +=-----15
// -=-----5
// *=----50
// /=-----2
// %=------0
// **=------100000
// Example:
// num += 5;
// console.log(num);
// ---------------------------------------------------------------------------------------------------------------🏆 Task 17 — Mini Student Profile
// Create a student profile using:
// Variables
// Name
// Age
// City
// College
// Array
// Store 5 favorite subjects.
// Object
// Create an employee/student object containing:
// name
// age
// city
// subjects
// isStudent
// Then print:
// Student name
// Student age
// City
// First subject
// Last subject
// Total subjects
// Complete object

var name="Venkat Chodisetti"
var age=25;
var city="Kakinada";
var college="SRKR";
var subjects=["Tamil","Telugu","Kannada","Marathi","hindi"];
var employee={
    name:"venkat",age:25,city:"Hyderabad", subject:"Maths",isStudent:true
}
console.log(name)
console.log(age)
console.log(city)
console.log(subjects[0]);
console.log(subjects[subjects.length-1]);
console.log(subjects.length)
console.log(employee);
 

// ---------------------------------------------------------------------------------------------------------------------
// 🔥 Final Challenge — User + Calculator
// Get two numbers from the user using prompt().
// Perform:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Power
// Then display all results using console.log().
// Restriction: Use only the concepts you have taught so far:
// var, let, const, prompt(), console.log(), data types, arrays, objects, arithmetic operators, increment/decrement, and assignment operators.

let num1 = Number(prompt("Enter first number:"));
let num2 = Number(prompt("Enter second number:"));

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);
console.log("Modulus:", num1 % num2);
console.log("Power:", num1 ** num2);