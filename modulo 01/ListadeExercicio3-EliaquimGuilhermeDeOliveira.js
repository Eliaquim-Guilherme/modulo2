/*1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.*/

const produto = {
    nome: "Notebook",
    preco: 3500,
    categoria: "Eletrônicos",
    quantidade: 10
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}

produto.desconto = 10;

const precoFinal = produto.preco - (produto.preco * produto.desconto / 100);

console.log(`Preço final: R$ ${precoFinal.toFixed(2)}`);


/*2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).*/

const personagem1 = {
    nome: "Lobo Guará",
    vida: 110,
    ataque: 80,
    defesa: 45
};

const personagem2 = {
    nome: "Capivara",
    vida: 160,
    ataque: 40,
    defesa: 60
};

console.log("\nPersonagem 1:");
for (let atributo in personagem1) {
    console.log(`${atributo}: ${personagem1[atributo]}`);
}

console.log("\nPersonagem 2:");
for (let atributo in personagem2) {
    console.log(`${atributo}: ${personagem2[atributo]}`);
}

const poder1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
const poder2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

if (poder1 > poder2) {
    console.log(`${personagem1.nome} possui maior poder.`);
} else if (poder2 > poder1) {
    console.log(`${personagem2.nome} possui maior poder.`);
} else {
    console.log("Empate.");
}


/*3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.*/

const funcionario = {
    nome: "Fonseca",
    cargo: "Pedreiro",
    salario: 5000,
    anosExperiencia: 6
};

for (let dado in funcionario) {
    console.log(`${dado}: ${funcionario[dado]}`);
}

let bonus;

if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log(`Bônus anual: R$ ${bonus.toFixed(2)}`);


/*4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.*/

const PROMPT = require('prompt-sync')()
const inventario = {
    espada: 2,
    pocao: 0,
    escudo: 3,
    adaga: 1
};

for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

let itemUsado = PROMPT("Digite o nome do item que deseja usar:");

if (itemUsado in inventario) {
    if (inventario[itemUsado] > 0) {
        inventario[itemUsado]--;
        console.log(`Você usou 1 ${itemUsado}.`);
        console.log(`Quantidade restante: ${inventario[itemUsado]}`);
    } else {
        console.log("Item esgotado.");
    }
} 

console.log(inventario);


/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/

const orcamento = {
    alimentacao: { planejado: 1000, gasto: 900 },
    transporte: { planejado: 500, gasto: 600 },
    lazer: { planejado: 300, gasto: 250 },
    saude: { planejado: 400, gasto: 350 }
};

let saldo = 0;

for (let categoria in orcamento) {
    const dados = orcamento[categoria];

    if (dados.gasto <= dados.planejado) {
        console.log(`${categoria}: dentro do orçamento`);
    } else {
        console.log(`${categoria}: acima do orçamento`);
    }

    saldo += dados.planejado - dados.gasto;
}

console.log(`Saldo geral: R$ ${saldo.toFixed(2)}`);


/*6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.
*/

const musicas = [
    { titulo: "Poca", artista: "Tangolo Mangos", duracao: 244 },
    { titulo: "Neguinho Poeta", artista: "Bebeto", duracao: 156 },
    { titulo: "Everyday Struggle", artista: "Notorious B.I.G", duracao: 320 }
];

function formatarTempo(segundos) {
    const min = Math.floor(segundos / 60);
    const seg = segundos % 60;
    return `${String(min).padStart(2, "0")}:${String(seg).padStart(2, "0")}`;
}

for (const musica of musicas) {
    console.log(
        `${musica.artista} - ${musica.titulo} (${formatarTempo(musica.duracao)})`
    );
}

let duracaoTotal = 0;

musicas.forEach(musica => {
    duracaoTotal += musica.duracao;
});

console.log(`Duração total: ${formatarTempo(duracaoTotal)}`);


/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.
*/

