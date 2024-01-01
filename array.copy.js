let num1 = [1, 2, 3];
// let num2 = num1;
// num1[0] = 5;

//  spread operator to copy
// copies values of primitive data types
//  but copies reference of non primitive data types

const num2 = [...num1];
num2[0] = 8;

// console.log(num2);
console.log(num1);

const a = "al";
a = "all";
console.log(a);
