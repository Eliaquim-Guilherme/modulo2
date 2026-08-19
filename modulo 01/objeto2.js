let aluno = [{
    nome: "Juliana",   // tipo string
    idade: 25,         // tipo number
    matriculado: true, // boolean
    notas: [8, 8, 9],  // array
    "endereço": {        // objeto
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }},
    {
    nome: "Julian",   // tipo string
    idade: 25,         // tipo number
    matriculado: true, // boolean
    notas: [8, 8, 9],  // array
    "endereço": {        // objeto
        cidade: "Rio de Janeiro",
        estado: "RJ"
    }
    }

]

for(let [chave, valor] of Object.entries(aluno)){
    console.log(`${valor.nome}`)
  
}