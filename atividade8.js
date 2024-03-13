let prompt = require('prompt-sync')();

let salario = parseFloat(prompt("Digite o salário do funcionário:"));
let percentualAumento = parseFloat(prompt("Digite o percentual de aumento:"));
let aumento = (salario * percentualAumento) / 100;
let novoSalario = salario + aumento;


console.log("Salário original: R$" + salario.toFixed(2));
console.log("Percentual de aumento: " + percentualAumento + "%");
console.log("Valor do aumento: R$" + aumento.toFixed(2));
console.log("Novo salário: R$" + novoSalario.toFixed(2));
