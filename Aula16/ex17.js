/* Arrays
-Posso colocar qualque coisa e misturada dentro de um array
-eles sao idexados por elementos
*/
//                 0        1       2
const alunos = ['Joao', 'Maria', 'Matteo']

console.log(alunos[0]); // assim como numa string normal podemos colocar um elemento em um array conforme mostrado, neste exemplo localizamos o nome Joao indexado em 0
console.log('#', alunos);
//_____________________________//

// alunos[3] = 'Joana'; // adicionando mais um elemento no array

//_____________________________//

console.log(alunos.length); // par ver o tamanho do array

alunos[alunos.length] = 'Luiz' // adicionei elementos ao array
alunos[alunos.length] = 'Jose'
alunos[alunos.length] = 'Jacu'

console.log(alunos.length);

console.log('#', alunos);

//__________________________//
// outra forma de adicionar mais elementos no FINAL do array:

alunos.push('Otavio'); // adiciona no final
alunos.unshift('Jeani');

console.log('#', alunos);

//_____________________________//
//Para retirar elementos no final do array

const removido = alunos.pop(); // obeserq que o nome otavio foi removido do final e posso salvar esse "removido" em uma constante

console.log('#', alunos);
console.log(removido)

//____________________________//
//Para retirar elementos no começo do array

const removido2 = alunos.shift(); // obeserq que o nome jeani foi removido do final e posso salvar esse "removido" em uma constante

console.log('#', alunos);
console.log(removido2)

//________________________//
//Para remover um elemento e deixar o indice vazio, no caso o Maria foi removido

delete alunos[1]
console.log('#', alunos);

//__________________________//
// para fatiar o array para pegar elementos usa-se o slice

console.log(alunos.slice(0, 2)) // dessa maneira ELE PEGA OS DOIS PRIMEIROS
console.log(alunos.slice(0, -2)) // dessaa maneira ELE ELIMINA OS DOIS ULTIMOS


//______________________________//
// array é um objeto
console.log(typeof alunos);
console.log(alunos instanceof Array); // se retornar true é um array

