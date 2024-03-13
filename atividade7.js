// Lê a temperatura em graus Celsius
let prompt = require('prompt-sync')();
var temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Calcula a temperatura em graus Fahrenheit
var temperaturaFahrenheit = (9 * temperaturaCelsius / 5) + 32;

// Exibe o resultado
console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit.toFixed(2) + "°F");