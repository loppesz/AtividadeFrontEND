const prompt = require('prompt-sync')();


let n1
let n2
let n3
let media
let soma

n1=parseInt(prompt('digite a primeira nota: '))
n2=parseInt(prompt('digite a segunda nota: '))
n3=parseInt(prompt('digite a terceira nota: '))

soma=n1+n2+n3;
        console.log(soma)

        media = (n1 + n2 + n3)/3
        console.log(media)

