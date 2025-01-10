function isFibonacci(num) {
  if (num < 0) return false; 

  let a = 0, b = 1; 

  while (a <= num) {
      if (a === num) {
          return `O número ${num} pertence à sequência de Fibonacci.`;
      }
      let temp = a;
      a = b;
      b = temp + b;
  }

  return `O número ${num} NÃO pertence à sequência de Fibonacci.`;
}

//teste com o número 
const numero = 21; 
console.log(isFibonacci(numero));
