alert('Com a nossa mensagem') // sempre que esta dentro de parentes é uma função que executa uma ação
let conf = window.confirm("quer trabalhar na NASA?")

let n1 = window.prompt('digite o valor de n1');
n1 = parseFloat(n1);
let n2 = window.prompt('digite o valor de n2');
n2 = Number(n2);

let n3 = n1+n2
document.write(`A soma entre ${n1} e ${n2} é igual a ${n3} || `)

alert(n3)
 
var nome1 = window.prompt("Qual é seu nome??")
document.write(`seu nome é ${nome1} e isto foi escrito com documet.write`)
// selecionando o paragrafo com ID=res e escrevendo a mensagem
let nome10 = document.querySelector('div#res')
res.innerHTML = (`seu nome é ${nome1} e isso foi escrito com escrito com seletor`)



