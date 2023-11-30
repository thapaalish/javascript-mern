//== => weak comparision = data equality.
// === => strong comparision = data equality + data type.
// !=  weak inequality
// !== strict inequality
// > = greater symbols
// < = less then symbols
// >= =greater or equals
// <= = less then or equals
// ? =

// difference between == and === operator is "==" only checks equals values and gives results but "===" checks the data types and equal values.
//"5" === 5 ==> which is false because one is string and another is Number.
// "5" == 5 ==> which is true because both are 5 number which is equal
// 5!==10 => true 5 and 10 isnot equal and so for notequal it is true and ans is false.
// 100 > 10 its true .

let a = "5";
let b = 5;
console.log(a === b);
console.log(a == b);

let aa = 5;
let bb = 10;
console.log(aa !== bb);

let aaa = 100;
let bbb = 10;
console.log(aaa > bbb);

let w = 100;
let s = 100;
console.log(w >= s);
console.log(w > s);

let d = 5;
let e = 10;
console.log(d < e);

let q = "Dinesh";
let r = "dinesh";
console.log(q === r);

// NaN = not a number is that its value is number and which example is nep20.
