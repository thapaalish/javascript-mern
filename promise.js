// promise => something that happens in future
// either it results in success, failure

//1. pending
// 2. success or error

// callback
// function which is passed as a argument to another function

// function getSum(x, y, callback) {
//   let error = true;
//   setTimeout(() => {
//     let sum = x + y;

//     if (error) {
//       callback("Error aayo", null);
//     } else {
//       callback(null, sum);
//     }
//   }, 5000);
// }

// getSum(2, 9, (error, result) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log(result);
//   }
// });

// ? promise

const promise = new Promise((resolve, reject) => {
  let error = false;
  setTimeout(() => {
    let x = 5;
    let y = 11;

    let sum = x + y;

    if (error) {
      reject("Error aayo");
    } else {
      resolve(sum);
    }
  }, 5000);
});

// resolve => promise needs to be resolved

// promise
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// ? async await => alternative to .then().catch()

const getData = async () => {
  try {
    const result = await promise;
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

getData();

console.log(promise);
