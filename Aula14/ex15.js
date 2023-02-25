let num1 = 180; // number
let num2 = 2.5; // number
let num3 = 39.64563463475; // number

console.log(num1.toString() + num2); // desse modo eu passo de numero para string temporariamente

// num1 = num1.toString() // deste modo eu passo de numero para string definitivamente
console.log(typeof num1);

console.log(num1.toString(2)); // representação binaria adicionando o 2 no parenteses

console.log(num3.toFixed(2)) // para arrendondar numeros com as casas decimais, neste caso "2" que foi colocado no parenteses

console.log(Number.isInteger(num3)) // retorna com verdadeiro ou falso se o numero é inteiro ou nao 

let temp = num1 *'ok';
console.log(Number.isNaN(temp)); // retorna com verdadeiro ou falso se a conta é um NaN, neste caso é "true" pois é um NaN

//______________________________//

let num4 = 0.7; // number
let num5 = 0.1; // number

num4 += num5; // += significa: num4 = num4 + num5

//esses numeros sao muito quebrados entao deve arredondar eles, e tem duas maneiras: usando Number ou ParseFloat

num4 = Number(num4.toFixed(2)) // ou
num4 = ParseFloat(num4.toFixed(2))

console.log(num4);
console.log(Number.isInteger(num4));











