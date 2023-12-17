// array => complex data structure
// multiple data can be grouped together
// grouping of similar typed data, string array , number array
// array supports mixed data types

// const numList = [1, 2, 3, 4];
// console.log(numList);

// const numbers = {
//   0: 100,
//   1: 101,
// };
// console.log(numbers[1]);

// const fruits = ["apple", "orange"];
// console.log(typeof fruits);
// console.log(fruits[3]);
// console.log(fruits[1]);

// const countryList = ["Nepal", "Argentina", "portugal", "france"];
// console.log(countryList);
// console.log(countryList[3]);
// console.log(countryList[countryList.length - 1]);
// console.log(countryList[countryList.length - 2]);

// const friends = ["Alish", "dinesh", "Prakash", "Abhisek"];
//  ? push => add value to end of array
// friends.push("Nischal");
// console.log(friends);

// ? pop => remove last item from array
//  friends.pop();
// console.log(friends);

//  unshift => add items to start of array

// friends.unshift("sujal", "rrr", "ttt");
// console.log(friends);

// shift => remove first items from array
// friends.shift();
// console.log(friends);

// slice => breaks arrays
// ? syntax
// slice();
// slice(firstindex);
// slice(first,last);
// exludes last values;

// const numList = [100, 101, 102, 103, 106, 104, 109];
// const newList = numList.slice(2, 5);
// console.log(newList);

// const sports = ["badmintion", "chess", "tabletenis", "volleyball"];
// const newsports = sports.slice(1, 2);
// console.log(newsports);
// console.log(sports);

// splice => removes,replaces,add items to array
// syntax => (startindex, deletecount , value);
//const playerList = ["Hari", "Gulsan", "Ashmina", "Rashila", "Bimal", "alish"];
// playerList.splice(2);
// playerList.splice(2, 2, "prakash");

// console.log(playerList);

// const months = ["jan", "March", "april", "june"];
// months.splice(1, 0, "feb");
// months.splice(4, 0, "may");
// months.splice(7, 0, "july");
// console.log(months);

//

// let laptopBrands = ["asus", "acer", "apple", "msi"];
// laptopBrands.push("lenovo");
// laptopBrands.unshift("hp");
//laptopBrands.splice(1, 1);
//  laptopBrands.splice(2, 1, "dell");
// console.log(laptopBrands.length);
// for (let i = 0; i < laptopBrands.length; i++) {
//   console.log(laptopBrands[i]);
// }

//  map => iterates through array elements and return newArray
//  returned array and newArray are of same size

// let phoneBrands = ["iphone", "samsung", "nokia", "huwawei"];
// phoneBrands.map((item, index, array) => {
//   console.log(item, index, array);
// });
// // function arrow => (()=>{....});

// let numbers = [100, 105, 201, 735, 637];
// const newWww = numbers.map((item, index, array) => {
//   let newNumber = item + 10;
//   return newNumber;
// });
// console.log(newWww);

// let priceList = [5000, 7000, 1500, 705, 1135, 14000];
// 12per discount
// const price = priceList.map(
//   (i) => i * 0.88
//   let i1 = i * 0.88;
//   return i1;
// );
// console.log(price);

// let laptopList = [
//   {
//     name: "TUF F15",
//     brand: "asus",
//     price: 1044,
//   },
//   {
//     name: "GF63",
//     brand: "msi",
//     price: 900,
//   },
//   {
//     name: "macbook air m2",
//     brand: "apple",
//     price: 1400,
//   },
//   {
//     name: "nitro",
//     brand: "acer",
//     price: 800,
//   },

//   {
//     name: "inspiron 55",
//     brand: "dell",
//     price: 700,
//   },
// ];
// solution 1
// const price = laptopList.map((item, index, array) => {
//   const price1 = item.price * 1.07;
//   item.price = price1;
//   return item;
// });
// console.log(price);

// ? filter => to filter out required values based upon condition
// let numList = [1, 2, -3, -6, -8, 3, 45, 5, 6, 44];
// const postiveValue = numList.filter((item, index, self) => {
//   if (item > 0) {
//     return item;
//   }
// });
// console.log(postiveValue);
//  another way
// let numList = [1, 2, -3, -6, -8, 3, 45, 5, 6, 44];
// const postiveValue = numList.filter((item) => item > 0);
// console.log(postiveValue);

// filter = in maximum cases orginal and returned values is different or unequal
// map = value is equal

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
//const laptopNew = laptopList.filter((item, index, self) => item.price > 1000);
const laptopNew = laptopList.filter(
  (item, index, array) => item.brand === "apple"
  //console.log(item);
);
console.log(laptopNew);

