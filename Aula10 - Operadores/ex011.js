const nome = 'João'; //string
const nome1 = "João"; // string
const nome2 = `João`; // string
const num1 = 10; // number
const num2 = 50.87; // number
let nomeAluno; // undefined = nao aponta para lugar nenuhum
const sobrenomeAluno = null; // Nulo -> nao aponta pra nenhum local na memoria
// diferenla de NULL E INDEFINED, eu defino que a variavel nao aponta pra nenhum local na memoria
const aprovado = false; // Boolean = true, false (lógico)
console.log(typeof aprovado, aprovado); 

let a = 2;
let b = a;
console.log(a, b); // 2, 2

a = 3;
console.log(a, b); // vou alterar somente o valor de a pois o de b continua o inicialmente executado na primeira vez (linha 14)
