class Deques{
    constructor(){
        this.itens = []
    }

    // Adiciona um item no inicio do deque
    adicionarFrente(elemento){
        this.itens.unshift(elemento)
    }
    
    //adicionar um item no final do deque
    adicionarFim(elemento){
        this.itens.push(elemento)
    }

    //remove e retorna o elemento do inicio do deque
    removeFrente(){
        return this.itens.shift()
    }
    //Remove e retorna o elemento do fim do deque
    removeFim(){
        return this.itens.pop()
    }
}

const deque = new Deques()