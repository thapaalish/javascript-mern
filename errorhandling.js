// const x = 5;
// x = 4;
// console.log(x);

// error handling
try {
  const x = 5;
  x = 4;
} catch (error) {
  console.log(error.message);
} finally {
  console.log("Namaste");
}
console.log("hello");
