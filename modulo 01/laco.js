// for(inicialização; condição; incremento ou decremento)
// Cria uma repetição de x vezes. Nesse caso eu sei quantas vezes vai repetir
// for(let i = 0; i < 5; i ++){
//     console.log(i)
// }

//while(condição){função}
/*let i = 0
while(i < 5){
    console.log(i)
    i++
}*/

/*
    do{
        ação a ser executada
    }while(condição)
*/ 
// let i = 0
// do{
//     console.log(i)
//     i++
// }while(i < 5)

/*O programa deve:

criar uma variável com um número

mostrar a tabuada desse número de 1 até 10

exibir os resultados no console*/

// let numero = i 
//  for(i = 0; i < 10; i * (1 + i)){
//       console.log(i)
//  }

// do{
//     console.log(i)
//     i = 1 + i++
// }while(i <= 10)
let numero = 21
let i = 1
for(i = 1;i <= 10 ;i++ ) 
     console.log(numero + " x " + i + " = " + (numero * i))