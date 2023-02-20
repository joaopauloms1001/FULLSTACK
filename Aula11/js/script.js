alert('Com a nossa mensagem') // sempre que esta dentro de parentes é uma função que executa uma ação
let conf = window.confirm("quer trabalhar na NASA?")
var nome1 = window.prompt("Qual é seu nome??")
document.write(`seu nome é ${nome1} "escrito com documet.write`)

// selecionando o paragrafo com ID=res e escrevendo a mensagem
var nome10 = document.querySelector('div#res')
res.innerHTML = (`seu nome é ${nome1} escrito com seletor`)



