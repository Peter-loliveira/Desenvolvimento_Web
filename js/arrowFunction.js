// function quadrado(a){
//     return a*a
// }


var quadrado = a => {
    console.log("TESTE QUADRADO")
     return a*a
}
var soma = (b, c) => {
    console.log("TESTE SOMA")
    return b + c
}

console.log(`O QUADRADO é ${quadrado(3)}`)
console.log(`A SOMA é ${soma(5,9)}`)
console.log( typeof(soma))
console.log( typeof(quadrado))