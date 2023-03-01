/*
Operadores de comparação
> maior que
>= maior que ou igual a
< menor 
<= menor que ou igual a 
== igualdade, NAO USAR este.. usar o de baixo
=== igualdade estrita, usar este pois ele checa o valor e o tipo
!= diferente, nao usar este.. usar o de baixo
!== diferente estrito 
*/

console.log(10>6); // sempre retorna um valor boleano, poderia ser assim:

const comp = 10<8
console.log(comp)

const a = 5
const b = '5'
console.log(a==b); // nao deveria ser igual pois estou comaparando um number a uma string 