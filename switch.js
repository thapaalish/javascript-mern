// switch
// switch is case of ===

let day = 2;
switch (day) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  case 8:
    console.log("Invalid day");
}

// 5 no
let num1 = 3;
let num2 = 2;
let option = "add";
switch (option) {
  case "add":
    console.log(num1 + num2);
    break;
  case "subtract":
    console.log(num1 - num2);
    break;
  case "divide":
    console.log(num1 / num2);
    break;
  case "multiply":
    console.log(num1 * num2);
    break;
  case "power":
    console.log(num1 ** num2);
    break;
}
let num = 5;
let R = num % 2;
// ternary
// if (R === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }
// condition ? true case;
R === 0 ? console.log("even") : console.log("odd");

let n = 3;
let a = 3;
n > a ? console.log("n is largest") : console.log("a is greatest"); //ternary condition make code short and easy

// equal case
// ternary chaining
// n > a
//   ? console.log("n is largest")
//   : a > n
//   ? console.log("a is greatest")
//   : console.log("equal");
