// For classico - geralmente com iteraveis (array ou strings)
// For in - retorna o indice ou chave (strings, arrays ou objetos)
// for of - retorna o valor em si (itaveis, arrays ou strings)

const nomes = ['luiz', 'joao', 'jose'];

for (let i=0; i<nomes.length; i++){
    console.log(nomes[i]);
};

console.log('________________')

for (i in nomes){
    console.log(nomes[i]); // o for in retorna o indice.. portanto tenho que manobrar desta maneira para pegar o valor
}

console.log('________________')

for (let valor of nomes){
    console.log(valor);
   }

console.log('________________')

