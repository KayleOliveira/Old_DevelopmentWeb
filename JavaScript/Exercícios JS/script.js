//Question 01
//Escreva uma função que receba dois números e retorne o maior deles
function maiorEntreDois (n1, n2){
    if (n1>n2){
        return n1;
    }
    else (n2>n1)
        return n2;
}
function menorEntreDois (n1, n2){
    if (n1<n2){
        return n1;
    }
    else (n2<n1)
        return n2;
}

//console.log(maiorEntreDois(8, 6));

//Question 02
//Escreva uma função que receba um Array com 3 números e imprima eles em ordem
function ordenarLista(lista){
    let listaOrdenada = lista.sort((a,b)=> a-b)
    for (let num of listaOrdenada){
        console.log(num);
    }
}
//ordenarLista([9, 25, 3, 20, 18]);

//Question 03
//Escreva uma função que receba um Array com 5 números e retorne o maior deles
function maiorNum(lista){
    let maior = lista[0];
    for (let num of lista){
        maior = maiorEntreDois(num, maior);
    }
    return maior;
}
//console.log(maiorNum([9, 25, 3, 20, 18]));

//Question 04
//Escreva uma funçao que receba um array de 5 números e retorne a média
function media(lista){
    let total = 0;
    for (let num of lista){
        total += num;
    }
    return total/lista.length
}
//console.log(media([9, 25, 3, 20, 18]));

//Question 05
//Escreva uma função que receba um número e imprima se ele é par ou ímpar
function parOuImpar(n1){
    if (n1%2 == 0){
        console.log("Par");
    }
    else{
        console.log("Impar");
    }
}
//parOuImpar(9);

//Question 06
// Escreva um programa que vá de 0 a 100 e imprima o número na tela caso não seja múltiplo de 4. Para cada número que seja múltiplo de 4 imprima "pi" no lugar
function multiplosDe4(){
    for (i=0; i<=100; i++){
        if (i%4 == 0){
            console.log("pi");
        }
        else{
            console.log(i);
        }
    }
}
//multiplosDe4();

//Question 07
// Escreva uma função que receba um objeto e imprima suas propriedades
function propriedades(object){
    for (let propriedade in object){
        console.log(propriedade);
    }
}
var pessoa = {name:"jose", age:35, heigth:1.80};
//propriedades(pessoa);

//Question 08
// Escreva uma função que receba uma data e retorne um objeto com as propriedades dia, mês e ano Referentes a essa data.
function data(d){
    let months = ['Janeiro',
    'Fevereiro',
    'Março',
    'Abril',
    'Maio',
    'Junho',
    'Julho',
    'Agosto',
    'Setembro',
    'Outubro',
    'Novembro',
    'Dezembro']

    return{
        day: d.getDate(), month: months[d.getMonth()], year: d.getFullYear()
    }
}
//console.log(data(new Date(Date.now)));

//Question 09
// Escreva um programa que receba um array de objetos com as propriedades altura e idade e imprima: A maior e menor altura e a média da idade
function pessoas(listaDePessoas){
    let maiorAltura = 0;
    let menorAltura = 999;
    let age = [];

    for(let pessoa of listaDePessoas){
        maiorAltura = maiorEntreDois(maiorAltura, pessoa.altura)
        menorAltura = menorEntreDois(menorAltura, pessoa.altura)
        age.push(pessoa.age);
    }
    console.log(maiorAltura);
    console.log(menorAltura);
    console.log(media(age));
}
/* pessoas([{altura:1.8, age:23}, 
    {altura:1.9,idade:27},
    {altura:1.65,idade:33},
    {altura:1.83,idade:44},
    {altura:1.91,idade:45},
    {altura:1.54,idade:16}]) */

//Question 10
// Escreva um programa que imprima o seguinte padrão
// * 
// * * 
// * * * 
// * * * * 
// * * * * *
function escada(a){
    for (let i=1; i<=a; i++){
        let string = "";
        for (let j=1; j<=i; j++){
            string += "* ";
        }
        console.log(string)
    }
}
escada(25);