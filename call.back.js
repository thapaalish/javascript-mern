// HOF => Higher Order function
// 1.callback function =>
// function which is passed as an argument to another function

// const getSum = (a, b, func) => {
//   let sum = a + b;

//   func(sum);
// };

// getSum(2, 22, (item) => {
//   console.log(item);
// });

// 2. function returning function
// function with its lexical environment is called closure
// function returning function

// let x = 10;
// const getSum = () => {
//   const add = (y) => {
//     return x + y;
//   };

//   return add;
// };

// const add = getSum();
// x = 5;

// const result = add(5);

// console.log(result);

// let x = 2;

// let y = 5;

// const getSum = () => {
//   return x + y;
// };

// x = 10;
// y = 15;

// const sum = getSum();
// x = 75;
// console.log(sum);
