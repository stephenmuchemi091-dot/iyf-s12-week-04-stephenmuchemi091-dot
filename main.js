// Variable declarations
let myName = "Stephen Muchemi";
let myAge = 26;
const birthYear = 2000;
let isStudent = true;
let favoriteColors = ["Blue", "White"];
let today = new Date();

// typeof operator demonstrations
console.log("Type of myName:", typeof myName);    // string
console.log("Type of myAge:", typeof myAge);     // number
console.log("Type of isStudent:", typeof isStudent); // boolean

// let vs const demonstration
let score = 100;
score = 150; // Reassignment works with let
console.log("Current score:", score);

const PI = 3.14159;
// PI = 3; // 

// Exercise: Logging variables with descriptive messages
console.log("My name is:", myName);
console.log("My age is:", myAge);
console.log("Am I a student?", isStudent);
console.log("My favorite colors are:", favoriteColors);
console.log("Today's date and time is:", today);

// --- Exercise 1: Number Operations ---

let a = 10;
let b = 3;

console.log("Addition (a + b):", a + b);           // 13
console.log("Subtraction (a - b):", a - b);        // 7
console.log("Multiplication (a * b):", a * b);     // 30
console.log("Division (a / b):", a / b);           // 3.333...
console.log("Modulus (Remainder of 10/3):", a % b); // 1
console.log("Exponentiation (10 to the power of 3):", a ** b); // 1000

// Increment and Decrement
let count = 0;
count++; 
console.log("Count after increment:", count); // 1
count--; 
console.log("Count after decrement:", count); // 0

//Exercise 2: String Operations 
let firstName = "Stephen";
let lastName = "Muchemi";

//Concatenation 
let fullName = firstName + " " + lastName;
console.log("Full Name (Concatenation):", fullName);

//Template literals (preferred)
let greeting = `Hello, ${firstName}!`;
let message = `${firstName} has ${firstName.length} letters.`;
console.log("Greeting:", greeting);
console.log("Length Message:", message);

//String methods
console.log("Uppercase:", fullName.toUpperCase());
console.log("Lowercase:", fullName.toLowerCase());
console.log("First Character:", firstName.charAt(0));
console.log("Contains 'Stephen'?:", fullName.includes("Stephen"));


//Exercise 3: Comparison & Logical Operators

// Comparison 
console.log("Is 5 greater than 3?", 5 > 3);    // true
console.log("Is 5 less than 3?", 5 < 3);       // false
console.log("Is 5 exactly equal to 5?", 5 === 5);  // true (strict equality)
console.log("Is 5 loosely equal to '5'?", 5 == "5"); // true (loose equality - avoid!)
console.log("Is 5 not equal to 3?", 5 !== 3);  // true

// Logical 
console.log("AND (true && true):", true && true);   // true (both must be true)
console.log("OR (true || false):", true || false);  // true (at least one must be true)
console.log("NOT (!true):", !true);                // false (reverses the boolean)

//Challenge: Calculate and display

let ageInDays = myAge * 365;
let ageInHours = ageInDays * 24;
let yearTurn100 = birthYear + 100;

console.log(`I am approximately ${ageInDays} days old.`);
console.log(`That's about ${ageInHours} hours!`);
console.log(`I will turn 100 in the year ${yearTurn100}.`);

//Task 7.3: Functions

//Exercise 1. Function declaration 
function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Stephen"));

// 2. Function expression
const add = function(a, b) {
    return a + b;
};
console.log("Addition (10 + 5):", add(10, 5));

// 3. Arrow function 
const multiply = (a, b) => a * b;
console.log("Multiplication (10 * 3):", multiply(10, 3));

// 4. Arrow function with body
const divide = (a, b) => {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
};
console.log("Division (10 / 2):", divide(10, 2));
console.log("Division Error Check:", divide(10, 0));


//Exercise 2: Build These Functions

// 1. Calculate Area of Rectangle
const calculateArea = (width, height) => width * height;
console.log("Area (5x10):", calculateArea(5, 10));

// 2. Celsius to Fahrenheit
const celsiusToFahrenheit = (celsius) => (celsius * 9/5) + 32;
console.log("0°C in Fahrenheit:", celsiusToFahrenheit(0));

