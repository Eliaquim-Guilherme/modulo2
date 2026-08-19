/*1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
utilizando uma estrutura de controle if.*/
const PROMPT = require('prompt-sync')()
let numero = Number(PROMPT("Digite um número e descubra se é impar ou par:"))
console.log(numero)
// let numero = 10
if(numero % 2 === 0){
    console.log(`O número ${numero} é par!`)
}else{
    console.log(`O número ${numero} é impar!`)
}

/*2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
controle if-else.*/
let idade = 9
if(idade <= 10){
    console.log("Criança")
}
if(idade > 10 && idade < 18){
    console.log("Adolescente")
    }
    
if(idade > 17 && idade < 60){
    console.log("Adulto")
    }
    
if(idade >= 60){
    console.log("Idoso")
    }

/*3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado",
"Recuperação", ou "Reprovado" utilizando if-else if.*/

let nota = 10
if(nota >= 6 && nota <= 10){
    console.log("Aprovado!")
}else if(nota < 6 && nota >= 4){
    console.log("Recuperação!")
    }
else {
    console.log("Reprovado!")
}



/*4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
Utilize switch-case para implementar a lógica de cada opção selecionada.*/
const prompt = require('prompt-sync')()
let opcao = prompt(
  "Menu:\n" +
  "1 - Dizer Olá\n" +
  "2 - Mostrar uma mensagem\n" +
  "3 - Sair"
);

switch (opcao) {
  case "1":
    console.log("Olá!");
    break;

  case "2":
    console.log("Você escolheu a opção 2.");
    break;

  case "3":
    console.log("Saindo...");
    break;

  default:
    console.log("Opção inválida.");
}

/*5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
utilizando if-else.*/
let altura = 1.75
let peso = 100

const imc = (peso)/(altura*altura)
// console.log(imc)
if(imc < 18.5){
    console.log(`Seu imc é de: ${imc.toFixed(2)}. Categoria: Abaixo do peso!`)
}else if(imc >= 18.5 && imc <= 24.9){
    console.log(`Seu imc é de: ${imc.toFixed(2)}. Categoria: Peso normal!`)
}else if(imc >= 25 && imc <= 29.9){
    console.log(`Seu imc é de: ${imc.toFixed(2)}. Categoria: Sobrepeso!`)
}
else if(imc >= 30 && imc < 39.9){
    console.log(`Seu imc é de: ${imc.toFixed(2)}. Categoria: Obesidade!`)
}
else{
     console.log(`Seu imc é de: ${imc.toFixed(2)}. Categoria: Obesidade grave!`)
 }


/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C <
A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)*/
let A = 2
let B = 4
let C = 3
if(A < B + C && B < A + C && C < A + B){
    console.log("Os lados formam um triângulo!")
    if(A == B || C == B || A == C){
            console.log("O triângulo possuí dois lados iguais. Portanto é um triângulo isósceles.")
    }else if(A != B && B != C && C != A){
        console.log("O triângulo possuí todos os lados diferentes. Portanto é um triângulo escaleno. ")
    }else{
        console.log("O triângulo possuí todos os lados iguais. Portanto é um triângulo equilátero.")
    }    
}
else{
    console.log("A, B e C não formam um triângulo!")
}

/*7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a
média aritmética desses números.*/
const prompt = require('prompt-sync')()
let numero;
let soma = 0;
let contador = 0;

while (true) {
  numero = parseFloat(prompt("Digite um número (0 para parar):"));

  if (numero === 0) {
    break;
  }

  soma = soma + numero;
  contador = contador + 1;
}

let media = soma / contador;

console.log("Média:", media);

/*8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando
um loop for ou while.*/
let n = 5
let j = n
for(i = n; i >=2; i--){
    j = j * (i-1)
}
console.log(`${n} fatorial é: ${j}`)

/*9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
Fibonacci utilizando um loop for.*/

let n = 0
let j = 1

for(i = 0; i < 10; i++){
    console.log(n)
    let x = j + n
    n = j
    j = x    

}

