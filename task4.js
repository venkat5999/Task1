// Task 1 — For Loop
// Print numbers from 1 to 10 using a for loop.
// Expected: 1 2 3 ... 10
// let i = 1;
// for(i=1;i<=10;i++) {
//     console.log(i)
// }
// --------------------------------------------------------------------------------------------------------------------
// Task 2 — Reverse Number
// Print numbers from 10 to 1 using a for loop.
// let i = 1;
// for(i=10;i>=1;i--){
//     console.log(i)
// }
// ---------------------------------------------------------------------------------------------------------------
// Task 3 — Even Numbers
// Print all even numbers from 1 to 20.
// 2 4 6 8 ... 20
// for(i =1;i<=20;i++){
//     if(i % 2==0){
//     console.log(i)
//     }
// }
// --------------------------------------------------------------------------------------------------------------
// 🟢 Task 4 — Odd Numbers
// Print all odd numbers from 1 to 20.
// for(i=1;i<=20;i++){
//     if(i%2 !== 0){
//         console.log(i)
//     }
// }
// -------------------------------------------------------------------------------------------------------------------
// 🟡 Task 5 — Multiplication Table
// Get a number from the user.
// Print its multiplication table from 1 to 10.
// Example:
// 5 x 1 = 5 5 x 2 = 10 5 x 3 = 15 ... 5 x 10 = 50
// let num =5;

// for(i=1;i<=10;i++){
//     console.log(num +"*"+i+"="+num*i)
// }
// -------------------------------------------------------------------------------------------------------------
// 🔵 While Loop
// Task 6 — Countdown
// Using while, print:
// 10 9 8 7 6 5 4 3 2 1
// let i = 10;

// while (i >= 1) {
//     console.log(i);
//     i--;
// }
// ---------------------------------------------------------------------------------------------------------
// Task 7 — Sum of Numbers
// Using while, calculate:
// 1 + 2 + 3 + ... + 10
// Expected:
// 55
// let i = 1;
// let sum =0;
// while(i<=10){
//     sum = sum+i;
//     i++
// }
// console.log(sum)
// ---------------------------------------------------------------------------------------------------------------
// Task 8 — Print Numbers
//  Use do...while to print:
//  1
//  2
//  3
//  4
//  5
 
//  let i = 1;
//  do {
//   console.log(i);
//    i++;
//  } while (i <= 5);
// ---------------------------------------------------------------------------------------------------------------
// Task 9 — Do While Understanding
// What is the output?
// let a = 10;
 
// do {
//     console.log(a);
//     a++;
// } while (a <= 5);
// -----------------------------------------------------------------------------------------------------------------------------------
// 🟠 For...of
// Your notes use for...of with strings and arrays.
// Task 10 — String Characters
// let name = "javascript";
// Print every character using for...of.
 
// let name="javascript";
// for(let char of name){
//     console.log(char);
 
// }
// -------------------------------------------------------------------------------------------------------------------
// Task 11 — Array Values
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
// Use for...of to print every fruit.
 
// let fruits = ["apple", "orange", "banana", "mango", "grapes"];
 
// for (fruit of fruits) {
//   console.log(fruit);
// }
// ----------------------------------------------------------------------------------------------------------------------------
 // Task 12 — Student Names
// Create an array of 5 student names.
// Use for...of to print:
// Student: Arun
// Student: Priya
// ...
 
// let students = ["Arun", "Priya", "Rahul", "Sneha", "Kiran"];
// for (let student of students) {
//   console.log(student);
// }
// ------------------------------------------------------------------------------------------------------------------------------
// 🔴 For...in
// Your notes use for...in for objects.
// Task 13 — Employee Object
// Create:
// let employee = {
//     name: "Arun",
//     age: 25,
//     role: "Developer",
//     city: "Chennai"
// };
// Use for...in to print:
// name Arun
// age 25
// role Developer
// city Chennai
 
// let employee = {
//   name: "Arun",
//   age: 25,
//   role: "Developer",
//   city: "Chennai",
// };
// for (let emp in employee) {
//   console.log(emp, employee[emp]);
// }
 
//-------------------------------------------------------------------------------------------------------------------------
// Task 14 — Product Object
// Create:
// productName
// price
// brand
// category
// stock
// Use for...in to print every key and value.
 
// let products = {
//   productName: "Mobiles",
//   price: 50000,
//   brand: "Apple",
//   category: "Electronics",
//   stock: 10,
// };
// for(let product in products){
//     console.log(product,products[product]);
// }
// -----------------------------------------------------------------------------------------------------------------
// 🟡 Functions
// Task 15 — Simple Function
// Create a function called welcome().
// It should print:
// Welcome to JavaScript
// Call the function 3 times.
 
