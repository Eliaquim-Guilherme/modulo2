// const pilha = []     *LIFO = Last in, First Out*

// pilha.push("Livro 1")
// pilha.push("Livro 2")
// pilha.push("Livro 3")

// console.log("Topo:", pilha[pilha.length - 1])
// console.log("Removido:", pilha.pop())
// console.log("Agora o topo é:", pilha[pilha.length - 1])

class Pilha{
    constructor(){
        this.itens = []
    }
    push(elemento){
        this.itens.push(elemento)
    }
     pop(){
         if(this.isEmpty()){
            return "A pilha está vazia!"
         }
         return this.itens.pop()
     }
    isEmpty(){
        return this.itens.length === 0
    }

    print(){
        console.log(this.itens)
    }
    
}


const pilha = new Pilha()
pilha.push("A")
pilha.print()
pilha.pop()
pilha.print()
console.log(pilha.pop())