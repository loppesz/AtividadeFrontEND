let prompt = require('prompt-sync')();
let dolar = parseFloat(prompt('Quantos dolares você vai converter? U$'))
let reais = (dolar * 4.97)
console.log(reais)