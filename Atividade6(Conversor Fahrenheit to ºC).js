var temperaturaFahrenheit = 100; 
var temperaturaCelsius = (temperaturaFahrenheit - 32) * (5 / 9);

var temperaturaFormatada = temperaturaCelsius.toFixed(2);

console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit + "°F");
console.log("Temperatura em Celsius: " + temperaturaFormatada + "°C");
