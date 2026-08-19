let inicio = null;


function adicionar(tarefa) {
    const novoNo = {
        valor: tarefa,
        proximo: null
    };

    if (inicio === null) {
        inicio = novoNo;
        return;
    }

    let atual = inicio;

    while (atual.proximo !== null) {
        atual = atual.proximo;
    }

    atual.proximo = novoNo;
}


function remover(tarefa) {
    if (inicio === null) {
        return;
    }

    
    if (inicio.valor === tarefa) {
        inicio = inicio.proximo;
        return;
    }

    let atual = inicio;

    while (atual.proximo !== null) {
        if (atual.proximo.valor === tarefa) {
            atual.proximo = atual.proximo.proximo;
            return;
        }

        atual = atual.proximo;
    }
}


function exibir() {
    let atual = inicio;

    while (atual !== null) {
        console.log(atual.valor);
        atual = atual.proximo;
    }
}


adicionar("Lavar louça");
adicionar("Passar roupa");
adicionar("Varrer casa");
adicionar("Limpar banheiro");

console.log("Lista antes da remoção:");
exibir();


remover("Passar roupa");

console.log("\nLista depois da remoção:");
exibir();