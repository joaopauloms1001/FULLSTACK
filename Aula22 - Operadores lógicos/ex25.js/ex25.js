/*
Operadores lógicos
&& -> AND -> E
|| -> OR -> OU
! -> NOT -> NÃO
*/
const expressaoAnd = (true && true &&true)
const expressaoOr = (false || true)


console.log(expressaoAnd); // todas as expressóes precisam ser verdadeiras para retornar true

console.log(expressaoOr); // se uma outra for verdadeira, ela retorna true

const usuario = 'joao';
const senha = '123';

//                        true                true
const vailogar = usuario ==='joao' && senha === '123';
console.log(vailogar)

console.log(!true); // inverte de true para false
