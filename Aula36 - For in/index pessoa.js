// for in -> lê os indices ou chaves do objeto
//                 0       1       2
const pessoa = {
    nome: 'Joao',
    sobrenome: "Santos",
    idade: 19,

};

for (let keys in pessoa){
    console.log(keys, pessoa[keys]); // pegando o valor de cada chave dentro do objeto
}

console.log(pessoa.idade); // esta é uma maneira de acessar cada chave entro do objeto
console.log(pessoa['idade']); // esta é outra.. chamando pelo nome da propria chave