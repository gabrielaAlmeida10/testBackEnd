const fs = require('fs');

fs.readFile('dados.json', 'utf8', (err, data) => {
    if (err) {
        console.error("Erro ao ler o arquivo JSON:", err);
        return;
    }

    const faturamentoMensal = JSON.parse(data);  

    function calcularFaturamento(faturamento) {
        let soma = 0;
        let diasComFaturamento = 0;
        let menorValor = Infinity;
        let maiorValor = -Infinity;

        faturamento.forEach(dia => {
            if (dia.valor > 0) {
                soma += dia.valor;
                diasComFaturamento++;
                if (dia.valor < menorValor) menorValor = dia.valor;
                if (dia.valor > maiorValor) maiorValor = dia.valor;
            }
        });

        const media = soma / diasComFaturamento;
        let diasAcimaDaMedia = faturamento.filter(dia => dia.valor > media).length;

        return { menorValor, maiorValor, diasAcimaDaMedia, media };
    }

    const resultado = calcularFaturamento(faturamentoMensal);
    console.log(`Menor faturamento: ${resultado.menorValor}`);
    console.log(`Maior faturamento: ${resultado.maiorValor}`);
    console.log(`Dias com faturamento acima da média: ${resultado.diasAcimaDaMedia}`);
});
