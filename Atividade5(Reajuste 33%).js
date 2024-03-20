var valorProduto = 1000; 
var reajuste = valorProduto * 0.3333;
var novoValor = valorProduto + reajuste;
var novoValorFormatado = novoValor.toFixed(2);

console.log("Valor original do produto: R$" + valorProduto);
console.log("Reajuste (33.33%): R$" + reajuste);
console.log("Novo valor com reajuste: R$" + novoValorFormatado);
