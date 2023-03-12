const pontuacaoUsuario = 1000; 

const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario Vip' : 'Usuario normal'
console.log(nivelUsuario)
// crirar uma variavel, colocar a condição, colocar sinal de interrogação, escrever a mensagem, colocar dois pontos e escrever a outra mensagem

/*
if (pontuacaoUsuario >= 1000)
    console.log(`Usuario vip`)
else {
    console.log(`Usuario comum`)
}
*/
// Agora o objetivo é reduzir este codigo

const corUsuario = 'blue';
const corPadrao = corUsuario || 'black';
console.log(nivelUsuario, corPadrao)
