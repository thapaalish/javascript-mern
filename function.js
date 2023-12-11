// function
// =>block of code organized together which performs specific task
// => ensures code reusability
// => code and logic are repeated

// single point of failure
// let num1 = 5;

// num1 % 2 === 0 ? console.log("even") : console.log("odd");

// let num2 = 9;
// num2 % 2 === 0 ? console.log("even") : console.log("odd");

//? syntax
// function functionName(){
// some codes here
// }

// function calculateSum(x, y) {
//   let sum = x + y;

//   return sum;
// }

//calling a function/ invoking a function

// const result = calculateSum(11, 15);
// console.log(result);

// let x = 9;
// let y = 7;
// let sum = 0;

// function calculateSum() {
//   sum = x + y;
// }

// calculateSum();

// console.log(sum);

// function checkOddOrEven(x) {
//   let remainder = x % 2;
//   let result;

//   if (remainder === 0) {
//     result = "even";
//   } else {
//     result = "odd";
//   }

//   x % 2 == 0 ? (result = "even") : (result = "odd");

//   return result;
// }

// const result = checkOddOrEven(15);
// console.log(result);

// 0 to n

// function getSum(num) {
//   let i = 0;

//   let sum = 0;
//   while (i <= num) {
//     sum += i; // sum = sum + i;

//     i++;
//   }

//   return sum;
// }

// const res = getSum(100);
// console.log(res);

// ?arrow function
// anonymous
// const getProduct = (x, y) => x * y;

// const result = getProduct(2, 5);

// console.log(result);

const checkOddOrEven = (num) => (num % 2 === 0 ? "even" : "odd");

const result = checkOddOrEven(45);
console.log(result);
