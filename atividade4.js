var saldo = 1000; 
var reajuste = saldo * 0.01;
var novoSaldo = saldo + reajuste;
var novoSaldoFormatado = novoSaldo.toFixed(2);


console.log("Saldo original: R$" + saldo);
console.log("Reajuste (1%): R$" + reajuste);
console.log("Novo saldo: R$" + novoSaldoFormatado);