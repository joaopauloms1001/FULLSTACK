// se eu quiser checar mais de uma condição eu devo fazer mais de um IF

const n = 10

if (1===1){ // verdadeiro
    console.log('baah, legal')
}

if (n >=0 && n <=5){
    console.log('o numero esta entre 0 e 5')
}else if (n >=6 && n <=10) {
    console.log('o numero esta entre 6 e 10')
}else {
    console.log('numero invalido')
}