// 3. Check if Even
const isEven = (num) => num % 2 === 0;
console.log("Is 4 even?", isEven(4));
console.log("Is 7 even?", isEven(7));

// 4. Get Initials
const getInitials = (fullName) => {
    const names = fullName.split(" ");
    const initials = names.map(name => name.charAt(0).toUpperCase());
    return initials.join("");
};
console.log("Initials for 'Stephen Muchemi':", getInitials("Stephen Muchemi"));

// 5. Reverse a String
const reverseString = (str) => str.split("").reverse().join("");
console.log("Reverse of 'JavaScript':", reverseString("JavaScript"));

//Exercise 3: Default Parameters 


function greet(name = "Guest", greeting = "Hello") {
    return `${greeting}, ${name}!`;
}

console.log(greet());              // "Hello, Guest!"
console.log(greet("Stephen"));       // "Hello, Stephen!"
console.log(greet("Muchemi", "Hi"));   // "Hi, Muchemi!"

// Build: calculateTip function
const calculateTip = (bill, tipPercent = 15) => {
    return bill * (tipPercent / 100);
};

// Testing calculateTip
console.log("Tip on Ksh100 (Default 15%):", calculateTip(100)); // 15



// Task 7.4: control flow 
// Exercise 1: If/Else Statements

function getGrade(score) {
    if (score >= 90) {
        return "A";
    } else if (score >= 80) {
        return "B";
    } else if (score >= 70) {
        return "C";
    } else if (score >= 60) {
        return "D";
    } else {
        return "F";
    }
}

// Testing the function
console.log("Grade for 94:", getGrade(94)); // A
console.log("Grade for 83:", getGrade(83)); // B
console.log("Grade for 78:", getGrade(78)); // C
console.log("Grade for 67:", getGrade(67)); // D
console.log("Grade for 42:", getGrade(42)); // F



//Exercise 2: Switch Statements 

function getDayName(dayNumber) {
    switch (dayNumber) {
        case 0:
            return "Sunday";
        case 1:
            return "Monday";
        case 2:
            return "Tuesday";
        case 3:
            return "Wednesday";
        case 4:
            return "Thursday";
        case 5:
            return "Friday";
        case 6:
            return "Saturday";
        default:
            return "Invalid day";
    }
}

// Testing the function
console.log("Day 0:", getDayName(0)); // Sunday
console.log("Day 3:", getDayName(3)); // Wednesday
console.log("Day 2:", getDayName(2)); // Tuesday
console.log("Day 4:", getDayName(4)); // Thursday



//Exercise 3: Loops

// 1. For loop
console.log("For Loop (0-4):");
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// 2. While loop
console.log("While Loop (0-4):");
let loopCount = 0;
while (loopCount < 5) {
    console.log(loopCount);
    loopCount++;
}

// 3. For...of (arrays)
console.log("For...of Loop (Colors):");
const colorsList = ["red", "green", "blue"];
for (const color of colorsList) {
    console.log(color);
}


// 1. Print numbers 1-100
console.log("--- Numbers 1-100 ---");
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

// 2. Print only even numbers 1-50
console.log("--- Even Numbers 1-50 ---");
for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// 3. FizzBuzz (1-100)
console.log("--- FizzBuzz ---");
for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } else if (i % 3 === 0) {
        console.log("Fizz");
    } else if (i % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log(i);
    }
}

// 4. Print a triangle of stars
console.log("--- Triangle of Stars ---");
let triangle = "";
for (let i = 1; i <= 5; i++) {
    triangle += "*";
    console.log(triangle);
}



//Mini-Project: Calculator

function calculatoradd(a, b) {
    return a + b;
}

function calculatorsubtract(a, b) {
    return a - b;
}

function calculatormultiply(a, b) {
    return a * b;
}

function calculatordivide(a, b) {
    if (b === 0) {
        return "Error: Cannot divide by zero!";
    }
    return a / b;
}