/*10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final,
mostre uma listagem com todos os nomes informados, na ordem inversa daquela em
que eles foram informados.*/
const prompt = require('prompt-sync')()
let nomes = [];

for (let i = 0; i < 7; i++) {
  nomes[i] = prompt("Digite um nome:");
}

console.log("Nomes na ordem inversa:");

for (let i = 6; i >= 0; i--) {
  console.log(nomes[i]);
}

/*11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em
dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas
os dados das pessoas menores de idade.*/
let nomes = [];
let idades = [];

// leitura de 9 pessoas
for (let i = 0; i < 9; i++) {
  nomes[i] = prompt("Digite o nome da pessoa:");
  idades[i] = parseInt(prompt("Digite a idade da pessoa:"));
}

// mostrando apenas menores de idade
console.log("Pessoas menores de idade:");

for (let i = 0; i < 9; i++) {
  if (idades[i] < 18) {
    console.log("Nome:", nomes[i]);
    console.log("Idade:", idades[i]);
    console.log("----------------");
  }
}


/*12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa
e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso
ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7.*/
function pesoIdeal(alt, sexo) {
  let peso;

  if (sexo === "M") {
    peso = 72.7 * alt - 58;
  } else if (sexo === "F") {
    peso = 62.1 * alt - 44.7;
  } else {
    return "Sexo inválido";
  }

  return peso;
}

console.log(pesoIdeal(1.75, "M"));
console.log(pesoIdeal(1.60, "F"));


/*13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no
seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e
salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na
tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
○ (Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a
redução do INSS).*/
let funcionarios = [
  { matricula: 1, nome: "Ana", salario: 2000 },
  { matricula: 2, nome: "João", salario: 3500 },
  { matricula: 3, nome: "Maria", salario: 1800 }
  
];

for (let i = 0; i < funcionarios.length; i++) {
  let f = funcionarios[i];

  let inss = f.salario * 0.12;
  let liquido = f.salario - inss;

  console.log("Matrícula:", f.matricula);
  console.log("Nome:", f.nome);
  console.log("Salário bruto:", f.salario);
  console.log("Dedução INSS:", inss);
  console.log("Salário líquido:", liquido);
  console.log("------------------------");
}


/*14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados
sobre salário e número de filhos. Faça uma função que leia esses dados para um
número não determinado de pessoas e retorne a média de salário da população, a
média do número de filhos, o maior salário e o percentual de pessoas com salário até
R$350,00.*/
const prompt = require('prompt-sync')()
function pesquisaPopulacao() {
  let salario;
  let filhos;

  let somaSalario = 0;
  let somaFilhos = 0;
  let maiorSalario = 0;
  let qtdPessoas = 0;
  let qtdAte350 = 0;

  while (true) {
    salario = parseFloat(prompt("Digite o salário (ou -1 para sair):"));

    if (salario === -1) {
      break;
    }

    filhos = parseInt(prompt("Digite o número de filhos:"));

    somaSalario += salario;
    somaFilhos += filhos;

    if (salario > maiorSalario) {
      maiorSalario = salario;
    }

    if (salario <= 350) {
      qtdAte350++;
    }

    qtdPessoas++;
  }

  let mediaSalario = somaSalario / qtdPessoas;
  let mediaFilhos = somaFilhos / qtdPessoas;
  let percentualAte350 = (qtdAte350 / qtdPessoas) * 100;

  console.log("Média salarial:", mediaSalario);
  console.log("Média de filhos:", mediaFilhos);
  console.log("Maior salário:", maiorSalario);
  console.log("Percentual até R$350:", percentualAte350 + "%");
}

pesquisaPopulacao();


/*15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal
principal são iguais a 1 e os demais são nulos.*/

// Definindo o tamanho da matriz
let numero = 7

// Criando o array vazio que vai guardar todas as linhas da matriz
let MI = []

//percorre as linhas
for(let i = 1; i <= numero; i++){
    // para cada linha 'i', criamos um array vazio que vai guardar as colunas dessa linha
    MI[i] = []

    for(let j = 1; j <= numero; j++){
      if(i === j){
        MI[i][j] = 1
      } else{
        MI[i][j] = 0
      } 
    }
}
console.log("Matriz Identidade [1...7][1...7]")

