// 1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma
// loja, dado um array com os valores das transações.

// Instruções:
// ● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
// ● Usar o laço for para somar todos os valores;
// ● No final, exibir o valor total acumulado de vendas no console.

let vendas = [12.5, 18.2, 55.1, 1.3, 21.1, 214]
let valor = 0
for(let i = 0; i < vendas.length ;i++){
    valor = valor + vendas[i]
}
console.log(`Total de vendas diárias: R$${valor}`)



// 2. Calculando a média de notas: Usar um laço for para calcular a média das notas de
// um/a estudante.
// Instruções:
// ● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
// ● Utilizar o laço for para somar as notas;
// ● Calcular a média das notas e exibir o resultado no console.

let notas = [6, 8, 4.5, 10]
let media = 0
for(i = 0; i < notas.length; i++){
    media = (media + notas[i] / notas.length)
}
console.log(`Sua média é : ${media}!`)


// 3. Procurando um valor no array: Usar um laço for para procurar um número específico em
// um array e verificar se ele existe.
// Instruções:
// ● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
// ● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
// ● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
// "Número encontrado" ou "Número não encontrado".

let n = [4,5,12,58,52,31,5,8,4,74,8,65,2,41,7,56,6,87]
let numeroProcurado = 4
for(let pos = 0; pos < n.length; pos++)

if(numeroProcurado == n[pos]){
     console.log("Número encontrado")
}
else if(numeroProcurado != n[pos]){
        console.log("Número não encontrado")
     }

     // console.log("Número encontrado!")}
    // else(console.log("Número não encontrado!"))

// 4. Contagem de números pares: Usar o laço for para contar quantos números pares
// existem em um array de números.
// Instruções:
// ● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
// ● Utilizar o laço for para contar quantos números pares existem nesse array;
// ● Ao final, exiba a quantidade de números pares no console.
//let n = [4,5,12,58,52,31,5,8,4,74,8,65,2,41,7,56,6,87]
let pares = 0
for(i = 0; i < n.length; i++){
    if(n[i] % 2 == 0){
        pares++
    }
}
console.log(`A quantidade de números pares é de: ${pares}`)