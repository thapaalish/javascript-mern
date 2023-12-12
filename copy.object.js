// object copy
// let myFavoriteFood = {
//   name: "Biryani",
//   spicy: true,
//   nonveg: true,
//   price: 450,
// };

// let x = myFavoriteFood;
// x.name = "Momo";
// console.log(myFavoriteFood);

// ? spread operator ...

// let x = { ...myFavoriteFood };
// x.name = "thukpa";
// console.log(x);

// deep copy
let person = {
  name: "alish thapa",
  address: {
    temporary: "a",
    permanent: "b",
  },
  college: "eec",
};
// ? structured clone for deep copy

let person3 = structuredClone(person);
person3.address.temporary = "z";
console.log(person3);
