let prompt = require('prompt-sync')();

var nota1 = parseFloat(prompt("Digite a primeira nota:"));
var nota2 = parseFloat(prompt("Digite a segunda nota:"));
var nota3 = parseFloat(prompt("Digite a terceira nota:"));

var media = (nota1 + nota2 + nota3) / 3;

if (media >= 7) {
    console.log("ALUNO APROVADO");
} else if (media < 7) {
    console.log("ALUNO REPROVADO");
} 