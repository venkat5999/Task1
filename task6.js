// Task 1 — Student Result Analyzer
// Create a program that accepts a student's:
// Name
// Department
// 5 subject marks
// Requirements:
// Calculate total marks
// Calculate average
// Find pass/fail
// Assign grade:
// 90+ → A
// 75–89 → B
// 60–74 → C
// 50–59 → D
// Below 50 → Fail
// Display the result using console.log()
// Concepts: variables, arithmetic operators, if/else, functions.


// let name = "Venkat";
// let department = "EEE";

// let mark1 = 85;
// let mark2 = 78;
// let mark3 = 92;
// let mark4 = 70;
// let mark5 = 88;



// function calculateResult() {


//     let total = mark1 + mark2 + mark3 + mark4 + mark5;


//     let average = total / 5;


//     let result;

//     if (mark1 >= 50 && mark2 >= 50 && mark3 >= 50 && mark4 >= 50 && mark5 >= 50) {
//         result = "Pass";
//     } else {
//         result = "Fail";
//     }

//   
//     let grade;

//     if (average >= 90) {
//         grade = "A";
//     } 
//     else if (average >= 75) {
//         grade = "B";
//     } 
//     else if (average >= 60) {
//         grade = "C";
//     } 
//     else if (average >= 50) {
//         grade = "D";
//     } 
//     else {
//         grade = "Fail";
//     }

//  
//     console.log("Name:", name);
//     console.log("Department:", department);
//     console.log("Subject 1:", mark1);
//     console.log("Subject 2:", mark2);
//     console.log("Subject 3:", mark3);
//     console.log("Subject 4:", mark4);
//     console.log("Subject 5:", mark5);
//     console.log("Total Marks:", total);
//     console.log("Average:", average);
//     console.log("Result:", result);
//     console.log("Grade:", grade);
// }



// calculateResult();
// -------------------------------------------------------------------------------------------------------------------------

// Task 2 — Employee Salary Calculator
// Create an employee object:
// {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// }
// Calculate:
// Basic salary
// 10% bonus if experience ≥ 2
// 15% bonus if experience ≥ 5
// Final salary
// Use a function:
// calculateSalary(employee)
// Concepts: objects, functions, conditions, arithmetic.

// let employee = {
//     name: "Arun",
//     role: "Developer",
//     salary: 45000,
//     experience: 2
// };


// function calculateSalary(employee) {

//     let basicSalary = employee.salary;
//     let bonus = 0;

    
//     if (employee.experience >= 5) {
//         bonus = basicSalary * 15 / 100;
//     }
//     else if (employee.experience >= 2) {
//         bonus = basicSalary * 10 / 100;
//     }

    
//     let finalSalary = basicSalary + bonus;

    
    
//     console.log("Name:", employee.name);
//     console.log("Role:", employee.role);
//     console.log("Experience:", employee.experience, "years");
//     console.log("Basic Salary:", basicSalary);
//     console.log("Bonus:", bonus);
//     console.log("Final Salary:", finalSalary);
// }


// // Function call
// calculateSalary(employee);
// ------------------------------------------------------------------------------------------------------------------------------------------------

// Task 3 — Product Filter System
// Create an array:
// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];
// Perform:
// Get products above ₹2,000
// Get only electronics
// Find the first product below ₹1,000
// Calculate total price of all products
// Check whether any product costs more than ₹50,000
// Check whether every product has a price above ₹500
// Concepts: filter(), find(), reduce(), some(), every().
// let products = [
//     { name: "Laptop", price: 55000, category: "electronics" },
//     { name: "Mouse", price: 800, category: "electronics" },
//     { name: "Shirt", price: 1200, category: "fashion" },
//     { name: "Shoes", price: 2500, category: "fashion" },
//     { name: "Phone", price: 30000, category: "electronics" }
// ];



// let expensiveProducts = products.filter(function(product) {
//     return product.price > 2000;
// });

// console.log("Products above ₹2,000:");
// console.log(expensiveProducts);



// let electronics = products.filter(function(product) {
//     return product.category === "electronics";
// });

// console.log("Electronics:");
// console.log(electronics);



// let cheapProduct = products.find(function(product) {
//     return product.price < 1000;
// });

// console.log("First product below ₹1,000:");
// console.log(cheapProduct);



// let totalPrice = products.reduce(function(total, product) {
//     return total + product.price;
// }, 0);

// console.log("Total price:", totalPrice);



// let isAnyAbove50000 = products.some(function(product) {
//     return product.price > 50000;
// });

// console.log("Any product above ₹50,000:", isAnyAbove50000);



