// Todo : ternary

// top down approach

let a = 5;
let x = 79;
console.log(a);
console.log(x + 1);

// conditionals

// scope

{
  let x = 9;
}

// hierarchy => order
// parent => child can access
// child scope => cannot be accessed by parents scope
// {} => scope
let ap = "apple";
{
  ap = "Amazon";
}
console.log(ap);

let sum = 0;
{
  //let sum = 0;
  let ab = 5;
  let cd = 7;
  sum = ab + cd;
  // console.log(sum);
}

console.log(sum);

// code execution depends upon condition
if (true) {
  console.log("Hello");
}

// if else condition
// syntax

//if (condition) {
// some code
//} else {
//}

//if else condition
//let result = "name" === "Name";
let result = "name" === "name";

if (result) {
  console.log("hi");
} else {
  console.log("hello");
}

//? check if a number is even or odd

let num = 10;
if (num % 2 === 0) {
  console.log("even");
} else {
  console.log("Odd");
}

let N = 25;
let rem = N % 1;
if (rem === 1) {
  console.log(`${N} is an odd Number`);
} else {
  console.log(`${N} is an even Number`);
}

// syntax of ifelse
//if(condition 1){
//some code here
//}elseif(condition 2){

//}else(condition){

//}

//example of ifelse
// question h=130 cm - short , h=160cm - medium , h=above 160 tall

let height = 155;

if (height <= 130) {
  console.log("Short Height");
} else if (height <= 160) {
  console.log("medium Height");
} else {
  console.log("Tall height");
}

//? print out greatest number among three number
let q = 1,
  w = 2,
  e = 3;
if (q > w && q > e) {
  console.log(`${q} is greater.`);
} else if (w > q && w > e) {
  console.log(`${w} is greater.`);
} else {
  console.log(`${e} is greater.`);
}

let sth = "24";
const isNumber = typeof sth === "number";
if (isNumber) {
  console.log(`${sth} is number.`);
} else {
  console.log(`${sth} isnot number`);
}
