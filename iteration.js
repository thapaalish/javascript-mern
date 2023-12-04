//  loop => cycle
// repetition => iteration

// for while do while

// syntax for (for loop)
// for(initial_value;condition;increment/decrement){
//some code here
//}

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// for (let i = 10; i > 0; i--) {
//   console.log(i);
// }
// for (let i = 12; i <= 24; i++) {
//   console.log(i);
// }

// for (let i = 50; i >= 25; i--) {
//   console.log(i);
// }

// for (let i = 70; i >= 30; i -= 5) {
//   console.log(i);
// }

//sum of number from 0 to n

// let n = 5;
// let sum = 0;
// for (let i = 0; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

//wap to check if provided number is prime or composite

let num = 61;
let isPrime = true;

for (let i = 2; i < 6; i++) {
  let remainder = num % i;
  if (remainder === 0) {
    isPrime = false;
    break;
  }
}
isPrime === true
  ? console.log(`${num}is prime`)
  : console.log(`${num}is composite`);
