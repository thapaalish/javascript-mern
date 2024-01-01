//  reduce
// let numList = [1, 2, 3, 4];
// const result = numList.reduce((sum, item, index, self) => {
//   sum = sum + item;
//   return sum;
// }, 0);
// console.log(result);
// let Num1 = [1, 2, 3];
// let num = Num1.reduce((product, item, index, self) => {
//   product = product * item;
//   return product;
// });
// console.log(num);

const productList = [
  {
    name: "A",
    price: 20,
  },
  {
    name: "B",
    price: 15,
  },
  {
    name: "C",
    price: 7,
  },
  {
    name: "D",
    price: 49,
  },
];
// let num2 = 0;
// productList.forEach((item) => {
//   num2 = num2 + item.price;
// });
// console.log(num2);

const result = productList.reduce((sum, item) => sum + item.price, 0);
console.log(result);
