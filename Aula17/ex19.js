function soma(x, y){ 
    const resultado = x+y;
    return resultado;
};
// eu nao consigo acessar e alterar nada que esta dentro da função

console.log(soma('joao', ' santos')); // posso fazer assim, ou:

/*
const resultado = soma('joao', ' santos');
console.log(resultado)
*/

//______________________________//
// se eu nao mandar valores ou mandar apenas, desde que seja informado ele executa a função normalmente

function matteo(x=1, y=2){ 
    const resultado = x+y;
    return resultado;
};
console.log(matteo()); // 1° possibilidade
console.log(matteo(8)); // 2° possibilidade, substituindo apenas um valor 
console.log(matteo(10, 10)); // 3° possibilidade, substituindo os 2 valores

//__________________________//
// posso criar funções com variaveis
const raiz =  function (n){
    return n **0.5; // importante nao colocar o sinal de igual

}

console.log(raiz(9));
console.log(raiz(16));
console.log(raiz(81));

//_____________________________//
// funções arraw function, com isso eu posso eliminar as chaves, ponto e virgula e e a palavra return

const raiz2 = (n1) => {
    return n1 **0.5;
}; 
/* entao isso acima se reduz a isso:
const raiz2 = (n1) => n1 ** 0.5*/

console.log(raiz2(25));
console.log(raiz2(1024));
console.log(raiz2(100));





