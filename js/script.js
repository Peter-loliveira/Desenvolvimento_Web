// alert("ALERTA")
// console.log("LOG")
// console.warn("Warn")
// console.error("Erro")
var usuario = "Peter"
var senha = "123"

var app = document.getElementById("APP")

var inputNome = document.createElement("input")
inputNome.setAttribute("type", "Text")
inputNome.setAttribute("placeholder", "Insira seu Nome")
inputNome.setAttribute("id", "usuario")
app.appendChild(inputNome)

app.appendChild(document.createElement("br"))

var inputSenha = document.createElement("input")
inputSenha.setAttribute("type", "password")
inputSenha.setAttribute("placeholder", "Digite Sua Senha")
inputSenha.setAttribute("id", "senha")
app.appendChild(inputSenha)

app.appendChild(document.createElement("br"))

var btEnviar = document.createElement("Button")
btEnviar.innerHTML = "Aperte Aqui"
btEnviar.setAttribute("onclick", "checaLogin()")
app.appendChild(btEnviar)

function checaLogin() {
    
    if ((usuario === inputNome.value) && (senha === inputSenha.value)){
        alert("Login efetuado com sucesso")
    } else {
        alert("Bote os dados certos mané")
    }
}
