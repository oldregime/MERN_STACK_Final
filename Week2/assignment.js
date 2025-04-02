// Task 1: Age check
let age = 25;
let isAdult = age >= 18; // true if 18 or more

console.log(`Age: ${age}, isAdult: ${isAdult}`);

// Task 2: Math operations
let x = 10;
let y = 5;

let addition = x + y;
let multiplication = x * y;
let modulus = x % y;

console.log(`Addition: ${addition}`);
console.log(`Multiplication: ${multiplication}`);
console.log(`Modulus: ${modulus}`);

// Task 3: Even/Odd check
function checkEvenOdd(n) {
    return n % 2 === 0 ? 'even' : 'odd';
}

let n = 7; // Change this value to test
let result = checkEvenOdd(n);
console.log(`The number ${n} is ${result}`);

// Task 4: Array with for loop
let numbers = [];
for (let i = 1; i <= 5; i++) {
    numbers.push(i);
}
console.log('Numbers array:', numbers);

// Task 5: Square function
function square(num) {
    return num * num;
}

console.log(`Square of 5: ${square(5)}`);