// function welcome(){
// console.log("Welcome to Javascript")
// }
// welcome();
// welcome();
// welcome();
 
// -------------------------------------------------------------------------------------------------------------------------------
// Task 16 — Function With Parameter
// Create:
// function greet(name) {
//     // code
// }
// Call:
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// Expected:
// Hello Naveen
// Hello Arun
// Hello Priya
 
// function greet(name){
//     console.log("Hello" + name);
 
// }
// greet("Naveen");
// greet("Arun");
// greet("Priya");
// // -------------------------------------------------------------------------------------------------------------------------------

// Task 17 — Multiple Parameters
// Create a function:
// student(name, age, department)
// Print all three values.
// Call it with 3 different students.
// Your syllabus specifically covers parameters and arguments.
 
// function student(name, age, department) {
//   console.log("Name:", name);
//   console.log("Age:", age);
//   console.log("Department:", department);
// }
// student("venkat",25,"EEE");
// student("ravi",25,"CSE");
// student("gowtham",25,"IT");
// -------------------------------------------------------------------------------------------------------------------------------
// 
// 🔵 Return
// Task 18 — Addition Function
// Create:
// function add(a, b) {
//     // return result
// }
// Call:
// let result = add(10, 20);
// console.log(result);
// Expected:
// 30
 
// function add(a,b){
//     return a+b;
 
// }
// let result=add(10,20);
// console.log(result)
 // -------------------------------------------------------------------------------------------------------------------------------

// Task 19 — Salary
// Create:
// function salary(amount) {
//     return amount;
// }
// Store the returned value in a variable and print it.
 
// function salary(amount) {
//   return amount;
// }
// let empSalary = salary(50000);
// console.log(empSalary);
 
 // -------------------------------------------------------------------------------------------------------------------------------

// Task 20 — Bonus Calculator
// Create:
// function bonus(salary, bonusAmount)
// Return:
// salary + bonusAmount
// Example:
// Salary = 50000
// Bonus = 5000
 
// Total = 55000
 
// function bonus(salary, bonusAmount) {
//   return salary + bonusAmount;
// }
// let total = bonus(50000, 5000);
// console.log(total);
// -------------------------------------------------------------------------------------------------------------------------------
// 🟣 Default Parameter
// Task 21
// Create:
// function employee(name, role = "Developer") {
//     // print name and role
// }
// Call:
// employee("Arun");
// employee("Priya", "Designer");
// Find the output.
// This follows the default-parameter concept in your notes.
 
// function employee(name, role = "Developer") {
//   console.log("Name:",name);
//   console.log("Role:", role);
 
// }
// employee("VENKAT")
// employee("Swetha","Designer");
//-----------------------------------------------------------------------------------------------------------------------
// 🔥 Function Types
// Task 22 — Named Function
// Create a named function:
// function square(number) {
//     return number * number;
// }
// Call it with 5 different numbers.
 
// function square(number){
//     return number*number
 
// }
// console.log( square(1));
// console.log(square(5));
// console.log(square(15));
// console.log(square(25));
// console.log(square(35));
 
 //-----------------------------------------------------------------------------------------------------------------------

// Task 23 — Anonymous Function
// Create an anonymous function and store it in a variable.
// let calculate = function(a, b) {
//     return a + b;
// };
// Call it and print the result.
 
// let calculate = function (a, b) {
//   return a + b;
// };
// let result = calculate(5, 10);
// console.log(result);
 
 //-----------------------------------------------------------------------------------------------------------------------

// Task 24 — Arrow Function
// Create an arrow function that accepts two numbers and returns their multiplication.
// let multiply = (a, b) => {
//     return a * b;
// };
 
// let multiply = (a, b) => {
//   return a * b;
// };
// console.log(multiply(10, 5));
 
//-----------------------------------------------------------------------------------------------------------------------

// 🔴 Scope
// Task 25 — Predict the Output
// function test() {
 
//     if (true) {
 
//         var a = 10;
//         let b = 20;
//         const c = 30;
 
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
 
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }
// 10,20,30
 
// test();
// Before running it, identify which values can be accessed.
// Your notes demonstrate var versus let/const inside a function and block.
 
// console.log(a);
 
// works because var is function scoped.
 
// But:
 
// console.log(b);
 
// causes:
 
// ReferenceError
 
// let is block scoped.
 
// same applies to:
 
// console.log(c);
 
//  const is also block scoped.
 
// ________________________________________
// 🟠 Hoisting
// Task 26 — Predict
// console.log(a);
 
// var a = 10;
// What happens?
// undefined
 
// JavaScript behaves approximately like:
 
// var a;
 
// console.log(a);
 
// a = 10;
 
// var is hoisted and initialized with undefined.
 
