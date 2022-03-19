let url = "https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL";


function converter(){
    let valor = document.getElementById("valor").value;

    fetch(url)
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        let rate = data.rates.BRL;
        
        let resultado = `${valor} dólares = ${rate*valor} em reais`;
        document.getElementById("resultado").innerHTML = resultado;
    })

}