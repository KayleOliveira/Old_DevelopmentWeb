

function novoAluno(nome, idade){
    return{nome, idade};
}

let alunos = [
    novoAluno("Mario", 23),
    novoAluno("Jose", 45),
    novoAluno("Marcia", 29),
    novoAluno("Joao", 35)
]

let jogadores = [
    novoAluno("Igor", 23),
    novoAluno("Leo", 45),
    novoAluno("Michelle", 29),
    novoAluno("Maria", 35)
]

// for(let aluno of alunos){
//     if(aluno.idade < 30){
//         console.log(aluno.nome);
//     }
// }

function temMenosde30(aluno){
    return aluno.idade < 30;
}

function temMaisde30(aluno){
    return aluno.idade > 30;
}

console.log(jogadores.filter(temMaisde30));