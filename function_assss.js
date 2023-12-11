// ? print prime numbers from 2 to n
const getPrimeNumbers = (start, end) => {
  for (i = start; i <= end; i++) {
    let prime = true;

    for (j = 2; j < i; j++) {
      let remainder = i % j;

      if (remainder === 0) {
        prime = false;
        break;
      }
    }

    if (prime) {
      console.log(i);
    }
  }
};

getPrimeNumbers(100, 200);