// OUTPUT
// undefined
//-----------------------------------------------------------------------------------------------------------------------

// Task 27
// Predict:
// console.log(b);
 
// let b = 20;
 
// Output:
 
// Reference rrror
 
// let is hoisted, but it cannot be accessed before its declaration and
 
// This period is called the Temporal Dead Zone.
//-----------------------------------------------------------------------------------------------------------------------

// Task 28
// Predict:
// console.log(c);
 
// const c = 30;
// Then explain the difference between the three.
 
// Output:
 
// Reference error
 
// const also has the Temporal Dead Zone.
//  var undefined .let ReferenceError .const ReferenceError
 
//-----------------------------------------------------------------------------------------------------------------------

// 🟢 IIFE
// Task 29 — Self Invoking Function
// Create an IIFE that immediately prints:
// Welcome to JavaScript
// Then create another IIFE that accepts:
// product
// discount
// and prints the discount message.
// Your notes demonstrate an IIFE using product and discount parameters.
 
// (function () {
//   console.log("Welcome to JavaScript");
// })();
 
// (function (product, discount) {
//   console.log(product + " has " + discount + " %discount ");
// })("Laptop", 20);
 
//-----------------------------------------------------------------------------------------------------------------------

// 🔵 Callback / Higher-Order Function
// Task 30
// Create:
// function welcome() {
//     console.log("Welcome");
// }
 
// function execute(callback) {
//     callback();
// }
 
// execute(welcome);
// Understand which function is the callback and which function is the higher-order function.
 
// OUTPUT
// Welcome
// Welcome=Callback Function
// Execute=higher-order function
//-----------------------------------------------------------------------------------------------------------------------

// 🟣 Generator Function
// Task 31 — Cashback
// Create a generator:
// function* cashback() {
//     yield "10% cashback";
//     yield "20% cashback";
//     yield "30% cashback";
//     yield "Better luck next time";
// }
 
// let result = cashback();
// for (let value of result) {
//   console.log(value);
// }
// Create the generator object and print all values using for...of.
// This matches the generator approach in your syllabus.
 
// Output
// 10% cashback
// 20% cashback
// 30% cashback
// Better luck next time
//-----------------------------------------------------------------------------------------------------------------------

// 🏆 FINAL MINI PROJECT
// Task 32 — Employee Management Console
// Create a simple Employee Management System using only the concepts you've learned.
// Employee data
// Create an array containing employee objects:
// Name
// Age
// Department
// Role
// Salary
// Example:
// let employees = [
//   {
//     name: "Arun",
//     age: 25,
//     department: "IT",
//     role: "Developer",
//     salary: 40000,
//   },
//   {
//     name: "Priya",
//     age: 24,
//     department: "HR",
//     role: "HR Executive",
//     salary: 35000,
//   },
// ];
// Requirements
// Use:
// 1. for...of
// Print every employee.
 
// for (let employee of employees) {
//   console.log("Employee:", employee.name);
//   console.log("Age:", employee.age);
//   console.log("Department:", employee.department);
//   console.log("Role:", employee.role);
//   console.log("Salary:", employee.salary);
// }
 
// 2. for...in
// Print each employee's keys and values.
 
// for (let employee of employees) {
//   console.log("Employee Details:");
//   for (let key in employee) {
//     console.log(key, employee[key]);
//   }
// }
 
// 3. Function
// Create a function to display employee information.
// 4. Function parameters
 
// Pass employee information to the function.
// function displayEmployee(name, age, department, role, salary) {
//   console.log("Name:", name);
//   console.log("Age:", age);
//   console.log("Department:", department);
//   console.log("Role:", role);
//   console.log("Salary:", salary);
// }
 
// for (let employee of employees) {
//   displayEmployee(
//     employee.name,
//     employee.age,
//     employee.department,
//     employee.role,
//     employee.salary,
//   );
// }
 
// 5. Return
// Create a function that returns an employee's salary.
 
// function getSalary(employee) {
//   return employee.salary;
// }
// 6. Condition
// Check:
// Salary >= 40000
 
// for (let employee of employees) {
//   if (employee.salary >= 40000) {
//     console.log(employee.name + " earns 40000 or more");
//   }
// }
// 7. Arrow function
// Create an arrow function for another simple calculation.
 
// let yearlySalary = (salary) => {
//   return salary * 12;
// };
// console.log(yearlySalary(40000));
// 8. Generator
// Create a generator that produces employee benefits:
 
// Medical Insurance
 
// Transport
// Food Allowance
// Bonus
function* benefits() {
  yield "Medical Insurance";
  yield "Transport";
  yield "Food Allowance";
  yield "Bonus";
}
let empBenefits = benefits();
for (let benefit of empBenefits) {
  console.log("Benefit:", benefit);
}
 
 