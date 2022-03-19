//Carne - 400g/pessoa + de 6h - 650g
//Cerveja - 1200ml/pessoa + 6h - 2000ml
//Refri/agua - 1000ml/pessoa + 6h - 1500ml
//crianças valem por 0,5 (1/2) pessoa

//lincando dos valores de cada input:
let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;
    
    let qtdCarne = adultos*carnePP(duracao) + (criancas*carnePP(duracao)/2);
    let qtdCerveja = adultos*cervejaPP(duracao);
    let qtdRefri = adultos*refriPP(duracao) + (criancas*refriPP(duracao)/2);

    resultado.innerHTML = `<p>${qtdCarne/1000} Kg de carne</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdCerveja/355)} latas de cerveja</p>`;
    resultado.innerHTML += `<p>${Math.ceil(qtdRefri/2000)} Pet's de 2l de refrigerante</p>`;
}

function carnePP(duracao){
    if(duracao >= 6){
        return 650;
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if(duracao >= 6){
        return 2000;
    }else{
        return 1200;
    }
}

function refriPP(duracao){
    if(duracao >= 6){
        return 1500;
    }else{
        return 1000;
    }
}