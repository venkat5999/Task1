// Task 1 — Variables

// Create variables using var, let, and const.
// Name
// Age
// City
// College
// Requirements:
// Print all values.
// Change the var value.
// Change the let value.
// Try changing the const value.
// Try redeclaring each variable and observe what happens.

// var name = "venkat";
// let age = 26;
// const City ="vizag";
// const college ="SRM UNIVERSITY";

// console.log(name)
// console.log(age)
// console.log(City)
// console.log(college)

// //change the var value

// var name = "prasad";
// console.log(name)

// //change the let value

// age = 30;
// console.log(age)

//change the const value
// const City = "Tamil nadu";

//redecalre values and getting error for let and const

// --------------------------------------------------------------------------------------------------------------------
// Task 2 — Printing Statements
// Use:
// console.log()
// alert()
// confirm()
// prompt()
// document.writeln()
// Create one example for each.

// console.log("Hello");
// alert("Welcome!");
// confirm("Are you sure?");
// let Name = prompt("Enter your name");
// console.log(Name);
// document.writeln("Hello World");

// -----------------------------------------------------------------------------------------------------------------------------

// Task 3 — User Details
// Get from the user:
// Name
// Age
// City
// Qualification
// Print the details in the console.

// let name = prompt("Enter your name");
// let age = prompt("Enter your age");
// let city = prompt("Enter your city");
// let qualification = prompt("Enter your qualification");

// console.log(name);
// console.log(age);
// console.log(city);
// console.log(qualification);

// ------------------------------------------------------------------------------------------------------------------------
// task 4 
// Create variables containing:
// "JavaScript"
// 100
// 99.5
// true
// false
// undefined
// null
// Print their values and use typeof to identify their data types.

// var course="JavaScript";
// var number=100;
// var num=99.5;
// var isstudent=true;
// var isteacher=false;
// let a=undefined;
// let b =null;

// console.log(typeof(course))
// console.log(typeof(number))
// console.log(typeof(num))
// console.log(typeof(isstudent))
// console.log(typeof(isteacher))
// console.log(typeof(a))
// console.log(typeof(b))

// --------------------------------------------------------------------------------------------------------------
// Task 5 — Student Array
// Create an array containing:
// Student names
// Example:
// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// Print:
// First student
// Second student
// Last student
// Total students
// Use only:
// array[index]
// array.length

// let students = ["Arun", "Priya", "Kumar", "Divya", "Rahul"];
// console.log(students[0])
// console.log(students[1])
// console.log(students[students.length-1])
// console.log([students.length])

// ----------------------------------------------------------------------------------------------------------------------------
// Task 6 — Employee Object
// Create an employee object containing:
// name
// age
// role
// skills
// isWorking
// qualification
// skills and qualification should be arrays.
// Print:
// Employee name
// Age
// Role
// First skill
// Last qualification
// Working status
// This follows the same array-inside-object structure from your notes.

// let employee = {
//     name: "Venkat",
//     age: 25,
//     role: "Developer",
//     skills: ["HTML", "CSS", "JavaScript"],
//     isWorking: true,
//     qualification: ["B.Tech", "M.Tech"]
// };

// console.log(employee.name);
// console.log(employee.age);
// console.log(employee.role);
// console.log(employee.skills[0]);
// console.log(employee.qualification[employee.qualification.length - 1]);
// console.log(employee.isWorking);

// --------------------------------------------------------------------------------------------------------------------------
// Arithmetic Operator Tasks
// Task 7 — Calculator
// Create:
// let a = 20;
// let b = 5;
// Calculate:
// Addition
// Subtraction
// Multiplication
// Division
// Modulus
// Exponentiation
// let a = 20;
// let b = 5;

// console.log("Addition:", a + b);
// console.log("Subtraction:", a - b);
// console.log("Multiplication:", a * b);
// console.log("Division:", a / b);
// console.log("Modulus:", a % b);
// console.log("Exponentiation:", a ** b);

// ---------------------------------------------------------------------------------------------------------------------------
// Task 8 — Shopping Bill
// Create:
// Shirt = 999
// Pant = 1499
// Shoes = 1999
// Bag = 799
// Calculate:
// Total price
// Use arithmetic operators only.
// let shirt = 999;
// let pant = 1499;
// let shoes = 1999;
// let bag = 799;
// let total = shirt + pant + shoes + bag;
// console.log(total);

// -------------------------------------------------------------------------------------------------------------------------------Task 9 — Increment & Decrement
// Task9 

// Find the output without running the code first.
// A
// let a = 10;
  //let b = a++;

// console.log(a);
// console.log(b);

// o/p----a=11,b=12


// B
// let a = 10;

// let b = ++a;

// console.log(a);
// console.log(b);

