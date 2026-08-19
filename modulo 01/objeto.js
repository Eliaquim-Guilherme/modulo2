/*
    let objeto = {
        propriedades1: valor1,
        propriedade2: valor2
    }
*/
let aluno = {
    nome: "Juliana",   // tipo string
    idade: 25,         // tipo number
    matriculado: true, // boolean
    notas: [8, 8, 9],  // array
    "endereço": {        // objeto
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
}
console.log(aluno["idade"])
aluno["idade"] = 28
console.log(aluno["idade"])

let propriedade = "nome"
console.log(aluno[propriedade])

let produto = {}
console.log(produto)
produto.nome = "Camiseta"
produto.preco = 49.90
produto.quantidadeEstoque = 100
produto.descricao = "Camiseta de algodão"
console.log(produto)
produto.preco = 19.90
console.log(produto)






let aluno = {
    nome: "Juliana",   
    idade: 25,         
    nota: 5,
    //atualizarNota: function(novaNota){
    //    this.nota = novaNota //this.nota = aluno.nota
   // } 
}

// console.log(`Nota do aluno: ${aluno.nota}`)
// aluno.atualizarNota(8)
// console.log(`Nota do aluno: ${aluno.nota}`)


const entradas = Object.entries(aluno)
console.log(entradas)