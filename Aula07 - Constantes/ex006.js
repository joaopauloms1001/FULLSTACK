const n1 = 5;
const n2 = 7;
const resultado1 = n1*n2;
const resultadoDuplicado = resultado1*n2;

console.log(resultado1);
console.log(resultadoDuplicado);
let resultadoTriplicado = resultadoDuplicado*3; // só é let pq vai alterar logo na linha abaixo, ou seja ele recebe um valor (linha 8) e logo na linha 9 ele é altearado conforme função :)
resultadoTriplicado = resultadoTriplicado+1;
console.log(resultadoTriplicado);

// Para idenficar o tipo de uma variavel deve utilizar o "typeof" como abaixo:

console.log(typeof(n1)); //ou
console.log(typeof n1);

//Se tiver um numero entre aspas o JS reconhe como string e nao como um numero, entao inves de somar ele vai concatenar
const n3 = "5"; // String
const n4 = 5; //Number
console.log(n3 + n4);
console.log(typeof(n3+n4)); // podemos veriricar que o resultado é realmente uma string 


/*
-nao pode nomear uma constante começando com um numero
-nao pode contar traços e nem espaços
-nao pode usar palavras reservadas tipo: if, console, while e etc
-a constante tem que ter siginificado
-pode utilizar camelCase que é: primeira palavra com letra minuscula e as seguintes com letra maiuscula tipo nomeCliente
-AS constantes são Case-Sensitive, isto é, a letra maiuscula e minuscula faz diferença
-nao use VAR, use CONST
-OBVIAMENTE nao posso mudar o valor de uma constante
*/
