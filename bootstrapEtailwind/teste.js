let totalTestes = 0
let testesOk = 0

function expect(valorRecebido){
    return{
        toBe(valorEsperado){
            totalTeste++
            if(valorRecebido === valorEsperado){
                testesOk++
                console.log("passou")
            }else {
                console.log('reprovou')
            }
        }
    }
}

function teste(nome, funcaoDeTeste){
    funcaoDeTeste()
}

function resumoFinal(){
    console.log(`\n$`)
}