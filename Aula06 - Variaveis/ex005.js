//IMPORTANTE: sempre que quiser fazer uma string DEVE usaar ASPAS.. ja para escrever uma variavel NAO USA-SE aspas

let nome = "João"
let nome2 = "Maria"
let nome3 = "Matteo"

console.log("Em 2013", nome, "conheceu a", nome2)
console.log("Em 2019", nome, "casou com a", nome2)
console.log("Em 2020", nome, "nasceu o", nome3)

//por se tratar de uma variavel, eu POSSO alterar o valor dela conforme necessario, isto pq o motor le antes de executar a variavel 


let nome4;
nome4 = "Joana"
console.log(nome4);
nome4 = "Otto"
console.log(nome4);

/*
-nao pode nomear uma variavel começando com um numero
-nao pode contar traços e nem espaços
-nao pode usar palavras reservadas tipo: if, console, while e etc
-a variavel tem que ter siginificado
-pode utilizar camelCase que é: primeira palavra com letra minuscula e as seguintes com letra maiuscula tipo nomeCliente
-AS variaveis são Case-Sensitive, isto é, a letra maiuscula e minuscula faz diferença
-nao use VAR, use LET
*/