function calculate(num1, operator, num2) {
    switch (operator) {
        case "+":
            return calculatoradd(num1, num2);
        case "-":
            return calculatorsubtract(num1, num2);
        case "*":
            return calculatormultiply(num1, num2);
        case "/":
            return calculatordivide(num1, num2);
        case "%":
            return num1 % num2;
        case "**":
            return num1 ** num2;
        default:
            return "Invalid operator. Please use +, -, *, /, %, or **.";
    }
}

// Testing the Calculator
console.log("--- Calculator Tests ---");
console.log("Addition (10 + 5):", calculate(10, "+", 5));       // 15
console.log("Subtraction (10 - 5):", calculate(10, "-", 5));    // 5
console.log("Multiplication (10 * 5):", calculate(10, "*", 5)); // 50
console.log("Division (10 / 2):", calculate(10, "/", 2));       // 5
console.log("Division by Zero (10 / 0):", calculate(10, "/", 0)); // Error message
console.log("Modulus (10 % 3):", calculate(10, "%", 3));        // 1
console.log("Power (2 ** 3):", calculate(2, "**", 3));          // 8



//Task 8.1: Array 
//Exercise 1: Array Basics

// Creating arrays
const fruits = ["mango", "pineapple", "watermelon"];
const numbers = [1, 2, 3, 4, 5];
const mixed = ["hello", 30, true, null];

// Accessing elements 
console.log("First fruit:", fruits[0]);     
console.log("Number of fruits:", fruits.length); 

// Modifying arrays
fruits.push("pineapple");        
console.log("After push:", fruits);

fruits.unshift("mango");     
console.log("After unshift:", fruits);

fruits.pop();                
console.log("After pop:", fruits);

fruits.shift();              
console.log("After shift:", fruits);



//Exercise 2: Array Methods

const numbersList = [1, 2, 3, 4, 5];

//forEach
console.log("forEach output:");
numbersList.forEach(num => console.log(`Double of ${num} is ${num * 2}`));

//map 
const doubledNumbers = numbersList.map(num => num * 2);
console.log("Mapped (Doubled):", doubledNumbers); // [2, 4, 6, 8, 10]

//filter
const evenOnly = numbersList.filter(num => num % 2 === 0);
console.log("Filtered (Evens):", evenOnly); // [2, 4]

//find
const firstFoundEven = numbersList.find(num => num % 2 === 0);
console.log("First even found:", firstFoundEven); // 2

//reduce
const totalSum = numbersList.reduce((accumulator, current) => accumulator + current, 0);
console.log("Sum of numbers:", totalSum); // 15

//includes 
console.log("Contains 3?", numbersList.includes(3)); // true



// Build: use array methods to

const myNumbers = [5, 15, 12, 8, 7, 15, 3];

// 1. Double all numbers in an array
const doubled = myNumbers.map(num => num * 2);
console.log("Doubled Numbers:", doubled);

// 2. Filter out negative numbers 
const positiveNumbers = myNumbers.filter(num => num >= 0);
console.log("Positive Numbers Only:", positiveNumbers);

// 3. Find the first number greater than 10
const firstLargeNumber = myNumbers.find(num => num > 10);
console.log("First number > 10:", firstLargeNumber);

// 4. Calculate the product of all numbers
const totalProduct = myNumbers.reduce((total, num) => total * num, 1);
console.log("Product of all numbers:", totalProduct);



// Task 8.2: Object 
//Exercise 1: Object Basics

// Creating an object 
const person = {
    firstName: "Stephen",
    lastName: "Muchemi",
    age: 26,
    isStudent: false,
    hobbies: ["watching movies"],
    address: {
        city: "Nairobi",
        country: "Kenya"
    }
};

// Accessing properties
console.log("First Name:", person.firstName);         
console.log("Last Name:", person["lastName"]);       
console.log("City:", person.address.city);          

// Modifying properties
person.age = 26;                         
person.phone = "0713 390 670";            
delete person.isStudent;                 

console.log("Updated Person Object:", person);



//Exercise 2: Object Methods 

const objectCalculator = {
    add: function(a, b) {
        return a + b;
    },
    // 2. Shorthad method syntax 
    subtract(a, b) {
        return a - b;
    },
    // 3. Arrow function
    multiply: (a, b) => a * b
};

