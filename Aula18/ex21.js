const pessoal = {
    nome: 'joao',
    sobrenome: 'marins',
    idade: 29,

    fala(){
        console.log(`A minha idade é atual é ${this.idade}`);
    }, // sempre colocar virgula

    incrementaidade(){
        this.idade++;
    }
};

pessoal.fala();
pessoal.incrementaidade();
pessoal.fala();
pessoal.incrementaidade();
pessoal.fala();
pessoal.incrementaidade();
pessoal.fala();
pessoal.incrementaidade();