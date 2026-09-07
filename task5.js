// 1. Difference between var, let, and const
// - var → Can be redeclared and reassigned.
// - let → Cannot be redeclared in the same scope, but can be reassigned.
// - const → Cannot be redeclared or reassigned.
// ----------------------------------------------------------------------------------------------------------------
// 2. Can we redeclare variables?
// var → Yes
// let → No
// const → No
// -------------------------------------------------------------------------------------------------------------------------
// ### Q3: What is the output of this code?
// ```javascript
// var x = 5;
// let y = 10;
// const z = 15;

// x = 20;
// y = 25;
// z = 30;

// console.log(x, y, z);

// 0/p----Error Because const z cannot be reassigned.
// ------------------------------------------------------------------------------------------------------------------------
// ### Q4: What is the difference between declaring and initializing a variable?
// Declaration:Creating a variable is called declaration.
// let age;
// Initialization:Giving a value is called initialization.
// let age = 25;
// ---------------------------------------------------------------------------------------------------------------
// ### Q5: What will be the output?
// ```javascript
// let a;
// console.log(a);

// 0/p-----undefined
// -------------------------------------------------------------------------------------------------------------
// ### Q6: What is hoisting? Give an example.
// Hoisting means JavaScript handles variable/function declarations before executing the code.
// console.log(x);

// var x = 10;
// o/p----undefined
// var x is hoisted, but 10 is not.
// --------------------------------------------------------------------------------------------------------------------

// ### Q7: What is the difference between null and undefined?
// undefined → Value not assigned
// null       → Intentionally empty
// -------------------------------------------------------------------------------------------------------------------
// ### Q8: What will be the output?
// ```javascript
// console.log(typeof null); object
// console.log(typeof undefined);undefined
// console.log(typeof []);object
// console.log(typeof {});object
// -------------------------------------------------------------------------------------------------------------------------
// ## 📌 Operators

// ### Q9: What is the difference between == and ===?
// == checks mainly the value and can perform type conversion.
// 5 == "5"
// === checks value + data type.
// 5 === "5"
// ----------------------------------------------------------------------------------------------------------------------
// 10. Difference between ++i and i++
// ++i → Pre-increment
// First increment, then use the value.
// i++ → Post-increment
// First use the value, then increment.
// -----------------------------------------------------------------------------------------------------------------------
// Q11: What will be the output?
// ```javascript
// let x = 10;
// let y = "5";
// console.log(x + y);105
// console.log(x - y);5
// console.log(x * y);50
// console.log(x / y);2
// -------------------------------------------------------------------------------------------------------------------
// ### Q12: What are logical operators? Explain with examples.
// There are 3 main logical operators:
// 1. AND &&
// Both conditions must be true.
// true && true
// Output:
// true
// 2. OR ||
// At least one condition should be true.
// true || false
// Output:
// true
// 3. NOT !
// Reverses the result.
// !true
// Output:
// false
// ---------------------------------------------------------------------------------------------------------------------------
// ### Q13: What will be the output?
// console.log(5 > 3 && 10 > 5);true
// console.log(5 > 10 || 10 > 5);true
// console.log(!(5 > 3));false
// ----------------------------------------------------------------------------------------------------------------
// Q14: What is the ternary operator? Give an example.
// Ternary operator is a short form of if-else.
// condition ? trueValue : falseValue;
// let age = 20;

// let result = age >= 18 ? "men" : "boy";

// console.log(result);
// ----------------------------------------------------------------------------------------------------------------
//  Q15: What is the difference between implicit and explicit type casting?
//  Implicit-JavaScript automatically converts the type.
//  let x = "10";
// let y = 5;

// console.log(x - y);
// JavaScript automatically converts "10" to 10.
// 0/p----5
// Explicit--Developer manually converts the type.
// let x = "10";

// let y = Number(x);

// console.log(y);
// o/p----10
// Implicit → JavaScript converts
// Explicit → Developer converts
// -----------------------------------------------------------------------------------------------------------------------
// Q16: What will be the output?

// console.log(Number("123"));123
// console.log(Number("hello"));NaN
// console.log(Number(true));1
// console.log(Number(false));0
// console.log(Boolean(0));false
// console.log(Boolean("hello"));true
// ```
// -----------------------------------------------------------------------------------------------------------------
//  Q17: What is NaN? Give an example.
//  NaN means Not a Number.
// It occurs when we try to perform an invalid numeric conversion/calculation.
// let x = Number("hello");

