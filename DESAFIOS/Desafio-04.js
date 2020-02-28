var isTruthy = function (x) {
    if (x) {
        return true
    } else {
        return false
    }
}

//tipos de valores falsy
isTruthy(false) //o Próprio False
isTruthy(0)// Valor numérico "0"
isTruthy("")//String vazia
isTruthy('')
isTruthy(null)//Valores Nulo
isTruthy(undefined)//Valores indefiniudos
isTruthy(NaN)//Not A Number

//tipos de valores truthy
isTruthy(true)//O Próryi true
isTruthy(1)//Qualquer valor numérico <> 0
isTruthy("TESTE")//Strings não vazias
isTruthy('TESTE')
isTruthy(!null)//A negação do Null
isTruthy(!undefined)//A negação do Undefined
isTruthy(Infinity)
isTruthy({})
isTruthy([])

var carro = {
    //não foi pedido ara colocar NENHUMA marca nem modelo. Vou inventar. E como esses dados normalmente são imutaveis(const) não criarei metodos para fazer essa mudança
    marca: "Vokicivagen",
    modelo: "GolContra",
    placa: "VSF-2424",
    ano: 0,
    cor: "",
    quantasPortas: 0,
    assentos: 5,
    quantidadePessoas: 0,
    mudarCor: function (qualACor) {
        this.cor = qualACor
    },
    obterCor: function () {
        return this.cor
    },
    obterModelo: function () {
        return this.modelo
    },    
    obterMarca: function () {
        return this.marca
    },
    obterMarcaModelo: function () {
        return "Esse carro é um " + this.marca + " / " + this.modelo
    },
    entrarPassageiros: function (x) {
        if (x > this.assentos){
            return "A capacidade MÁXIMA deste carro é de 5 pessoas!"
        }
        var passageiros = ""
        if (this.quantidadePessoas !== 1) { passageiros = "pessoa!" } else { passageiros = "pessoas!" }//Não entendi porque tive de fazer com o !==
        if ((this.quantidadePessoas + x) > this.assentos) {
            return "Já temos " + this.quantidadePessoas + " no carro. Como só temos " + this.assentos + " assentos, so podem entrar mais " + (this.assentos - this.quantidadePessoas) + " " + passageiros
        } else {
            this.quantidadePessoas = this.quantidadePessoas + x
        }
    }
}

carro.cor//""
carro.mudarCor("vermelho")
carro.cor//"vermelho"
carro.mudarCor("verde musgo")
carro.cor//"verde musgo"

//marca e modelo
carro.obterMarcaModelo() //"Esse carro é um Vokicivagen / GolContra"

carro.entrarPassageiros(2)//Add 2 passageiros
carro.entrarPassageiros(4)//"Já temos 2 no carro. Como só temos 5 assentos, so podem entrar mais 3 pessoa!" 
carro.entrarPassageiros(3)
carro.entrarPassageiros(-4)
carro.entrarPassageiros(10)//Aqui eu coloquei um IF para o caso de alguem TENTAR colocar mais passageiros do que o nr de assentos. Retorna a mensagem "A capacidade MÁXIMA deste carro é de 5 pessoas!"
carro.quantidadePessoas//1


// ================================================================================================================
/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.



Invoque a função criada acima passando como parâmetro 10 valores `truthy`.

    Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
    seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
    - `marca` - String
    - `modelo` - String
    - `placa` - String
    - `ano` - Number
    - `cor` - String
    - `quantasPortas` - Number
    - `assentos` - Number - cinco por padrão
    - `quantidadePessoas` - Number - zero por padrão
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
Crie um método chamado `obterCor`, que retorne a cor do carro.
/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.

Crie um método chamado `obterMarca` que retorne a marca do carro.

Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.

Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
// Mude a cor do carro para vermelho.
// E agora, qual a cor do carro?
// Mude a cor do carro para verde musgo.
// E agora, qual a cor do carro?
// Qual a marca e modelo do carro?
// Adicione 2 pessoas no carro.
// Adicione mais 4 pessoas no carro.
// Faça o carro encher.
// Tire 4 pessoas do carro.
// Adicione 10 pessoas no carro.
// Quantas pessoas temos no carro?
// ================================================================================================================
*/