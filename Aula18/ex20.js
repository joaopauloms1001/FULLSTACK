// Criando um objeto
const pessoal = {
    nome: 'Joao',
    sobrenome: 'Marins',
    idade: '25', 
}

console.log(pessoal.idade);

// um objeto sempre recebe essa estrutura

function criarpessoa (nome, sobrenome, idade) {// tudo que esta dentro dos parenteses são parametros
return {
    nome, // abreviação de nome; nome,
    sobrenome: sobrenome,
    idade: idade,

}
}

const person1 = criarpessoa('maria', 'santos', '28') // argumento é valor que é passado para dentro do parametro
const person2 = criarpessoa('joana', 'darc', '45')
const person3 = criarpessoa('donizete', 'santos', '90')
const person4 = criarpessoa('fernando', 'lemos', '19')
const person5 = criarpessoa('gui', 'astun', '40')

console.log(person1.nome, person1.sobrenome, person1.idade,);
console.log(person2.nome,person2.sobrenome, person2.idade, );
console.log(person3.nome, person3.sobrenome, person3.idade, );
console.log(person4.nome, person4.sobrenome, person4.idade,  );
console.log(person5.nome, person5.sobrenome, person5.idade, );