// var app = document.getElementById("APP")
var app = document.getElementById("Postit")

var divGeral = document.createElement("div")
divGeral.setAttribute("id", "areaGeral")
app.appendChild(divGeral)

var btAddPostit = document.createElement("button")
btAddPostit.innerHTML = "Adicione Postit"
btAddPostit.setAttribute("onclick", "inserirPostit()")
var inpTexto = document.createElement("input")
inpTexto.setAttribute("id", "inputTexto")

var pTexto = document.createElement("p")
pTexto.innerHTML = "Vamos lá"
divGeral.appendChild(btAddPostit)
divGeral.appendChild(inpTexto)
divGeral.appendChild(pTexto)
var textoPostit = createElement("p")
textoPostit.innerHTML = document.getElementById("inputTexto").value

function inserirPostit(){
var postit = document.createElement("div")
postit.setAttribute("class", "postit")

divGeral.appendChild(postit)
}