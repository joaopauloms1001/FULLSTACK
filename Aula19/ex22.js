/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)

Referência (mutável) - array, object, function (estes nao sao primitivos)
*/
//          0123
let nome = 'joao'; // toda string é imutavel, falando especificamente do valor, mas eu posso mudar o valor da varial "nome"
nome [0] = "R";
console.log(nome[0]);
console.log("___________________")


// exemplo de valores primitivos
let a = 'A';
let b = a
console.log(a, b);

a = "outra coisa"
console.log(a, b) // isso acontece pq FAZ UMA COPIA o valor de a para b inicialmente, entao alterarndo o valor de a eu nao altero o valor de b
console.log("___________________")

// exemplo de valores nao primitivos
let c = [1,2,3]
let d = c // entao se eu alterar o valor de 'a' ou 'b' eu vou afetar as duas variaveis
console.log(c, d)

c.push(4); // adicionei mais um valor no array de variavel c
console.log(c, d) // observe que aumentou um elemento tanto para o 'c' quanto para o 'd'

d.pop() // retirei um valor do b
console.log(c, d) // portanto essa alteração serviu para a variavel 'c' e 'd'

let e = d // posso fazer com mais de duas variaveis 
console.log(c, d, e)

c.push('maria');
console.log(c, d, e) 



