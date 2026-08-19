class Fila{
    constructor(){
        this.itens = []
    }

    //Adicionar um elemento ao final de flia
    enfileirar(elemento){
        this.itens.push(elemento)
    }

    //Imprime os elementos da fila
    imprimirFila(){
        console.log(this.itens.join(` <- `))
    }

    //Remove e retorna o primeiro da fila
    desenfileirar(){
        if(this.vazio()){
            return "A fila está vazia!"
        }

        return this.itens.shift()
    }

    vazio(){
        return this.itens.length === 0 
    }
    //Retorna o primeiro elemento sem remove-lo
    proximo(){
        if(this.vazio()){
            return "A fila está vazia!"
        }
        return this.itens[0]
    }
}

const fila = new Fila()
fila.enfileirar("A")
//fila.imprimirFila()
fila.enfileirar("2")
fila.imprimirFila()
//console.log(fila.desenfileirar())
//console.log(fila.desenfileirar())
//console.log(fila.desenfileirar())
console.log(fila.proximo())