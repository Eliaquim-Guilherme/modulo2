// 1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
// passadas como parâmetros.
// Instruções:
//  Criar uma função que receba três parâmetros (nota1, nota2,nota3);
// A função deve calcular a média das três notas e retornar o valor;
// Chamar a função e exibir a média no console.
function notas(n1, n2, n3){
    return (n1 + n2 + n3) / 3 
}
let media = notas(8, 5, 10)
console.log(`Sua média é: ${media}`)


// 2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
// idade ou menor de idade.
// Instruções:
//  Criar uma função chamada que receba um parâmetro (idade);
// Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
// Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
// Chamar a função passando uma idade e exibir o resultado no console.

function anos(idade){
    
    if (idade >= 18){
        console.log("Você é maior de idade!")
    }
    else {
        console.log("Você é menor de idade!")
    }
}
let x = anos(13)

// 3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
// operador e retorne o resultado da operação.
// Instruções:
// Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
// O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
// A função deve retornar o resultado da operação;
// Chamar a função com diferentes operadores e exibir os resultados no console.
function calculadora(n1, n2, operador){
    //  const soma = operador == +
    //  const subtraçao = operador == -
    //  let divisao = operador == n1 / n2
     const multiplicação = operador == n1 * n2
    console.log(calculadora(3, 10, soma))
    // switch(operador){
    //     case 0:
    //         return n1 + n2
    //         break
    //     case 1:
    //         return n1 - n2
    //         break
    //     case 2:
    //         return n1 / n2
    //         break
    //     case 3:
    //         return n1 * n2
    //         break
    }
    //calculadora(3, 10, soma)
    // const soma = +
    // const subtração = -
    // const divisao = /
    // const multiplicação = *
    // return (n1) (operador) (n2)

// let resultado = calculadora(2, 3, operador)
// console.log(resultado)