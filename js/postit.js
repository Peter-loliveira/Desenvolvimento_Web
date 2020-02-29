// var app = document.getElementById("APP")
var app = document.getElementById("Postit")
app.style.width = "1400px"
app.style.margin = "0 auto"
app.style.marginTop = "20px"

//Cria uma área só para os componente que determinarão as caracteristicas e estilos dos postits
var divGeral = document.createElement("div")
divGeral.setAttribute("id", "areaGeral")
divGeral.setAttribute("class", "areaComponentes")
divGeral.style.textAlign = "Center"
app.appendChild(divGeral)

var divTextoPostit = document.createElement("div")
divTextoPostit.setAttribute("class", "divs-atributos")
divTextoPostit.style.alignItems = "center"
divGeral.appendChild(divTextoPostit)

var divOpacidadePostit = document.createElement("div")
divOpacidadePostit.setAttribute("class", "divs-atributos")
divOpacidadePostit.style.alignItems = "center"
divGeral.appendChild(divOpacidadePostit)


var texto = document.createElement("label")
texto.innerHTML = "Texto interno do Postit: "
texto.style.fontWeight = "bold"

var inpTexto = document.createElement("input")
inpTexto.placeholder = "Texto do Postit"
inpTexto.style.textAlign = "center"



var lbOpacidade = document.createElement("label")
lbOpacidade.innerHTML = "Opacidade do Postit: "
lbOpacidade.style.fontWeight = "bold"

var inpOpacidade = document.createElement("input")
inpOpacidade.setAttribute("type", "range")
inpOpacidade.setAttribute("min", 30)
inpOpacidade.setAttribute("max", 100)
inpOpacidade.style.marginRight = "20px"
inpOpacidade.value = "30"

var lbOpacidadeEscolhida = document.createElement("label")
lbOpacidadeEscolhida.innerHTML = "70%"
lbOpacidadeEscolhida.style.fontWeight = "bold"

inpOpacidade.onclick = function (params) {
    lbOpacidadeEscolhida.innerHTML = `${100 - inpOpacidade.value}%`
}

//adiciona os componentes dessa área
var btAddPostit = document.createElement("button")
btAddPostit.innerHTML = "Adicione Postit"
btAddPostit.style.fontWeight = "bold"
btAddPostit.style.marginTop = "5px"
btAddPostit.onclick = function (){
    inserirPostit()
}

var br = document.createElement("br")

divTextoPostit.appendChild(texto)
divTextoPostit.appendChild(inpTexto)
divGeral.appendChild(document.createElement("br"))
divOpacidadePostit.appendChild(lbOpacidade)
divOpacidadePostit.appendChild(inpOpacidade)
divOpacidadePostit.appendChild(lbOpacidadeEscolhida)
divGeral.appendChild(document.createElement("br"))

divGeral.appendChild(btAddPostit)

var areaPostits = document.createElement("div")
areaPostits.setAttribute("class", "areaComponentes")
app.appendChild(areaPostits)

function inserirPostit() {
    let postit = document.createElement("button")
    postit.innerHTML = inpTexto.value
    postit.setAttribute("class", "postit")
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
    postit.style.opacity = `${inpOpacidade.value}%`
    postit.ondblclick = function () {
        postit.style.display = "none"
    }
    postit.style.backgroundColor = gera_cor()
    postit.onclick = function (){
        postit.style.backgroundColor = gera_cor()
    }
    let textOpacidade = document.createElement("p")    
    textOpacidade.innerHTML = `Opacidade de ${100 - inpOpacidade.value}%`
    postit.appendChild(textOpacidade)
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
