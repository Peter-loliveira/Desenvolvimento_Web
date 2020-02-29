// var app = document.getElementById("APP")
var app = document.getElementById("Postit")
app.style.width = "1400px"
app.style.margin = "0 auto"
app.style.marginTop = "20px"

//Cria uma área só para os componentes que determinarão as caracteristicas e estilos dos postits
var divComponentes = document.createElement("div")
divComponentes.setAttribute("id", "areaGeral")
divComponentes.setAttribute("class", "areaComponentes")
divComponentes.style.textAlign = "Center"
app.appendChild(divComponentes)

//Cria uma área DENTRO DA divComponentes só para os componentes irão determinar o texto INTERNO dos Postits
var divTextoPostit = document.createElement("div")
divTextoPostit.setAttribute("class", "divs-atributos")
divTextoPostit.style.alignItems = "center"

var texto = document.createElement("label")
texto.innerHTML = "Texto interno do Postit: "
texto.style.fontWeight = "bold"

var inpTexto = document.createElement("input")
inpTexto.placeholder = "Texto do Postit"
inpTexto.style.textAlign = "center"

divComponentes.appendChild(divTextoPostit)

//Cria uma área DENTRO DA divComponentes só para os componentes irão determinar a OPACIDADE dos Postits
var divOpacidadePostit = document.createElement("div")
divOpacidadePostit.setAttribute("class", "divs-atributos")
divOpacidadePostit.style.alignItems = "center"
//Label
var lbOpacidade = document.createElement("label")
lbOpacidade.innerHTML = "Opacidade do Postit: "
lbOpacidade.style.fontWeight = "bold"
//Input tipo range
var inpOpacidade = document.createElement("input")
inpOpacidade.setAttribute("type", "range")
inpOpacidade.setAttribute("min", 30)
inpOpacidade.setAttribute("max", 100)
inpOpacidade.style.marginRight = "20px"
inpOpacidade.value = "30"
inpOpacidade.onclick = function () {
    lbOpacidadeEscolhida.innerHTML = `${100 - inpOpacidade.value}%`
}
//label mostrando em quantos % o postit deverá aparecer
var lbOpacidadeEscolhida = document.createElement("label")
lbOpacidadeEscolhida.innerHTML = "70%"
lbOpacidadeEscolhida.style.fontWeight = "bold"

//insere a div de opacidade e totos os seus componentes na div de componentes
divComponentes.appendChild(divOpacidadePostit)

//Cria uma área só para os componentes que farão com que a div dos postits apareca ou suma
var divVisibilidadePostits = document.createElement("div")
divVisibilidadePostits.setAttribute("class", "areaComponentes")
divVisibilidadePostits.style.alignItems = "center"
divComponentes.appendChild(divVisibilidadePostits)

// Inserie dois elemntos (label + checkbox) para fazer com que os postits aparecam ou desapareçam
var lbVisualizarPostits = document.createElement("label")
lbVisualizarPostits.innerHTML = "Ver Postits"
lbVisualizarPostits.style.fontWeight = "bold"
var cbVisualizarPostits = document.createElement("input")
cbVisualizarPostits.setAttribute("type", "checkbox")
cbVisualizarPostits.checked = true
cbVisualizarPostits.onclick = function () {
    let exibePostits = document.getElementsByClassName("postit")
    if (cbVisualizarPostits.checked){
        areaPostits.style.display = "block"
        // exibePostits.style.display = "block"
    } else{
        areaPostits.style.display = "none"
        // exibePostits.style.display = "none"
    }
    
}
// cbVisualizarPostits.setAttribute("checked", true)


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
divComponentes.appendChild(document.createElement("br"))
divOpacidadePostit.appendChild(lbOpacidade)
divOpacidadePostit.appendChild(inpOpacidade)
divOpacidadePostit.appendChild(lbOpacidadeEscolhida)
divComponentes.appendChild(document.createElement("br"))

divComponentes.appendChild(btAddPostit)
divComponentes.appendChild(divVisibilidadePostits)
divVisibilidadePostits.appendChild(cbVisualizarPostits)
divVisibilidadePostits.appendChild(lbVisualizarPostits)

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
