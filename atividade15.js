const prompt = require('prompt-sync')();

let op
let n1;
let n2;
let soma;

console.log('CALCULADORA! ESCOLHA A FORMA DO CALCULO : ADIÇÃO = 1 / SUBTRAÇÃO = 2 / MULTIPLICAÇÃO = 3 / DIVISÃO = 4')

op = parseInt(prompt ('FORMA DO CALCULO: '));
n1 = parseInt(prompt ('Digite a Primeira Nota: '));
n2 = parseInt(prompt ('Digite a Segunda Nota: '));

switch(op){
    case 1: 
        soma=n1+n2;
        console.log(soma);
        break;
    case 2:
        soma=n1-n2;
        console.log(soma);
        break;
    case 3:
        soma=n1*n2;
        console.log(soma);
        break;
    case 4:
        soma=n1/n2;
        console.log(soma);
        break;
    default:
        console.log('Undefined,Try again')
}
