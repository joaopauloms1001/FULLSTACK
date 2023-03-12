//                   1          2          2
//                0  1  2    0  1  2    0  1  2
const numeros = [[1, 2, 3], [4, 5, 6], [7, 8, 9],] // um array dentro do outro
console.log(numeros[1][0 ])

// acessando pelo metodo mais dificil
const [, [, , seis]] = numeros;
console.log(seis);

//acessando por listas
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);
