//Como não entendo NADA de futebol, e simplemnete ODEIO, vou mandar tudo pro inferno aqui.

/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
var championship = ligaDosOtarios
console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/
var teams = [
    "Tabajara Futebol Clube",
    "Os felas",
    "Las Miserias",
    "Os Otários",
    "Que se Dane a Torcida"
]

// console.log( 'Times que estão participando do campeonato:', teams );
console.log('Times que estão participando do campeonato:', teams)

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
- A função deve receber um número por parâmetro;
- A função deve retornar a frase:
"O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
- Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
que está nessa posição no array criado acima com os nomes dos times.
--------------
Dica: lembre-se que arrays começam no índice zero, então a posição passada
deve ser sempre um número a mais que o índice do array ;)
--------------
- A função só deve retornar a frase acima somente se o time estiver entre
os 5 primeiros.
- Se não houver time para a posição passada, deve retornar a mensagem:
"Não temos a informação do time que está nessa posição."
*/
function showTeamPosition(x) {
    if ((x > 5) || (x <= 0)) {
        return "Não temos a informação do time que está nessa posição."
    } else {
        return `O time que está em ${x}º lugar ne o ${teams[x - 1]}`
    }
}

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/
showTeamPosition(2)
showTeamPosition(5)
showTeamPosition(3)
showTeamPosition(6)
showTeamPosition(-5)

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/
function imprimeAte30(i) {
    let x = 30
    while (i <= x) {
        console.log(i)
        i++
    }
}

/*
Crie uma função chamada `convertToHex`, com as seguintes características:
- A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
- Escolha 5 cores que serão convertidas do nome da cor para o seu
equivalente hexadecimal (pode ser qualquer tom);
- Usando a estrutura switch, verifique se a cor passada por parâmetro é
algum hexa escolhido. Se for, retorne a frase:
"O hexadecimal para a cor [COR] é [HEXADECIMAL].";
- Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
a frase:
"Não temos o equivalente hexadecimal para [COR]."
*/
// function convertToHex(digiteACor) {       
//     let tabelaDeCores = {
//         "red": "#ff0000",
//         "green": "#00ff00",
//         "blue": "#0000ff",
//         "yellow": "#ffff00",
//         "white": "#ffffff",
//         "black": "#000000"
//     }
//     switch (digiteACor) {        
//         case undefined:
//             return `Não temos o equivalente hexadecimal para '${digiteACor}'.`
//             break 
//         default:
//             return `O hexadecimal para a cor '${digiteACor}' é ${tabelaDeCores[digiteACor]}."`
//             break;
//     }
// }

function convertToHex(digiteACor) {
    let tabelaDeCores = {
        "red": "#ff0000",
        "green": "#00ff00",
        "blue": "#0000ff",
        "yellow": "#ffff00",
        "white": "#ffffff",
        "black": "#000000"
    }
    switch (digiteACor) {
        case undefined:
            return `Não foi digitada uma cor`
            break
        default:
            if (tabelaDeCores[digiteACor] === undefined) {
                return `A cor "${digiteACor}" não foi encontrada!`
            } else {
                return `O hexadecimal para a cor "'${digiteACor}'" é ${tabelaDeCores[digiteACor]}."`
            }
            break
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/
convertToHex("red")
convertToHex("green")
convertToHex("yellow")
convertToHex("blue")
convertToHex("white")
convertToHex("black")
convertToHex("cor de burro quando foge")
convertToHex("cor de corno")
//Nao consegui resolver o problema que se apresenta quando tento mostrar uma cor que não está na tabela
//sempre aparece a mensagem "O hexadecimal para a cor '####' é undefined.""