// let isEveryAbove500 = products.every(function(product) {
//     return product.price > 500;
// });

// console.log("Every product above ₹500:", isEveryAbove500);
// ------------------------------------------------------------------------------------------------------------------
// Task 4 — Employee Management
// Create an array of 6 employees.
// Each employee should have:
// {
//     id: 101,
//     name: "Kavin",
//     role: "Frontend Developer",
//     salary: 40000
// }
// Perform:
// Display all employee names
// Display employees earning above ₹40,000
// Find employee with ID 103
// Calculate total salary
// Find highest-paid employee
// Sort employees from highest salary to lowest
// Create a new array containing only employee names
// Concepts: objects, arrays, map(), filter(), find(), reduce(), sort().
// let employees = [
//     {
//         id: 101,
//         name: "Venkat",
//         role: "Frontend Developer",
//         salary: 40000
//     },
//     {
//         id: 102,
//         name: "Raja",
//         role: "Backend Developer",
//         salary: 50000
//     },
//     {
//         id: 103,
//         name: "Rahul",
//         role: "Full Stack Developer",
//         salary: 65000
//     },
//     {
//         id: 104,
//         name: "Siya",
//         role: "UI Designer",
//         salary: 35000
//     },
//     {
//         id: 105,
//         name: "Suresh",
//         role: "Software Engineer",
//         salary: 55000
//     },
//     {
//         id: 106,
//         name: "Krish",
//         role: "Tester",
//         salary: 45000
//     }
// ];



// let employeeNames = employees.map(function(employee) {
//     return employee.name;
// });

// console.log("Employee Names:");
// console.log(employeeNames);



// let highSalaryEmployees = employees.filter(function(employee) {
//     return employee.salary > 40000;
// });

// console.log("Employees earning above ₹40,000:");
// console.log(highSalaryEmployees);



// let employee103 = employees.find(function(employee) {
//     return employee.id === 103;
// });

// console.log("Employee with ID 103:");
// console.log(employee103);



// let totalSalary = employees.reduce(function(total, employee) {
//     return total + employee.salary;
// }, 0);

// console.log("Total Salary:", totalSalary);



// let highestPaid = employees.reduce(function(highest, employee) {
//     if (employee.salary > highest.salary) {
//         return employee;
//     } else {
//         return highest;
//     }
// });

// console.log("Highest Paid Employee:");
// console.log(highestPaid);



// let sortedEmployees = [...employees].sort(function(a, b) {
//     return b.salary - a.salary;
// });

// console.log("Employees sorted by salary:");
// console.log(sortedEmployees);



// let namesOnly = employees.map(function(employee) {
//     return employee.name;
// });

// console.log("Names Only:");
// console.log(namesOnly);
// --------------------------------------------------------------------------------------------------------------------------------
// Task 5 — Shopping Cart
// Create:
// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];
// Calculate:
// Item total:
// price × quantity
// Then calculate:
// Total cart value
// 10% discount if total > ₹50,000
// Final payable amount
// Create a function:
// calculateCart(cart)
// Concepts: objects, functions, reduce(), conditions.

// let cart = [
//     { name: "Laptop", price: 50000, quantity: 1 },
//     { name: "Mouse", price: 1000, quantity: 2 },
//     { name: "Keyboard", price: 2000, quantity: 1 }
// ];


// function calculateCart(cart) {

   
//     let totalCartValue = cart.reduce(function(total, item) {
//         let itemTotal = item.price * item.quantity;

//         console.log(item.name + " Total:", itemTotal);

//         return total + itemTotal;
//     }, 0);


//     let discount = 0;

//     if (totalCartValue > 50000) {
//         discount = totalCartValue * 10 / 100;
//     }


   
//     let finalAmount = totalCartValue - discount;


    
//     console.log("Total Cart Value:", totalCartValue);
//     console.log("Discount:", discount);
//     console.log("Final Payable Amount:", finalAmount);
// }



// calculateCart(cart);
// -------------------------------------------------------------------------------------------------------------------------
// Task 6 — Student Search System
// Create an array of students:
// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];
// Requirements:
// Display all student names
// Display students who scored above 80
// Find student named "Priya"
// Calculate average mark
// Check whether anyone failed
// Check whether everyone scored above 40
// Sort students by marks

// let students = [
//     { name: "Arun", age: 21, mark: 85 },
//     { name: "Priya", age: 22, mark: 92 },
//     { name: "Karthi", age: 20, mark: 67 },
//     { name: "Dinesh", age: 23, mark: 45 }
// ];