console.log("add(5, 3):", objectCalculator.add(5, 3));       // 8
console.log("subtract(10, 4):", objectCalculator.subtract(10, 4)); // 6
console.log("multiply(2, 6):", objectCalculator.multiply(2, 6));   // 12



//Exercise 3: Object Iteration 

const examScores = {
    math: 95,
    english: 88,
    science: 92
};

// 1. Get keys
const keys = Object.keys(examScores);
console.log("Subjects:", keys);   // ["math", "english", "science"]

// 2. Get values
const values = Object.values(examScores);
console.log("Scores:", values); // [95, 88, 92]

// 3. Get entries
const entries = Object.entries(examScores);
console.log("Full Entries:", entries);

// 4. Loop through
console.log("Detailed Scores List:");
for (const [subject, score] of Object.entries(examScores)) {
    console.log(`${subject}: ${score}`);
}



//Task 8.3: Array of Objects 

const students = [
    { name: "Vosti", age: 20, grade: 83, major: "CS" },
    { name: "Ann", age: 21, grade: 75, major: "Math" },
    { name: "Kiama", age: 22, grade: 88, major: "CS" },
    { name: "Trump", age: 20, grade: 80, major: "Physics" },
    { name: "Cash", age: 23, grade: 65, major: "CS" }
];

// 1. Get all student names
const names = students.map(student => student.name);
console.log("Student Names:", names);

// 2. Get students with grade > 80
const highAchievers = students.filter(student => student.grade > 80);
console.log("High Achievers:", highAchievers);

// 3. Find the student named "Kiama"
const kiama = students.find(student => student.name === "Kiama");
console.log("Found Kiama:", kiama);

// 4. Calculate average grade
const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
const avgGrade = totalGrades / students.length;
console.log("Average Grade:", avgGrade);

// 5. Get CS majors only
const csMajors = students.filter(student => student.major === "CS");
console.log("CS Majors:", csMajors);

// 6. Sort by grade (highest first)

const sortedByGrade = [...students].sort((a, b) => b.grade - a.grade);
console.log("Sorted by Grade (Desc):", sortedByGrade);

// 7. Check if any student has grade > 90
const hasTopStudent = students.some(student => student.grade > 90);
console.log("Is there a student with > 90?", hasTopStudent);

// 8. Check if all students are passing (grade >= 60)
const allPassing = students.every(student => student.grade >= 60);
console.log("Is everyone passing?", allPassing);



// Task 8.4: JSON Practice 

const postsJson = '[{"id":1,"title":"Welcome","likes":12,"published":true},{"id":2,"title":"Draft ideas","likes":0,"published":false},{"id":3,"title":"Week 4 recap","likes":30,"published":true}]';

// 1. Parse into an array
const posts = JSON.parse(postsJson);
console.log("Parsed Posts Array:", posts);

// 2. Keep only published posts
const publishedPosts = posts.filter(post => post.published);

// 3. Sort by likes, highest first
const sortedPosts = publishedPosts.sort((a, b) => b.likes - a.likes);

// 4. Map them to strings
const postDescriptions = sortedPosts.map(post => `${post.title} (${post.likes} likes)`);
console.log("Post Descriptions:", postDescriptions);

// 5. Stringify 
const filteredJson = JSON.stringify(sortedPosts, null, 2);
console.log("Filtered JSON String:\n", filteredJson);
console.log("Type of filteredJson:", typeof filteredJson);


// Mini-Project: Student Grade Tracker 

