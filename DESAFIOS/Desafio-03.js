var vazio = {}//Objeto VAZIO
var pessoa = {
    nome: 'Peter',
    sobrenome: 'Lange',
    sexo: 'M',
    idade: 44,
    altura: 1.9,
    peso: 75,
    andando: false,
    caminhouQuantosMetros: 0,
    fazerAniversario: function () {
        this.idade++
    },
    andar: function (x) {
        this.caminhouQuantosMetros = this.caminhouQuantosMetros + x
        this.andando = true
    },
    parar: function () {
        this.andando = false
    },
    nomeCompleto: function () {
        if (this.sexo === "M") {
            return "Olá! Eu sou O  " + this.nome + " " + this.sobrenome
        } else {
            return "Olá! Eu sou A  " + this.nome + " " + this.sobrenome
        }
    },
    mostrarIdade: function () {
        if (this.idade <= 0) {
            return ",E NEM NASCI AINDA"//Botei só de onda mesmo
        } else {
            if (this.idade === 1) {
                return ", tenho " + this.idade + " ano"
            } else {
                if (this.idade > 1) {
                    return ", tenho " + this.idade + " anos"
                }
            }
        }
    },
    mostrarPeso: function () {
        return ", peso " + this.peso + "Kg"
    },
    mostrarAltura: function () {
        return ", minha altura é " + this.altura + "m"
    },
    quantosMetro: function () {
        if (this.caminhouQuantosMetros === 0) {
            return " TÔ PARADASSO!!!!!!!"
        } else {
            if (this.caminhouQuantosMetros === 1) {
                return ", e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metro!"
            } else {
                return ", e, só hoje, eu já caminhei " + this.caminhouQuantosMetros + " metros!"
            }
        }
    },
    apresentacao: function () {
        return this.nomeCompleto() + this.mostrarIdade() + this.mostrarAltura() + this.mostrarPeso() + this.quantosMetro()
    }
}
for (i = 10; i < 13; i++) {
    pessoa.fazerAniversario()
    pessoa.andar(i)
}
pessoa.nomeCompleto() // Olá! Meu nome é Peter Lange!
pessoa.mostrarIdade()// Olá, eu tenho 44 anos!
pessoa.mostrarPeso()// Eu peso 75Kg.
pessoa.mostrarAltura() // Minha altura é 1.9m
pessoa.mostrarIdade() //Olá, eu tenho 47 anos!
//uma função para informar se o usuario ainda está andando
function verificaAndando() {
    if (pessoa.andando = true) {
        console.log("A pessoa AINDA está andando!")
    } else {
        console.log("A pessoa está PARADA!")
    }
}
pessoa.parar() //Faz a pessoa PARAR
verificaAndando()//false
pessoa.caminhouQuantosMetros //33
pessoa.apresentacao()//Não ficou EXATAMENMTE como vc queria, mas acredito que diminuio o total de código. Dá uma liviada.