// let studentNames = students.map(function(student) {
//     return student.name;
// });

// console.log("All Student Names:");
// console.log(studentNames);


// let highScorers = students.filter(function(student) {
//     return student.mark > 80;
// });

// console.log("Students who scored above 80:");
// console.log(highScorers);



// let priya = students.find(function(student) {
//     return student.name === "Priya";
// });

// console.log("Student named Priya:");
// console.log(priya);



// let totalMarks = students.reduce(function(total, student) {
//     return total + student.mark;
// }, 0);

// let averageMark = totalMarks / students.length;

// console.log("Average Mark:", averageMark);



// let anyoneFailed = students.some(function(student) {
//     return student.mark < 50;
// });

// console.log("Anyone failed:", anyoneFailed);



// let everyoneAbove40 = students.every(function(student) {
//     return student.mark > 40;
// });

// console.log("Everyone scored above 40:", everyoneAbove40);



// let sortedStudents = [...students].sort(function(a, b) {
//     return b.mark - a.mark;
// });

// console.log("Students sorted by marks:");
// console.log(sortedStudents);
// --------------------------------------------------------------------------------------------------------------------
// Task 7 — Array Transformation Challenge
// Given:
// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];
// Perform:
// Create a new array containing numbers × 2
// Get only even numbers
// Get numbers greater than 15
// Find the first number greater than 20
// Find total of all numbers
// Check whether any number is greater than 40
// Check whether every number is positive
// Sort from highest to lowest
// Restriction: Use array higher-order methods wherever possible.

// let numbers = [12, 5, 8, 21, 44, 7, 30, 15];



// let doubledNumbers = numbers.map(function(number) {
//     return number * 2;
// });

// console.log("Numbers × 2:");
// console.log(doubledNumbers);



// let evenNumbers = numbers.filter(function(number) {
//     return number % 2 === 0;
// });

// console.log("Even Numbers:");
// console.log(evenNumbers);



// let greaterThan15 = numbers.filter(function(number) {
//     return number > 15;
// });

// console.log("Numbers greater than 15:");
// console.log(greaterThan15);



// let firstGreaterThan20 = numbers.find(function(number) {
//     return number > 20;
// });

// console.log("First number greater than 20:");
// console.log(firstGreaterThan20);



// let total = numbers.reduce(function(sum, number) {
//     return sum + number;
// }, 0);

// console.log("Total:");
// console.log(total);



// let anyGreaterThan40 = numbers.some(function(number) {
//     return number > 40;
// });

// console.log("Any number greater than 40:");
// console.log(anyGreaterThan40);



// let allPositive = numbers.every(function(number) {
//     return number > 0;
// });

// console.log("Every number is positive:");
// console.log(allPositive);



// let sortedNumbers = [...numbers].sort(function(a, b) {
//     return b - a;
// });

// console.log("Sorted highest to lowest:");
// console.log(sortedNumbers);
// --------------------------------------------------------------------------------------------------------------------------
// Task 8 — String Analyzer
// Ask the user to enter a sentence.
// Example:
// "JavaScript is very powerful"
// Display:
// Total characters
// Uppercase sentence
// Lowercase sentence
// Whether it contains "JavaScript"
// First character
// Last character
// Number of words
// Replace "JavaScript" with "Python"
// Convert sentence into an array using split()
// Concepts: length, includes(), slice(), toUpperCase(), toLowerCase(), replace(), split().

// let sentence = prompt("Enter a sentence:");



// let totalCharacters = sentence.length;

// console.log("Total Characters:", totalCharacters);



// let upperCaseSentence = sentence.toUpperCase();

// console.log("Uppercase:", upperCaseSentence);



// let lowerCaseSentence = sentence.toLowerCase();

// console.log("Lowercase:", lowerCaseSentence);



// let containsJavaScript = sentence.includes("JavaScript");

// console.log("Contains JavaScript:", containsJavaScript);



// let firstCharacter = sentence.slice(0, 1);

// console.log("First Character:", firstCharacter);



// let lastCharacter = sentence.slice(-1);

// console.log("Last Character:", lastCharacter);



// let words = sentence.trim().split(" ");

// console.log("Number of Words:", words.length);



// let replacedSentence = sentence.replace("JavaScript", "Python");

// console.log("After Replacement:", replacedSentence);



// let sentenceArray = sentence.split(" ");

