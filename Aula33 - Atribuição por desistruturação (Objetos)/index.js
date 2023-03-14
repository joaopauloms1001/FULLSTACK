const pessoa = {
    nome: 'joao',
    sobrenome: 'santos',
    idade: 30, 
    endereco: {
        rua: 'Jose ribeiro',
        numero: 4529,
        bairro: 'noemia',
    }
    
}
//console.log(pessoa)

//Para mostrar somente o nome dentro do objeto
//const nome = pessoa.nome;
//console.log(nome);

//atribuiçao via desestruturação
const {nome = ''} = pessoa; // coloquei as aspas em vazio para que mesmo que nao exita um nome, este nao fique com undefined, experimente comentar o a linha 2
console.log(nome);

// extraindo um objeto de dentro de outro
const {endereco: {rua, numero}} = pessoa;
console.log(rua, numero);

//ou pode extrair o endereço completo
const {endereco} = pessoa
console.log(endereco);

//semelhante ao array posso pegar o "resto"  com a propriedade resto

const {idade, ...resto} = pessoa;
console.log(idade, resto);