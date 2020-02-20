var vazio = {}

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
        console.log("Olá! Meu nome é " + this.nome + " " + this.sobrenome + "!")
    },
    mostrarIdade: function () {
        console.log("Olá, eu tenho " + this.idade + " anos!")
    },
    mostrarPeso: function () {
        console.log("Eu peso " + this.peso + "Kg.")
    },
    mostrarAltura: function () {
        console.log("Minha altura é " + this.altura + "m")
    },
}
for (i = 10; i < 13; i++) {
    pessoa.fazerAniversario()
    pessoa.andar(i)
}


/*
Olá! Meu nome é Peter Lange!
Olá, eu tenho 44 anos!
Eu peso 75Kg.
Minha altura é 1.9m
*/
pessoa.mostrarIdade()


// Olá, eu tenho 47 anos!

if(pessoa.andando = true){
    console.log("A pessoa AINDA está andando!")
} else {
    console.log("A pessoa está PARADA!")
}

// A pessoa AINDA está andando!


/*
Se a pessoa ainda está andando, faça-a parar.
*/
?

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/
?

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/
?

// Agora, apresente-se ;)
?


    // ==================================================================================
    // Declarar uma variável qualquer, que receba um objeto vazio.
    /*
    Declarar uma variável `pessoa`, que receba suas informações pessoais.
    As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
    - `nome` - String
    - `sobrenome` - String
    - `sexo` - String
    - `idade` - Number
    - `altura` - Number
    - `peso` - Number
    - `andando` - Boolean - recebe "falso" por padrão
    - `caminhouQuantosMetros` - Number - recebe "zero" por padrão
    
    /*
    Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
    alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
    for chamado.
    */
   /*
   Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
   características:
   - Esse método deve receber por parâmetro um valor que representará a quantidade
   de metros caminhados;
   - Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
   valor dessa propriedade a quantidade passada por parâmetro;
   - Ele deverá modificar o valor da propriedade `andando` para o valor
   booleano que representa "verdadeiro";
   
   Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
   da propriedade `andando` para o valor booleano que representa "falso".
   ?  
  Crie um método chamado `nomeCompleto`, que retorne a frase:
 - "Olá! Meu nome é [NOME] [SOBRENOME]!"
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/
?

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m." 
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
?

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
Faça a `pessoa` fazer 3 aniversários.

Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
A pessoa ainda está andando? (Use a instrução para responder e comentários
    inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/
* /
                                            * /

