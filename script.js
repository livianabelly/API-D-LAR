fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta =>{
    return resposta.json()
}).then(economia =>{
    console.log(economia)
    document.getElementById("valorDolar").innerHTML = economia.USDBRL.bid
})

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta =>{
    return resposta.json()
}).then(economia =>{
    console.log(economia)
    document.getElementById("maiorDolar").innerHTML = economia.USDBRL.high
})

fetch(`https://economia.awesomeapi.com.br/json/last/USD-BRL`).then(resposta =>{
    return resposta.json()
}).then(economia =>{
    console.log(economia)
    document.getElementById("menorDolar").innerHTML = economia.USDBRL.low
})