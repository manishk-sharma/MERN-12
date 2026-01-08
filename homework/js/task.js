//Conditional Statements :  

// Task 1: Check if a number is even or odd

// let sirealNumber = 8;
// if (sirealNumber % 2 === 0) {
//   console.log("The number is even");
// } else {
//   console.log("The number is odd");
// }

// Task 2: Take a student's marks as input and print their grade using conditions:

// let marks = 85;
// if (marks >= 90) {
//   console.log("A");
// } else if (marks >= 80) {
//   console.log("B");
// } else if (marks >= 70) {
//   console.log("C");
// } else if (marks >= 60) {
//   console.log("D");
// } else {
//   console.log("F");
// }

// Task 3: Leap Year Check

// let year = 2026;
// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//     console.logd("Leap Year");
// } else {
//     console.log("Not a Leap Year");
// }

// Task 4: Maximum of Three Numbers

// let a=10, b=20, c=15;
// if (a >= b && a >= c) {
//     console.log("maximum:", a);
// } else if (b >= a && b >= c) {
//     console.log("maximum:", b);
// } else {
//     console.log("maximum:", c);
// }

// Task 5: Check Vowel or Consonant

// let char = 'm';
// if ("aeiouAEIOU".includes(char)) {
//     console.log("Vowel");
// }
// else {
//     console.log("Consonant");    
// }


// Task 6: Positive, Negative, or Zero

// let num = 0;
// if (num > 0) {
//     console.log("Positive");
// } else if (num < 0) {
//     console.log("Negative");
// } else {
//     console.log("Zero");
// }

// Task 7: Calculator Program

// let a = 10;
// let b = 5;
// let operator = '+';
// if (operator === '+') {
//     console.log(a + b);
// } else if (operator === '-') {
//     console.log(a - b);
// } else if (operator === '*') {
//     console.log(a * b);
// } else if (operator === '/') {
//     console.log(a / b);
// } else {
//     console.log("Invalid operator");
// }

// Task 8: Day of the Week

// let day=5;
// if (day === 1) {
//     console.log("Monday");
// } else if (day === 2) {
//     console.log("Tuesday");
// } else if (day === 3) {
//     console.log("Wednesday");
// } else if (day === 4) {
//     console.log("Thursday");
// } else if (day === 5) {
//     console.log("Friday");
// } else if (day === 6) {
//     console.log("Saturday");
// } else if (day === 7) {
//     console.log("Sunday");
// } else {
//     console.log("Invalid day");
// }


// Task 9: Eligible to Vote

// let age = 18;
// if (age >= 18) {
//     console.log("Eligible to vote");
// } else {
//     console.log("Not eligible to vote");
// }

// Task 10: Triangle Type

// let a=5, b=5, c=5;
// if (a === b && b === c) {
//     console.log("Equilateral Triangle");
// } else if (a === b || b === c || a === c) {
//     console.log("Isosceles Triangle");
// } else {
//     console.log("Scalene Triangle");
// }


//Loops :

// Task 1: Multiplication Table

// let num = 5;
// for (let i = 1; i <= 10; i++) {
//   console.log(num + " x " + i + " = " + (num * i));
// }

// Task 2: Factorial of a Number

// let n = 5;
// let fact = 1;
// for (let i = 1; i <= n; i++) {
//   fact *= i;
// }
// console.log(fact);

// Task 3: Sum of Natural Numbers

// let n = 5;
// let sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// Task 4: Reverse a Number

// let num = 1234;
// let rev = 0;
// while (num > 0) {
//     let digit = num % 10;
//     rev = rev * 10 + digit;
//     num = Math.floor(num / 10);
// }
// console.log(rev);

// Task 5: Print Even Numbers

// let n = 50;
// for (let i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// Task 6: Count Digits in a Number

// let num = 12345;
// let count = 0;
// while (num > 0) {
//   num = Math.floor(num / 10);
//   count++;
// }
// console.log(count);

// Task 7: Fibonacci Series

// let n = 6;
// let a = 0, b = 1;
// console.log(a);
// console.log(b);
// for (let i = 3; i <= n; i++) {
//   let c = a + b;
//   console.log(c);
//   a = b;
//   b = c;
// }

// Task 8: Sum of Digits

// let num = 1234;
// let sum = 0;
// while (num > 0) {
//     let digit = num % 10;
//     sum += digit;
//     num = Math.floor(num / 10);
// }
// console.log(sum);

// Task 9: Pattern Printing (Pyramid)

// let n = 5;
// for (let i = 1; i <= n; i++) {
//     let row = '';
//     for (let j = 1; j <= n - i; j++) {
//         row += '*';
//     }
//     console.log(row);
// }

// Task 10: Check Prime Number

// let num = 5;
// let isPrime = true;
// for (let i = 2; i <= Math.sqrt(num); i++) {
//     if (num % i === 0) {
//         isPrime = false;
//         break;
//     }
// }
// if (isPrime && num > 1) {
//     console.log("Prime Number");
// } else {
//     console.log("Not a Prime Number");
// }  











