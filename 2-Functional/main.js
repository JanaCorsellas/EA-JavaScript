
// ------------------ Functional Programming ------------------

// Given an array of numbers, double each number and return a new array
const numbers = [1, 2, 3, 4, 5];
let doubledNumbers = [];

// Imperative (Non-Functional) Approach
for (let i = 0; i < numbers.length; i++) {
  doubledNumbers.push(numbers[i] * 2);
}
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// Functional (Declarative) Approach
doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// ------------------ Core Principles of Functional Programming ------------------

// First-Class Functions
// Functions can be stored in variables, passed as arguments, or returned.
const greet = function(name) {
	return `Hello, ${name}!`;
  };
  
console.log(greet("Alice")); // "Hello, Alice!"

// Pure Function
// Always returns the same output for the same input
// No Side Effects - Does not modify external state

function add(a, b) {
	return a + b;
}
  
console.log(add(2, 3)); // 5
console.log(add(2, 3)); // 5 (always same output)


// Immutability
// Data should not be changed; use copies instead.

const numbers2 = [1, 2, 3, 4];

// Non-functional (Mutates the array)
numbers2.push(5); // ❌ Avoid mutation

// Functional (Creates a new array)
const newNumbers = [...numbers2, 5];
console.log(newNumbers); // [1, 2, 3, 4, 5]


const person = { nombre: 'Juan', edad: 25 };
const newPerson = { ...person, edad: 26 }; 
console.log(newPerson);  // { nombre: 'Juan', edad: 26 }


// Higher-Order Functions
// Functions that take other functions as arguments or return functions.

function applyOperation (a, b, operation) {
	return operation(a, b);
}

function multiply (a, b) {
	return a * b;
}

console.log(applyOperation(3, 4, multiply));  // 12





