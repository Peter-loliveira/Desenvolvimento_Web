var divPai = document.getElementById("areaTotal")
var divFilho = document.createElement("div")
divPai.appendChild(divFilho)
var texto1 = document.createElement("a")
texto1.setAttribute("href", "www.google.com.br")
texto1.innerHTML = "Texto1"
texto1.style.color = "blue"
texto1.style.textDecoration = "underline"
divFilho.appendChild(texto1)
var caixa2 =document.createElement("input")
caixa2.style.width = "50px"
divFilho.appendChild(caixa2)
texto1.style.marginRight = "10px"
caixa2.style.backgroundColor = "pink"
caixa2.style.width = "100px"
caixa2.style.height = "50px"
caixa2.value = "teste"
caixa2.setAttribute("type","button")
caixa2.setAttribute("min","0")
caixa2.setAttribute("max","10")
caixa2.value = 5

function alertar(){
    alert("teste")
}

caixa2.onmouseover = function () {
    alertar()
}