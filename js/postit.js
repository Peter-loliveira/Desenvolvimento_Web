// var app = document.getElementById("APP")
var app = document.getElementById("Postit")

var divGeral = document.createElement("div")
divGeral.setAttribute("id", "areaGeral")
divGeral.style.textAlign = "Center"
app.appendChild(divGeral)

var btAddPostit = document.createElement("button")
btAddPostit.innerHTML = "Adicione Postit"
btAddPostit.setAttribute("onclick", "inserirPostit()")
var inpTexto = document.createElement("input")
inpTexto.setAttribute("id", "inputTexto")

var pTexto = document.createElement("p")
pTexto.innerHTML = "Vamos lá"
divGeral.appendChild(inpTexto)
divGeral.appendChild(btAddPostit)
divGeral.appendChild(pTexto)

function inserirPostit() {
    let postit = document.createElement("div")
    postit.setAttribute("class", "postit")
    let textoPostit = document.createElement("p")
    textoPostit.innerHTML = inpTexto.value
    postit.style.width = "200px"
    postit.style.height = "200px"
    postit.style.borderRadius = "5px"
    postit.style.textAlign = "center"
    postit.appendChild(textoPostit)
    divGeral.appendChild(postit)
    postit.style.backgroundColor = gera_cor()
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