// console.log(x);
// 0/p----NaN
// ---------------------------------------------------------------------------------------------------------------------
// Q18: What is the difference between if-else and switch?
// if-else is useful for conditions and ranges.
// switch is useful when checking one value against multiple fixed cases.
// -------------------------------------------------------------------------------------------------------------------
// Q19: What will be the output?
// ```javascript
// let age = 20;
// if(age >= 18) {
//     console.log("Adult");
// } else {
//     console.log("Minor");
// }
//     o/p--------Adult
// ----------------------------------------------------------------------------------------------------------------------------
//  Q20: What is nested if? Give an example.
//  An if statement inside another if statement is called nested if.
//  let age = 20;
// let hasId = true;

// if (age >= 18) {
//     if (hasId) {
//         console.log("Allowed");
//     }
// }
// o/p----Allowed
// ----------------------------------------------------------------------------------------------------------------
// Q21: Write a program to check if a number is even or odd using ternary operator.
// let num = 10;

// let result = num % 2 === 0 ? "Even" : "Odd";

// console.log(result);
// o/p---Even
// -------------------------------------------------------------------------------------------------------------------
// Q22. Difference between while and do-while
// while
// Condition is checked first.
// let i = 1;
// while(i <= 3) {
//     console.log(i);
//     i++;
// }
// do-while
// Code executes at least once, then condition is checked.
// let i = 1;

// do {
//     console.log(i);
//     i++;
// } while(i <= 3);

// imp:
// while    → Check → Execute
// do-while → Execute → Check
// -------------------------------------------------------------------------------------------------------------
// Q23: What will be the output?

// for(let i = 1; i <= 5; i++) {
//     console.log(i);
// }
//  o/p-
// 1
// 2
// 3
// 4
// 5
// -----------------------------------------------------------------------------------------------------------------
// Q24: What is the difference between for-of and for-in?
// for-of → gets values.
// let arr = ["Apple", "Banana", "Mango"];

// for(let value of arr) {
//     console.log(value);
// }
// o/p--Apple
// Banana
// Mango
// for-in → gets indexes/keys.
// let arr = ["Apple", "Banana", "Mango"];

// for(let index in arr) {
//     console.log(index);
// }
// o/p---0
// 1
// 2
// ---------------------------------------------------------------------------------------------------------------
// Q25: Write a program to find sum of numbers from 1 to 100.
// let sum = 0;

// for(let i = 1; i <= 100; i++) {
//     sum = sum + i;
// }

// console.log(sum);
// 0/p---5050
// ---------------------------------------------------------------------------------------------------------------
//  Q26: What is the difference between slice and splice?
//  slice()
// Used to get a portion of an array.
// Original array is not changed.
// let arr = [1, 2, 3, 4, 5];

// let result = arr.slice(1, 4);

// console.log(result);
// splice()
// Used to add, remove, or replace elements.
// Original array is changed.
// let arr = [1, 2, 3, 4];

// arr.splice(1, 2);

// console.log(arr);
// -----------------------------------------------------------------------------------------------------------
// Q27: What will be the output?
// ```javascript
// let arr = [1, 2, 3];
// arr.push(4);
// arr.pop();
// arr.unshift(0);
// arr.shift();
// console.log(arr);

// [1,2,3]

// push(4)     → [1,2,3,4]
// pop()       → [1,2,3]
// unshift(0)  → [0,1,2,3]
// shift()     → [1,2,3]
// ---------------------------------------------------------------------------------------------------------------
// Q28: What is the difference between function declaration and function expression?
// Function Declaration
// function add(a, b) {
//     return a + b;
// }
// Function is declared using the function keyword.
// It can be called before its declaration because function declarations are hoisted.
// add(10, 20);

// function add(a, b) {
//     return a + b;
// }
// Function Expression
// let add = function(a, b) {
//     return a + b;
// };
// Function is stored inside a variable.
// ------------------------------------------------------------------------------------------------------
// Q29. What is an arrow function?
// An arrow function is a shorter way to write a function.
// Normal function:
// function add(a, b) {
//     return a + b;
// }
// Arrow function:
// const add = (a, b) => {
//     return a + b;
// };
// --------------------------------------------------------------------------------------------------------
// Q30: What will be the output?
// ```javascript
// function greet() {
//     return "Hello";
// }
// let message = greet();
// console.log(message);
// ```
// o/p----Hello
// greet() → returns "Hello"
// message → stores "Hello"
// console.log(message) → Hello