const gradeTracker = {
    students: [],
    
    // Add a new student
    addStudent(name, grades) {
        this.students.push({ name, grades });
    },
    
    // Get a student by name
    getStudent(name) {
        return this.students.find(s => s.name === name) || null;
    },
    
    // Calculate a student's average
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (!student) return 0;
        
        const grades = Object.values(student.grades);
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return (sum / grades.length).toFixed(2);
    },
    
    // Get class average for a subject
    getSubjectAverage(subject) {
        const studentsWithSubject = this.students.filter(s => s.grades[subject] !== undefined);
        if (studentsWithSubject.length === 0) return 0;
        
        const sum = studentsWithSubject.reduce((acc, s) => acc + s.grades[subject], 0);
        return (sum / studentsWithSubject.length).toFixed(2);
    },
    
    // Get top performer
    getTopStudent() {
        if (this.students.length === 0) return null;
        
        return this.students.reduce((top, current) => {
            const currentAvg = parseFloat(this.getStudentAverage(current.name));
            const topAvg = parseFloat(this.getStudentAverage(top.name));
            return currentAvg > topAvg ? current : top;
        });
    },
    
    // Get students needing help (average < 70)
    getStrugglingStudents() {
        return this.students.filter(s => parseFloat(this.getStudentAverage(s.name)) < 70);
    },
    
    // Get letter grade
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    
    // Generate report card
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (!student) return "Student not found";
        
        const avg = this.getStudentAverage(name);
        let report = `--- Report Card: ${student.name} ---\n`;
        
        for (const [subject, score] of Object.entries(student.grades)) {
            report += `${subject.toUpperCase()}: ${score} (${this.getLetterGrade(score)})\n`;
        }
        
        report += `OVERALL AVERAGE: ${avg} (${this.getLetterGrade(avg)})`;
        return report;
    }
};

//Test 
gradeTracker.addStudent("Ann", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Vosti", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Kiama", { math: 60, english: 65, science: 58 });


console.log("Ann's Average:", gradeTracker.getStudentAverage("Ann"));    
console.log("Math Class Average:", gradeTracker.getSubjectAverage("math"));   
console.log("Top Student:", gradeTracker.getTopStudent().name);                 
console.log("Struggling Students:", gradeTracker.getStrugglingStudents().map(s => s.name));
console.log(gradeTracker.generateReportCard("Ann"));


// Daily Challenge: 
// Day 1 - FizzBuzz 

console.log("--- FizzBuzz 1-100 ---");

for (let i = 1; i <= 100; i++) {
    
    if (i % 3 === 0 && i % 5 === 0) {
        console.log("FizzBuzz");
    } 
    // 2. Check for multiples of 3
    else if (i % 3 === 0) {
        console.log("Fizz");
    } 
    // 3. Check for multiples of 5
    else if (i % 5 === 0) {
        console.log("Buzz");
    
    }
}


// Day 2: Reverse a String 

// Built-in Methods
function reverseStringchallenge(str) {

    return str.split("").reverse().join("");
}

//Loop
function reverseStringLoop(str) {
    let reversed = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// Testing
const testStr = "hello";
console.log(`Reverse "${testStr}" (Methods):`, reverseStringchallenge(testStr));
console.log(`Reverse "${testStr}" (Loop):`, reverseStringLoop(testStr));


//Day 3: Find Largest Number 

//Loop 
function findLargestLoop(arr) {
    if (arr.length === 0) return null;
    
    
    let largest = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

function findLargestReduce(arr) {
    if (arr.length === 0) return null;
    
    return arr.reduce((max, current) => {
        return current > max ? current : max;
    }, arr[0]);
}

// Testing
const nums = [10, 5, 25, 8, 30, 15];
console.log("Largest (Loop):", findLargestLoop(nums));   // 30
console.log("Largest (Reduce):", findLargestReduce(nums)); // 30




//Day 4: Remove Duplicates

//Using Set 
function removeDuplicatesSet(arr) {

    return [...new Set(arr)];
}

//Using filter
function removeDuplicatesFilter(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}

// Testing
const duplicateArray = [1, 2, 2, 3, 4, 4, 5, 1];
console.log("Unique (Set):", removeDuplicatesSet(duplicateArray));    // [1, 2, 3, 4, 5]
console.log("Unique (Filter):", removeDuplicatesFilter(duplicateArray)); // [1, 2, 3, 4, 5]


//Day 5: Palindrome Checker

function isPalindrome(str) {

    const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    
    const reversedStr = cleanStr.split("").reverse().join("");

    return cleanStr === reversedStr;
}

// Testing
console.log("Is 'racecar' a palindrome?", isPalindrome("racecar")); // true
console.log("Is 'hello' a palindrome?", isPalindrome("hello"));     // false
console.log("Is 'A man a plan a canal Panama' a palindrome?", isPalindrome("A man a plan a canal Panama")); // true