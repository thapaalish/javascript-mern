// odd && even
let N = 24;
// let N = prompt("Enter a number");
if (N % 2 === 0) {
  console.log(`${N} is even number`);
} else {
  console.log(`${N} is odd number`);
}

//input variable is number or not
let A = 23;
if (isNaN(A)) {
  console.log("Not a Number");
} else {
  console.log("Yes It is a Number");
}

// largest of two number
let Q = 12;
let W = 13;
if (Q > W) {
  console.log(`${Q} is largest Number.`);
} else {
  console.log(`${W} is largest Number.`);
}

// largest of three number
let S = 1,
  D = 2,
  F = 3;
if (S > D && S > F) {
  console.log(`${S} is largest Number.`);
} else if (D > F) {
  console.log(`${D} is largest Number.`);
} else {
  console.log(`${F} is largest Number.`);
}

//
let num1 = 3;
let num2 = 2;
let option = "multiply";
if (option == "add") {
  console.log(num1 + num2);
} else if (option == "subtract") {
  console.log(num1 - num2);
} else if (option == "multiply") {
  console.log(num1 * num2);
} else if (option == "divide") {
  console.log(num1 / num2);
} else if (option == "power") {
  console.log(num1 ** num2);
}

// 6.Find grades for student marks.
// If the mark is greater than or equal to 90, the grade is “A plus”.
// If the mark is greater than or equal to 80,the grade is “A”.
//  Grade “B”  from marks greater than equal to 70.
// “C” for marks greater than equal to 60.
// “F” for marks  less than 60.

let mark = 50;
if (mark >= 90) {
  console.log("the grade is A plus");
} else if (mark >= 80) {
  console.log("the grade is A");
} else if (mark >= 70) {
  console.log("the grade is B");
} else if (mark >= 60) {
  console.log("the grade is C");
} else {
  console.log("the grade is F");
}
