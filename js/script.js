// alert("ALERTA")
// console.log("LOG")
// console.warn("Warn")
// console.error("Erro")

// Area geral do site
var app = document.getElementById("APP")

var lbTituloLogin = document.createElement("h2")
lbTituloLogin.innerHTML = "LOGIN"
app.appendChild(lbTituloLogin)

var lbNome = document.createElement("label")
lbNome.innerHTML = "Nome: "
app.appendChild(lbNome)
// Cria o primeiro INPUT da area de login
var inputNome = document.createElement("input")
inputNome.setAttribute("type", "Text")
inputNome.setAttribute("placeholder", "Insira seu Nome")
inputNome.setAttribute("id", "usuario")
app.appendChild(inputNome)

app.appendChild(document.createElement("br"))

var lbSenha = document.createElement("label")
lbSenha.innerHTML = "Senha: "
app.appendChild(lbSenha)
var inputSenha = document.createElement("input")
inputSenha.setAttribute("type", "password")
inputSenha.setAttribute("placeholder", "Digite Sua Senha")
inputSenha.setAttribute("id", "senha")
app.appendChild(inputSenha)

app.appendChild(document.createElement("br"))

var btEnviar = document.createElement("Button")
btEnviar.innerHTML = "Aperte Aqui"
btEnviar.setAttribute("onclick", "checaLogin()")
app.appendChild(document.createElement("br"))
app.appendChild(btEnviar)
app.appendChild(document.createElement("br"))

var usuario = "Peter"
var senha = "123"
function checaLogin() {
    
    if ((usuario === inputNome.value) && (senha === inputSenha.value)){
        alert("Login efetuado com sucesso")
    } else {
        alert("Bote os dados certos mané")
    }
}

app.appendChild(document.createElement("br"))

var divRepeticoes = document.createElement("div")
divRepeticoes.setAttribute("id", "AreaRepeticao")
app.appendChild(divRepeticoes)
divRepeticoes.appendChild(document.createElement("br"))

var inputTotalComponentes = document.createElement("input")
inputTotalComponentes.setAttribute("type", "number")
inputTotalComponentes.setAttribute("placeholder", "Insira o total de elementos a serem criados")
divRepeticoes.appendChild(inputTotalComponentes)
divRepeticoes.appendChild(document.createElement("br"))
divRepeticoes.appendChild(document.createElement("br"))

