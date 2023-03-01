//                01234567
let umaString = ("Um texto") // barra invertida é usada para "escape" de um caractere
console.log(umaString.indexOf('texto')) // para encontrar onde começa a palavra texto usa-se indexOF
console.log(umaString.match(/[a-z]/g)) // é um array que retorna todas letras minusculas
console.log(umaString.replace('Um', 'Outra')) // substitui o "Um" por "Outra "

let outraString = "O rato roeu a roupa do rei de Roma"
console.log(outraString.replace('r', '#')) // substitui somente o primeiro o "r" para substituir todos deve fazer conforme mostrado abaixo:

console.log(outraString.replace(/r/g, '#'))

console.log(outraString.length) // para ver o tamanho da string

console.log(outraString.slice(2, 6)) // para fatiar a string, neste caso eu quis pegar somente a palavra rato sendo "2" o inicio e o 6 o final

console.log(outraString.split(' '))

console.log(outraString.toUpperCase())
console.log(outraString.toLowerCase())
