/*
escreva uma função que recebe um numero e retorna o seguinte:
numero divisivel por 3 = Fiz 
numero divisivel por 5 = Buzz
numero divisivel por 3 e 5 = FizzBuzz
numero NAO divisivel por 3 e 5 = retorna o proprio numero
checar se o numero é realmente um numero = retorna o proprio numero.. ou seja se for uma string retorna uma string
use a função de 0 a 100
*/

function fizzBuzz(x){
    if (typeof x !== 'number') return x;
    
    if (x%3==0 && x%5==0){
        return "FizzBuzz"
    }else if (x%5==0){
        return "Buzz"
    }else if(x%3==0){
        return "Fizz"
    }else {
        return x
    }
    
}

console.log('string', fizzBuzz('a'))
for (let i = 0; i <= 100; i++){
console.log(i, fizzBuzz(i))
}