/*
tudo abaixo me retorna falso, QUALQUER COISA diferente disso me retorna em verdadeiro (true)
FALSY
*false
0
''    ""  `` // 
null /  undefined
NaN


*/

console.log('joao' && 'maria'); // me retorna o ultimo valor, sele nao nao encontrar alguma coisa pra apontar como false

console.log('joao' && " " && 'maria');

const corUsuario = 'verde'; // se eu escolher a cor aqui ele escolhe a cor do usuario, pois o programa checa qualquer coisa condição por do valor logico OU (||), SE eu deixo null ele pula par ao proximo
const corPadrao = corUsuario || 'preto';

console.log(corPadrao);

// com o uso do OR (||) o programa retorna o primeiro verdadeiro que encontrar, se nao, ele retorna o ultimo como no ex abaixo, que é NaN

const a = 0; 
const b = null; 
const c = false; 
const d = false; 
const e = NaN;

console.log(a || b || c|| d || e)
