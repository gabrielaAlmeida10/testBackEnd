function pertenceFibonacci(num) {
  let a = 0, b = 1;
  while (b < num) {
      let temp = b;
      b = a + b;
      a = temp;
  }
  return b === num || num === 0;
}

const numero = 13;
if (pertenceFibonacci(numero)) {
  console.log(`${numero} pertence à sequência de Fibonacci.`);
} else {
  console.log(`${numero} não pertence à sequência de Fibonacci.`);
}
