//Escreva uma função que receve dois numero e retorne o maior deles

function maxAndMin(x, y){
    if (x>y){
        return x;
    }else{
        return y;
    }

}

console.log(maxAndMin(10, 2));

console.log('__melhorando a função__')

function max(n1, n2){
    return n1 > n2 ? n1 : n2
}

console.log(max(13, 20));

console.log('__melhorando a função com arrow function__')

const max2 = (n3, n4) => {
    return n3 > n4 ? n3 : n4
}

console.log(max2(134, 520));

console.log('__melhorando a função com arrow function reduzido__')

const max3 = (n5, n6) => n5 > n6 ? n5 : n6; // isso foi possivel pois se trata de uma função com uma unica linha.. como pode ser observado na linha 25
console.log(max3(43, 87))
