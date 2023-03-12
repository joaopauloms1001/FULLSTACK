// let tem escopo de bloco {..bloco}, bloco é tudo aquilo que tem chaves
// var tem somente escopo de função

const verdadeira = true;
 let nome = 'joao';
 var nome2 = 'santos';

 if (verdadeira) {
    let nome = 'marins';

    if (verdadeira){
        let nome = 'camisa 10'
        console.log(nome, nome2)
    }
    
    
    //console.log(nome, nome2);
 }

 // o escopo da função é projegido.. 

//ex1: nivel superior
const time1 = 'santos';
 function teste1(){
    console.log(time1);
}
teste1();

//ex2: mesmo contexto
function teste2(){
    const time2 = 'francana'
    console.log(time2);
}
teste2();

// ATENÇÃO: se a variavel for DECLARADA em um contexto diferente de onde estou chamando ela.. 

//ex3: 
function teste3(){
    const time3 = 'real'
}
console.log(time3)
teste3();