const alunos = [
    { nome: "Eli", nota: 1 },
    { nome: "José", nota: 2 },
    { nome: "Leona", nota: 8 },
    { nome: "Diana", nota: 9 },
    { nome: "Dudu", nota: 5 },
    { nome: "Fernanda", nota: 10 }
];

let somaAprovados = 0;
let Aprovados = 0;

let somaReprovados = 0;
let Reprovados = 0;

for (const aluno of alunos) {
    let situacao;

    if (aluno.nota >= 7) {
        situacao = "Aprovado";
        somaAprovados += aluno.nota;
        Aprovados++;
    } else if (aluno.nota >= 5) {
        situacao = "Recuperação";
    } else {
        situacao = "Reprovado";
        somaReprovados += aluno.nota;
        Reprovados++;
    }

    console.log(`${aluno.nome}: ${situacao}`);
}

console.log(
    `Média aprovados: ${(somaAprovados / Aprovados).toFixed(2)}`
);

console.log(
    `Média reprovados: ${(somaReprovados / Reprovados).toFixed(2)}`
);


/*8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.
*/

const produtos = [
    { nome: "Feijão", preco: 5.99, quantidade: 100 },
    { nome: "Arroz", preco: 3.29, quantidade: 125 },
    { nome: "Macarrão", preco: 5.35, quantidade: 70 },
    { nome: "Farinha de Trigo", preco: 3.90, quantidade: 66 },
    { nome: "Flocão de Milho", preco: 5.89, quantidade: 47 },
    { nome: "Batata Palha", preco: 19.99, quantidade: 125 }
];

let totalEstoque = 0;
console.log("Estoque de Produtos:")
produtos.forEach(produto => {
    const valor = produto.preco * produto.quantidade;

    console.log(
        `${produto.nome}: R$ ${valor.toFixed(2)}`
    );

    totalEstoque += valor;
});

console.log(`Valor total do estoque: R$ ${totalEstoque.toFixed(2)}`);


/*9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".
*/

const contatos = [
    {
        nome: "Eli",
        telefone: "(11)1111-1111",
        email: "eli@email.com"
    },
    {
        nome: "João",
        telefone: "(22)2222-2222",
        email: "jojo@email.com"
    },
    {
        nome: "Emi",
        telefone: "(33)3333-3333",
        email: "ime@email.com"
    }
];

contatos.forEach(contato => {
    console.log(
        `${contato.nome} | ${contato.telefone} | ${contato.email}`
    );
});
const PROMPT = require('prompt-sync')()
const busca = PROMPT("Busque um contato:");
let encontrado = false;

for (const contato of contatos) {
    if (contato.nome === busca) {
        console.log("Contato encontrado:");
        console.log(contato);
        encontrado = true;
        break;
    }
}

if (!encontrado) {
    console.log("Não encontrado.");
}


/*10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.
*/

const historico = [];

function visitar(pagina) {
    historico.push(pagina);
}

function voltar() {
    if (historico.length > 1) {
        historico.pop();
    }
}

function paginaAtual() {
    return historico[historico.length - 1];
}

visitar("Google");
console.log(paginaAtual());

visitar("YouTube");
console.log(paginaAtual());

visitar("Orkut");
console.log(paginaAtual());

visitar("MSG");
console.log(paginaAtual());

voltar();
console.log(paginaAtual());

voltar();
console.log(paginaAtual());


/*11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.
*/

const fila = [];

function chegarPaciente(nome) {
    fila.push(nome);
}

function chamarProximo() {
    return fila.shift();
}

function exibirFila() {
    console.log("Fila:", fila);
}

chegarPaciente("Eli");
chegarPaciente("Emi");
chegarPaciente("Maria");
chegarPaciente("Pedro");
chegarPaciente("Pingo");

exibirFila();

console.log("Atendido:", chamarProximo());
exibirFila();

console.log("Atendido:", chamarProximo());
exibirFila();

console.log("Atendido:", chamarProximo());
exibirFila();


/* 12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.*/

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