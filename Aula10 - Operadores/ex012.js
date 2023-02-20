/*
Operadores:
-> + Adição/concatenação (concatenum uma string + string ou string + numero)
-> ** potenciação
-> % resto da divisão

-> Precedencia:
() 
**
* / %
+ -

Incremento = ++
Decremento = --
*/

const n1 = 10;
const n2 = 5;
console.log(n1/n2)

//incremento
let contador = 1;
contador ++;
++contador;
console.log(contador); // sempre utilizar "let", posso utilizar antes ou depois do contador, quando eu faço "pré" primeira ele incrementa e depois mostra

// decremento
contador --;
console.log(contador);

// operadores de atribuição, pode ser um operador qualquer seguido pelo simbolo de = 
const  passo = 2;
let cont = 0;
cont += passo; // cont = cont + 2
cont += passo;
cont += passo;
console.log(cont)

//para coverter uma strig para numero basta dar o comando parseInt('n') para numeros inteiros ou parseFloat('n') para numeros quebrados ex:
const num5 = parseInt('5')
const num7 = parseFloat('6')
console.log(typeof num5);
console.log(typeof num7);

if (n1%n2 == 0){
    console.log("ok ")
}






