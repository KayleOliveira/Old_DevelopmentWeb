//passar uma função como argumento para outra função;

// function ola(){
//     console.log("Hello");
// }

// function saudacao(s,nome){
//     s();
//     console.log(nome);
// }

// saudacao(ola,"kayle");

let usuarios = ["adriano", "Marcia", "Jose"];

function insereirUsuario(nome, callback){
    setTimeout(() => {
        usuarios.push(nome);
        callback();
    }, 1000);
}
function listarUsuarios(){
    console.log(usuarios);
}

insereirUsuario("Kayle", listarUsuarios);
listarUsuarios();