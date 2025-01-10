const fs = require('fs');

const faturamentoMensal = JSON.parse(fs.readFileSync('dados.json', 'utf-8'));

const faturamentoComValores = faturamentoMensal.filter(dia => dia.valor > 0);

const menorValor = Math.min(...faturamentoComValores.map(dia => dia.valor));
const maiorValor = Math.max(...faturamentoComValores.map(dia => dia.valor));

const somaFaturamento = faturamentoComValores.reduce((acc, dia) => acc + dia.valor, 0);
const mediaMensal = somaFaturamento / faturamentoComValores.length;

const diasAcimaDaMedia = faturamentoComValores.filter(dia => dia.valor > mediaMensal).length;

console.log(`Menor valor de faturamento: R$ ${menorValor.toFixed(2)}`);
console.log(`Maior valor de faturamento: R$ ${maiorValor.toFixed(2)}`);
console.log(`Número de dias com faturamento acima da média: ${diasAcimaDaMedia}`);
