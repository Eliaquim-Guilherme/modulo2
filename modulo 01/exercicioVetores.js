/*

    Contagem de números pares: Usar o laço for para contar quantos núeros pares existem em um array de números

*/

let numeros = [4, 5, 21, 5, 6, 5, 5, 7, 8, 9, 1, 2, 0, 2, 3, 1, 212]
let quantidadePares = 0
for(let pos = 0; pos < numeros.length; pos++){
    if(numeros[pos] % 2 == 0){
        // quantidadePares = quantidadePares + 1
        quantidadePares++
    }
}

console.log(`Quantidade de números pares: ${quantidadePares}`)