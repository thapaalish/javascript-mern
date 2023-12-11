// while
// syntax
// let i = initial value
// while(condition){
//some code here
// increment/decrement
//}

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }
// let N = 3;
// for (let i = 0; i <= N; i++) {
//   console.log(i * i);
// }

// let n = 3;
// let i = 0;
// while (i <= n) {
//   console.log(i ** 2);
//   i++;
// }

// do while
// syntax
//let i = initial value
//do{
//some code here
//}
//while(condition)

// let i = 1;
// do {
//   console.log(i);
//   i++;
// } while (i <= 10);

// sum of digit
// let num = 213;
// let sum = 0;
// while (num !== 0) {
//   let remainder = num % 10;
//   sum = sum + remainder;
//   num = Math.floor(num / 10);
// }
// console.log(sum);

// let N = 128;
// let sum = 0;

// while (N != 0) {
//   let A = N % 10;
//   sum = sum + A;
//   N = Math.floor(N / 10);
// }

// console.log(sum);

// prime or composite
// let n = 4;
// for (let i = 2; i < n; i++) {
//   if (n % i !== 0) {
//     console.log("prime");
//     break;
//   } else {
//     console.log("comp");
//     break;
//   }
// }

let n = 8;
for (let i = 2; i <= n; i++) {
  let isPrime = true;
  for (let j = 2; j < i; j++) {
    if (i % j === 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(`${i} is Prime`);
  }
}
