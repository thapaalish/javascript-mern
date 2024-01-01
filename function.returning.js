// function returning function

const getSum = (x) => (y) => x + y;
const add10 = getSum(10);
const result = add10(5);
console.log(result);