for(let i = 1; i <= numero; i++){
    let linha = ""
    for(let j = 1; j<= numero; j++){
        linha += MI[i][j]
    }
    console.log(linha)
}


/*16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a
quantidade de elementos negativos da linha correspondente de M.*/
let M = [
  [ 1, -2, 3, -4, 5, -6, 7, -8 ],
  [ -1, -1, 2, 3, 4, 5, 6, 7 ],
  [ 0, 1, -1, -2, -3, 4, 5, 6 ],
  [ -5, -4, -3, -2, -1, 0, 1, 2 ],
  [ 10, 20, 30, -1, -2, -3, -4, -5 ],
  [ 1, 2, 3, 4, 5, 6, 7, 8 ]
];

let C = [];

for (let i = 0; i < M.length; i++) {
  let contagem = 0;

  for (let j = 0; j < M[i].length; j++) {
    if (M[i][j] < 0) {
      contagem++;
    }
  }

  C[i] = contagem;
}

console.log(C);



/*17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de
idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui
nome e idade.*/
let pessoa = {
  nome: "Lara",
  idade: 19
};

console.log(pessoa.idade);

pessoa.email = "lara@email.com";

console.log(pessoa);

/*18. Crie um objeto chamado dados que contém várias propriedades, incluindo números,
strings e arrays. Escreva uma função que retorne um novo objeto apenas com as
propriedades que são arrays.*/
let dados = {
  nome: "Ana",
  idade: 25,
  notas: [8, 9, 10],
  cidade: "Rio de Janeiro",
  hobbies: ["ler", "viajar", "filmes"],
  salario: 3000
};

function filtrarArrays(obj) {
  let resultado = {};

  for (let chave in obj) {
    if (Array.isArray(obj[chave])) {
      resultado[chave] = obj[chave];
    }
  }

  return resultado;
}

console.log(filtrarArrays(dados));


/*19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto
combinando as propriedades de ambos, onde as propriedades de obj2 têm
precedência sobre as do obj1 em caso de conflitos.*/
function combinarObjetos(obj1, obj2) {
  let novoObjeto = {};

  // Copia as propriedades de obj1
  for (let chave in obj1) {
    novoObjeto[chave] = obj1[chave];
  }

  // Copia as propriedades de obj2
  // Se a chave já existir, o valor será substituído
  for (let chave in obj2) {
    novoObjeto[chave] = obj2[chave];
  }

  return novoObjeto;
}

let obj1 = {
  nome: "Eliaquim",
  idade: 25,
  cidade: "Rio de Janeiro"
};

let obj2 = {
  idade: 30,
  profissão: "Desenvolvedor"
};

console.log(combinarObjetos(obj1, obj2));


/*20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o
número de vezes que a string aparece no array.*/
let frutas = ["maçã", "banana", "maçã", "laranja", "banana", "maçã"];

let contagem = {};

for (let i = 0; i < frutas.length; i++) {
  let fruta = frutas[i];

  if (contagem[fruta]) {
    contagem[fruta]++;
  } else {
    contagem[fruta] = 1;
  }
}

console.log(contagem);

/*21. Suponha que você tem um array de objetos onde cada objeto representa uma venda
com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total
de vendas por vendedor.*/
function totalVendasPorVendedor(vendas) {
  let resumo = {};

  for (let i = 0; i < vendas.length; i++) {
    let vendedor = vendas[i].vendedor;
    let valor = vendas[i].valor;

    if (resumo[vendedor]) {
      resumo[vendedor] += valor;
    } else {
      resumo[vendedor] = valor;
    }
  }

  return resumo;
}

let vendas = [
  { vendedor: "Ana", valor: 100 },
  { vendedor: "João", valor: 200 },
  { vendedor: "Ana", valor: 150 },
  { vendedor: "Maria", valor: 300 },
  { vendedor: "João", valor: 100 }
];

console.log(totalVendasPorVendedor(vendas));