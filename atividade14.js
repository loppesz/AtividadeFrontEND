let prompt = require('prompt-sync')();

var n1 = parseFloat(prompt("Digite o primeiro número:"));
var n2 = parseFloat(prompt("Digite o segundo número:"));
var n3 = parseFloat(prompt("Digite o terceiro número:"));

var maior = n1;
if (n2 > maior) {
    maior = n2;
}
if (n3 > maior) {
    maior = n3;
}

console.log("O maior número é:", maior);
