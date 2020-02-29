// var app = document.getElementById("APP")
var app = document.getElementById("Postit")

var divGeral = document.createElement("div")
// divGeral.setAttribute("id", "areaGeral")
divGeral.style.textAlign = "Center"
// divGeral.style.backgroundColor = "blue"

app.appendChild(divGeral)

var btAddPostit = document.createElement("button")
btAddPostit.innerHTML = "Adicione Postit"
btAddPostit.style.fontWeight = "bold"
btAddPostit.onclick = function (){
    inserirPostit()
}
var inpTexto = document.createElement("input")

var pTexto = document.createElement("p")
pTexto.innerHTML = "Vamos lá"
divGeral.appendChild(inpTexto)
divGeral.appendChild(btAddPostit)
// divGeral.appendChild(pTexto)

var areaPostits = document.createElement("div")
// areaPostits.style.backgroundColor = "green"
divGeral.appendChild(areaPostits)

function inserirPostit() {
    let postit = document.createElement("button")    
    postit.innerHTML = inpTexto.value
    postit.style.width = "200px"
    postit.style.height = "200px"
    postit.style.borderRadius = "5px"
    postit.style.border = "1px solid black"
    postit.style.textAlign = "center"
    postit.style.marginBottom = "5px"
    postit.style.marginTop = "5px"
    postit.style.marginLeft = "5px"
    postit.style.fontSize = "15px"
    postit.style.overflow = "auto"
    postit.style.backgroundColor = gera_cor()
    postit.onclick = function (){
        postit.style.backgroundColor = gera_cor()
    }
    areaPostits.appendChild(postit)
}

function gera_cor(){
    var hexadecimais = '0123456789ABCDEF';
    var cor = '#';  
    // Pega um número aleatório no array acima
    for (var i = 0; i < 6; i++ ) {
    //E concatena à variável cor
        cor += hexadecimais[Math.floor(Math.random() * 16)];
    }
    return cor;
}
