/* se (condição == true) { 
    faça tal coisa
}
*/
let media = 9

if(media >= 6){
    console.log("Aprovado!")
    if(media == 10){
        console.log("Conceito A!")
    }else if(media >= 8 && media <10){
        console.log("Conceito B")
    }
}
else if(media < 6){
    console.log("Reprovado!")
}