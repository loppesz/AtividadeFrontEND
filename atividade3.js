let prompt = require('prompt-sync')();
let reais = parseFloat(prompt('Quantos reias você vai converter? R$'))
let dolar = (reais / 4.97)
console.log(dolar)