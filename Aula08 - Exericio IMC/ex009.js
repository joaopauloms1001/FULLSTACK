let nome = "João"
let sobrenome = "Santos"
let  nascimento = 1994
let data = new Date()
let ano = data.getFullYear()
let idade = ano-nascimento
let peso = 83
let altura = 1.78
let altura2= Math.pow(1.78 , 2);
let imc = peso/altura2
console.log(nome, sobrenome, "é um programador de",idade, "anos, nascido em",nascimento, "portanto, com idade de:",idade);
console.log("sua altura é de",altura, "m, seu peso é de", peso,"kg, portanto seu IMC é de", imc)
console.log("_________________________________________")
console.log(`${nome} ${sobrenome} é um programador de idade ${idade} anos nasciem em ${nascimento} portanto com idade de ${idade}`) // utilizando place houder
console.log(`sua altura é de ${altura}m, seu peso é de ${peso}kg, portanto seu IMC é de ${imc} `)
console.log("_________________________________________")
console.log(nome + " " + sobrenome) // utilizando +



 