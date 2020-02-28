// Crie uma variável qualquer, que receba um array com alguns valores aleatórios
// - ao menos 5 - (fica por sua conta os valores do array).
var qualquer = [6, 2, 4, 5, 8, 7, 4, 10, 56, 326982, 23.6]

// Crie uma função que receba um array como parâmetro, e retorne esse array.
function recebeArray(x) {
    return x
}
recebeArray(qualquer)

// Imprima o segundo índice do array retornado pela função criada acima.
console.log(recebeArray(qualquer[1]))

// Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
// segundo, um número. A função deve retornar o valor de um índice do array que foi passado
// no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
// segundo parâmetro.
function imprimeArray(a, b) {
    return a[b]
}
imprimeArray([25, 36, 96, 85, 74, 45], 4)

// Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
var arrayVariosTipos = ["Primeiro elemento", 2, { nome: "Peter", Sobrenome: "Lange" }, true, null]

// Invoque a função criada acima, fazendo-a retornar todos os valores do último array criado.
imprimeArray(arrayVariosTipos, 0)
imprimeArray(arrayVariosTipos, 1)
imprimeArray(arrayVariosTipos, 2)
imprimeArray(arrayVariosTipos, 3)
imprimeArray(arrayVariosTipos, 4)

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
- `quantidadePaginas` - Number (quantidade de páginas)
- `autor` - String
- `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
function book(y) {
    let livros = {
        "Duna": {titulo:"Duna", quantidadePaginas: 1500, autor: "João Da Silba", editora: "Com. Das Letras" },
        "Catalogo Avon": {titulo:"Catalogo Avon", quantidadePaginas: 700, autor: "Mário João", editora: "Conrad" },
        "10 formas de Liberar o Toin": {titulo:"10 formas de Liberar o Toin", quantidadePaginas: 10, autor: "David Sobre", editora: "Ai Papai" }
    }

    if (y === undefined) {
        return (livros)
    } else {
        return (livros[y])
    }
}
book("Duna")
book("Catalogo Avon")
book("10 formas de Liberar o Toin")

// Usando a função criada acima, imprima o objeto com todos os livros.
book()

// Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
// usando a frase:
// "O livro [NOME_DO_LIVRO] tem [X] páginas!"
let LivroConsulta =  book("Catalogo Avon")
console.log("O livro '" + LivroConsulta.titulo + "' tem " + LivroConsulta.quantidadePaginas + " páginas!")

// Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
// a frase:
// "O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
console.log("O autor do livro '" + LivroConsulta.titulo + "' é " + LivroConsulta.autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/
console.log("O livro '" + LivroConsulta.titulo + "' foi publicado pela Editora " + LivroConsulta.editora)