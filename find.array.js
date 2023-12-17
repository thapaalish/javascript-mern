// find=> return first item which satisfies condition

let laptopList = [
  {
    name: "TUF F15",
    brand: "asus",
    price: 1044,
  },
  {
    name: "GF63",
    brand: "msi",
    price: 900,
  },
  {
    name: "macbook air m2",
    brand: "apple",
    price: 1400,
  },
  {
    name: "nitro",
    brand: "acer",
    price: 800,
  },

  {
    name: "inspiron 55",
    brand: "dell",
    price: 700,
  },
];

// const laptop = laptopList.find((item) => item.name === "nitro");
// console.log(laptop);

const laptop = laptopList.filter((item) => item.name !== "nitro");
console.log(laptop);

let marks = [45, 55, 35, 65, 95, 25, 11, 26, 91];
const mark1 = marks.find((item) => item > 90);
console.log(mark1);

// some and every return boolean value
// sum = check if one is correct
//every = check all is correct or not
const num = [1, 2, 3, 4];
// const num1 = num.some((item) => item > 0);
// console.log(num1);
// const num1 = num.every((item) => item > 9);
// console.log(num1);

// includes => checks either the items exists in array or not
// its gives result in true or false
console.log(num.includes(6));
