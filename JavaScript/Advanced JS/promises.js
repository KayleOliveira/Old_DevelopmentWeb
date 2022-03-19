let usuarios = ["adriano", "Marcia", "Jose"];

function insereirUsuario(nome, callback){
    let promise = new Promise(function(resolve, reject){
        setTimeout(() => {
            usuarios.push(nome);

            let error = false;

            if(error){
                resolve();
            }else{
                reject({msg: "erro de qualquer coisa"})
            }
        }, 1000);
    })

    return promise;
}
function listarUsuarios(){
    console.log(usuarios);
}

insereirUsuario("Kayle").then(listarUsuarios).catch((error) =>{
    console.log(error.msg)
});