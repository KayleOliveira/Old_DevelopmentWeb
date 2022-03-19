// function novoAluno(nome, idade){
//     return{nome, idade};
// }

// let alunos = [
//     novoAluno("Mario", 23),
//     novoAluno("Jose", 45),
//     novoAluno("Marcia", 29),
//     novoAluno("Joao", 35)
// ]

// function alunoDaquiA5Anos(aluno){
//     let novoAluno = aluno;
//     novoAluno.idade += 5;
//     return novoAluno;
// }

// console.log(alunos.map(alunoDaquiA5Anos));

let alunoA = {nome:"Kayle", idade: "15"};

let alunoB = Object.assign({},alunoA);

alunoB.idade = 25;

//Como alunoA está dentro de alunoB, quando alteramos o AlunoB
//também alteramos o AlunoA, pois ele esta como referencia
//arrays são referencia e não valor