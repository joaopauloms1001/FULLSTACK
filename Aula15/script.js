/*
-raiz quadrada
se o numero é interio
NaN: false
arredondadndo para baixo
arredondadno para cima
com duas casas decimais
*/


let num1 = Number(window.prompt("Escolha um numero")); // abri um prompt para escolher um numero ja convertendo este para um numero 

let tit = document.getElementById('titulo'); // selecionei por ID o titulo "h1" para escrever o numero escolhido

tit.innerHTML = (`O numero escolhido é ${num1}`); // escrevendo o numero escolhido

let corpo = document.getElementById('texto'); // selecionei por id o main para escrever os resultados

texto.innerHTML += (`<p>A raiz quadrade de ${num1} é: <strong>${num1 ** 0.5}</strong></p>`); // usei a id texto selecionada acima para escrever no main, utilizando paragrafos.. IMPORTANTE: sempre colocar += se nao ele fica substituindo o texto de cima 

texto.innerHTML +=(`<p>${num1} é um numero inteiro? <strong>${Number.isInteger(num1)}</strong> </p>`);

texto.innerHTML +=(`<p>${num1} é um NaN? <strong>${Number.isNaN(num1)}</strong></p>`);

let num2 = Math.ceil(num1);
texto.innerHTML += (`<p>Arredondando ${num1} para baixo temos: <strong>${num2}</strong></p>`);

let num3 = Math.floor(num1);
texto.innerHTML +=(`<p>Arredondando ${num1} para cima temos: <strong>${num3}</strong></p>`);

texto.innerHTML +=(`<p>O numero com apenas duas casas decimais: <strong>${num1.toFixed(2)}</strong> </p>`);