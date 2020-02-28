function soma(a, b) {
    return a + b
}
soma(1, 2)

var novaSoma = soma(1, 5) + 5
console.log(novaSoma)

var semValor
function adicionar(c) {
    semvalor = semvalor + c
    return "O valor da variável agora é " + semvalor
}
adicionar(1005)

function verifica(a, b, c) {
    if (a == undefined || b == undefined || c == undefined) {
        console.log("Preencha todos os valores corretamente!")
    } else {
        return (a * b * c) + 2
    }
}
verifica(10, 5)
//  Preencha todos os valores corretamente!
verifica(100, 20, 6)
//  12002


function capeta(a, b, c) {
    if ((a === undefined) && (b === undefined) && (c === undefined)) {
        return false
    } else {
        if ((b == undefined) && (c == undefined)) {
            console.log(a)
        }
        else {
            if (c == undefined) {
                console.log(a + b)
            } else {
                if ((a !== undefined) && (b !== undefined) && (c !== undefined))
                    console.log((a + b) / c)
            }
        }
    }
}
capeta(1, 2, 3)
capeta(1, 2)
capeta(1)
capeta()




// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) Coloque um comentário de linha ao lado da função com o resultado de cada invocação.
// ===================================================================================
// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

 // Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, e somando `5` ao resultado retornado da função.

 // Qual o valor atualizado dessa variável?

 // Declare uma nova variável, sem valor.
/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.

// Invoque a função criada acima.
// Qual o retorno da função? (Use comentários de bloco).
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
// Invoque a função criada acima, passando só dois números como argumento.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.
// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano`false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne`null`.
*/