// o/p-----a=11,b=11


// C
// let a = 10;

// let b = a--;

// console.log(a);
// console.log(b);

// o/p----a=9,b=10

// D
// let a = 10;

// let b = --a;

// console.log(a);
// console.log(b);
// 0/p-------a=9,b=9
// -----------------------------------------------------------------------------------------------------------------------------------

// Task 10
// Start with:
// let num = 10;
// Perform separately:
// num += 5
// num -= 3
// num *= 2
// num /= 4
// num %= 3
// num **= 2
// Print the result after each operation.

// let num = 10;
// num += 5;
// console.log(num); // 15

// let num1 = 10;
// num -= 3;
// console.log(num1); // 7

// let num2 = 10;
// num *= 2;
// console.log(num); // 20

// let num3 = 10;
// num /= 4;
// console.log(num); // 2.5

// let num4 = 10;
// num **= 2;
// console.log(num); // 100

// ----------------------------------------------------------------------------------------------------------------
// Task 11 — Find Output
// Predict the result:

// console.log(10 > 5);//true
// console.log(10 < 5);//false
// console.log(10 >= 10);//true
// console.log(10 <= 9);//false

// console.log(5 == "5");//true
// console.log(5 === "5");//false

// console.log(10 != "10");//false
// console.log(10 !== "10");//true
// ------------------------------------------------------------------------------------------------------------------
// Task 12 — AND
// Find the output:
// console.log(true && true);//true
// console.log(true && false);//false
// console.log(false && true);//false
// console.log(false && false);//false

// ----------------------------------------------------------------------------------------------------------------------
// Task 13 — OR
// console.log(true || true);//true
// console.log(true || false);//true
// console.log(false || true);//true
// console.log(false || false);//false
// ------------------------------------------------------------------------------------------------------------------------
// Task 14 — NOT
// console.log(!true);//false
// console.log(!false);//true
// console.log(!(5 > 10));//true
// console.log(!(10 > 5));//false
// ---------------------------------------------------------------------------------------------------------------------
// task 15

// Find the output without executing:

// console.log(5 == "5" && !(5 === 5) || 6 > 7);//false

// console.log(10 > 5 && 8 < 12 || 4 === "4");//true

// console.log(7 === 7 && 10 != "10" || 5 >= 5);//true

// console.log(15 < 10 || 20 > 15 && 5 == "5");//ture
// -----------------------------------------------------------------------------------------------------------------------------------------
// task 16 

// Create:
// let age = 20;
// Use the ternary operator:
// age >= 18 → "Eligible to vote"
// age < 18  → "Not eligible"

// let age = 20;

// let result = age >= 18
//     ? "Eligible to vote"
//     : "Not eligible";

// console.log(result);
// -------------------------------------------------------------------------------------------------------------------------
// task 17 
// Create:
// let password = true;
// Use ternary:
// true  → "Login successful"
// false → "Wrong password"

// let password=true;
// let result = password
//     ? 'Login successful'
//     :  "wrong password"

// console.log(result)    
// ----------------------------------------------------------------------------------------------------------------
// task 18 
// Create:
// let name = "Naveen";
// let age = 25;
// let city = "Trichy";
// Print:
// My name is Naveen. I am 25 years old. I live in Trichy.
// Do it two ways:
// Using +
// Using template literals `${}`
// Your notes cover both approaches.

// let name = "venkat";
// let age = 25;
// let city ="vizag"

// console.log("My name is " + name + ". I am " + age + " years old. I live in " + city + ".");
// console.log(`My name is ${name}. I am ${age} years old. I live in ${city}.`);

// ----------------------------------------------------------------------------------------------------------------
// Task 19 — String Conversion
// Use String() to convert:
// 100
// true
// undefined
// null
// [1, 2]
// Print the result and its typeof.
// console.log(String(100), typeof String(100));
// console.log(String(true), typeof String(true));
// console.log(String(undefined), typeof String(undefined));
// console.log(String(null), typeof String(null));
// console.log(String([1, 2]), typeof String([1, 2]));

// --------------------------------------------------------------------------------------------------------------------
// task 20 
// Predict the output:
// console.log(Number());//0
// console.log(Number(""));//0
// console.log(Number("123"));//123
// console.log(Number("a1"));//NaN
// console.log(Number(true));//1
// console.log(Number(false));//0
// console.log(Number(undefined));//NaN
// console.log(Number(null));//0
// ---------------------------------------------------------------------------------------------------------------------
// Task 21 — Boolean Conversion
// Predict:
// console.log(Boolean());//false
// console.log(Boolean(""));//false
// console.log(Boolean("hello"));//true
// console.log(Boolean(123));//true
// console.log(Boolean(true));//true
// console.log(Boolean(false));//false
// console.log(Boolean(undefined));//false
// console.log(Boolean(null));//false
// console.log(Boolean([]));//true
// console.log(Boolean({}));//true
// -----------------------------------------------------------------------------------------------------------------------------
// Task 22 — Voting Eligibility
// Get age using prompt().
// 18 or above → "You can vote"
// Below 18   → "You can't vote"
// Use:
// if
// else

