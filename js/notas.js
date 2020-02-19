function calcula() {
    nota1 = document.getElementById(nota1).value
    nota2 = document.getElementById(nota3).value
    nota3 = document.getElementById(nota3).value
    nota4 = document.getElementById(nota4).value
    return (nota1 + nota2 + nota3 + nota4)/4
}
document.getElementById(resultado).value = document.getElementById(botao).onclick()