// console.log("Sentence Array:", sentenceArray);
// ---------------------------------------------------------------------------------------------------------------
// 🔥 Final Mini Project — Employee Dashboard
// This would be a good intermediate-level class project.
// Create an Employee Dashboard using JavaScript.
// Data
// let employees = [
//     {
//         id: 101,
//         name: "Arun",
//         department: "IT",
//         salary: 45000,
//         experience: 2
//     },
//     {
//         id: 102,
//         name: "Priya",
//         department: "HR",
//         salary: 50000,
//         experience: 4
//     },
//     {
//         id: 103,
//         name: "Karthi",
//         department: "IT",
//         salary: 65000,
//         experience: 6
//     }
// ];
// Students must implement
// 1. Employee List
// Display all employees.
// 2. Search
// Search employee by name.
// 3. Department Filter
// Filter employees by department.
// 4. Salary Filter
// Show employees earning more than ₹50,000.
// 5. Salary Calculation
// Calculate total company salary.
// 6. Highest Salary
// Find the highest-paid employee.
// 7. Experience
// Find employees with more than 3 years' experience.
// 8. Sorting
// Sort employees by salary:
// Low → High
// High → Low
// 9. Statistics
// Display:
// Total Employees: 3
// Total Salary: ₹160000
// Highest Salary: ₹65000
// Average Salary: ₹53333

let employees = [
    {
        id: 101,
        name: "Arun",
        department: "IT",
        salary: 45000,
        experience: 2
    },
    {
        id: 102,
        name: "Priya",
        department: "HR",
        salary: 50000,
        experience: 4
    },
    {
        id: 103,
        name: "Karthi",
        department: "IT",
        salary: 65000,
        experience: 6
    }
];


// 1. Display all employees
function displayEmployees() {
    console.log("----- All Employees -----");

    employees.forEach(function(employee) {
        console.log(employee);
    });
}


// 2. Search employee by name
function searchEmployee(name) {

    let employee = employees.find(function(emp) {
        return emp.name.toLowerCase() === name.toLowerCase();
    });

    console.log("----- Search Result -----");

    if (employee) {
        console.log(employee);
    } else {
        console.log("Employee not found");
    }
}


// 3. Filter employees by department
function filterByDepartment(department) {

    let result = employees.filter(function(employee) {
        return employee.department.toLowerCase() === department.toLowerCase();
    });

    console.log("----- Department Filter -----");
    console.log(result);
}


// 4. Employees earning more than ₹50,000
function highSalaryEmployees() {

    let result = employees.filter(function(employee) {
        return employee.salary > 50000;
    });

    console.log("----- Salary Above ₹50,000 -----");
    console.log(result);
}


// 5. Calculate total company salary
function calculateTotalSalary() {

    let totalSalary = employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);

    console.log("Total Company Salary: ₹" + totalSalary);

    return totalSalary;
}


// 6. Find highest-paid employee
function findHighestPaidEmployee() {

    let highestPaid = employees.reduce(function(highest, employee) {

        if (employee.salary > highest.salary) {
            return employee;
        }

        return highest;
    });

    console.log("----- Highest Paid Employee -----");
    console.log(highestPaid);

    return highestPaid;
}


// 7. Employees with more than 3 years experience
function experiencedEmployees() {

    let result = employees.filter(function(employee) {
        return employee.experience > 3;
    });

    console.log("----- More Than 3 Years Experience -----");
    console.log(result);
}


// 8A. Sort salary from Low to High
function sortLowToHigh() {

    let result = [...employees].sort(function(a, b) {
        return a.salary - b.salary;
    });

    console.log("----- Salary: Low to High -----");
    console.log(result);
}


// 8B. Sort salary from High to Low
function sortHighToLow() {

    let result = [...employees].sort(function(a, b) {
        return b.salary - a.salary;
    });

    console.log("----- Salary: High to Low -----");
    console.log(result);
}


// 9. Display Statistics
function displayStatistics() {

    let totalEmployees = employees.length;

    let totalSalary = employees.reduce(function(total, employee) {
        return total + employee.salary;
    }, 0);

    let highestSalary = employees.reduce(function(highest, employee) {
        return employee.salary > highest.salary ? employee : highest;
    });

    let averageSalary = totalSalary / totalEmployees;

    console.log("----- Employee Statistics -----");
    console.log("Total Employees:", totalEmployees);
    console.log("Total Salary: ₹" + totalSalary);
    console.log("Highest Salary: ₹" + highestSalary.salary);
    console.log("Average Salary: ₹" + Math.round(averageSalary));
}
displayEmployees();

searchEmployee("Priya");

filterByDepartment("IT");

highSalaryEmployees();

calculateTotalSalary();

findHighestPaidEmployee();

experiencedEmployees();

sortLowToHigh();

sortHighToLow();

displayStatistics();
