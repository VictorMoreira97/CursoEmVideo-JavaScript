// Quando agrupamos múltiplos dados de um mesmo domínio (contexto), temos uma coleção
var alunos = [
    "Andréia Gomes",
    "Letícia Castro",
    "Lucas Silva",
    "Rogério Mendonça",
    "Tomás Mendes"
]

var notas_bimestre = [
    10,
    8,
    7,
    8
]

console.log(alunos[1]); 
console.log(notas_bimestre[0]);

// objeto
var disciplinas = {
    id: 3,
    nome: "História",
    carga_horario: 160
};

// coleção de objetos
var colecao_disciplinas = [
    {id: 1, nome: "Português", carga_horaria: 240},
    {id: 2, nome: "Matemática", carga_horaria: 220},
    {id: 1, nome: "Física", carga_horaria: 150},
]

console.log(colecao_disciplinas[2]);