//     let age = Number(prompt("Enter your age"));

// if (age >= 18) {
//     console.log("You can vote");
// } else {
//     console.log("You can't vote");
// }
// -----------------------------------------------------------------------------------------------------------------------------
// task 23 
// Get a number from the user.
// Check:
// Positive
// Negative
// Zero
// Use if / else if / else.

// let num = Number(prompt("Enter a number"));

// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// --------------------------------------------------------------------------------------------------------------------
// task 24 
// Get marks from the user.
// Create:
// 90–100 → A Grade
// 80–89  → B Grade
// 70–79  → C Grade
// 60–69  → D Grade
// Below 60 → Fail
// Use if / else if / else.
// let marks = Number(prompt("Enter your marks"));

// if (marks >= 90 && marks <= 100) {
//     console.log("A Grade");
// } else if (marks >= 80) {
//     console.log("B Grade");
// } else if (marks >= 70) {
//     console.log("C Grade");
// } else if (marks >= 60) {
//     console.log("D Grade");
// } else {
//     console.log("Fail");
// }
// -------------------------------------------------------------------------------------------------------------------
// Task 25 
// Get:
// Age
// Height
// Weight
// Rules:
// Age >= 18
// Height >= 160
// Weight >= 60
// If all conditions are satisfied:
// "Congratulations! You are selected"
// Otherwise display the appropriate reason.
// let age = Number(prompt("Enter your age"));
// let height = Number(prompt("Enter your height"));
// let weight = Number(prompt("Enter your weight"));

// if (age >= 18) {

//     if (height >= 160) {

//         if (weight >= 60) {
//             console.log("Congratulations! You are selected");
//         } else {
//             console.log("Weight should be 60 or above");
//         }

//     } else {
//         console.log("Height should be 160 or above");
//     }

// } else {
//     console.log("Age should be 18 or above");
// }
// -------------------------------------------------------------------------------------------------------------------------
// Task 26 — Traffic Light
// Get a traffic light color:
// red
// yellow
// green
// Use switch.
// red    → Stop
// yellow → Ready
// green  → Go
// let color = prompt("Enter traffic light color");

// switch (color) {

//     case "red":
//         console.log("Stop");
//         break;

//     case "yellow":
//         console.log("Ready");
//         break;

//     case "green":
//         console.log("Go");
//         break;

//     default:
//         console.log("Invalid color");
// }
// ------------------------------------------------------------------------------------------------------------------------
//  task 27 
//  Create:
// let day = 1;
// Use switch:
// 1 → Monday
// 2 → Tuesday
// 3 → Wednesday
// 4 → Thursday
// 5 → Friday
// 6 → Saturday
// 7 → Sunday
// Add:
// // default → Invalid day
// let day = 1;

// switch (day) {

//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thursday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("Invalid day");

// }
// -----------------------------------------------------------------------------------------------------------------------
// Task 28 — Student Result System
// Create a small Student Result System using everything you've learned.
// Step 1 — Get user details
// Name
// Age
// City
// Step 2 — Get marks
// Tamil
// English
// Maths
// Step 3 — Calculate
// Total
// Average
// Step 4 — Check result
// Use if / else if / else:
// 90+ → A
// 80+ → B
// 70+ → C
// 60+ → D
// Below 60 → Fail
// Step 5 — Check voting
// Age >= 18
// Step 6 — Display
// Use a template string:
// Name: Naveen
// Age: 22
// City: Trichy
// Total: 250
// Average: 83.33
// Grade: B
// Voting: Eligible



let name = prompt("Enter your name");
let age = Number(prompt("Enter your age"));
let city = prompt("Enter your city");



let telugu = Number(prompt("Enter Telugu marks"));
let english = Number(prompt("Enter English marks"));
let maths = Number(prompt("Enter Maths marks"));



let total = telugu + english + maths;
let average = total / 3;



let grade;

if (average >= 90) {
    grade = "A";
} else if (average >= 80) {
    grade = "B";
} else if (average >= 70) {
    grade = "C";
} else if (average >= 60) {
    grade = "D";
} else {
    grade = "Fail";
}



let voting;

if (age >= 18) {
    voting = "Eligible";
} else {
    voting = "Not Eligible";
}



console.log(`
Name: ${name}
Age: ${age}
City: ${city}
Total: ${total}
Average: ${average}
Grade: ${grade}
Voting: ${voting}
`);