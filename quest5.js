const stringOriginal = "Questão 5";


function inverterString(str) {
    let stringInvertida = "";
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }
    return stringInvertida;
}

const resultado = inverterString(stringOriginal);
console.log("String original:", stringOriginal);
console.log("String invertida:", resultado);
