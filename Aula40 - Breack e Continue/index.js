const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

/*
//utilizando of in
for (let i in numeros){             
    let numero = numeros[i]
*/

/*
//utilizando for classico
for (let i = 0; i < numeros.lenght; i++){             
    let numero = numeros[i]
*/

for (let numero of numeros){ // utlizando for of

    if (numero === 2){ // poderia ser (numero%2 == 0)
        console.log('pulei o 2')
        continue;
    }
    console.log(numero) // sempre colocar o codigo abaixo da palavra, numero ou "coisa" que voce nao quer que seja executado

    if(numero === 7){
        console.log('7 encontrado! saindo...')
        break;
    }
}