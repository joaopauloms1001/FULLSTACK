const data = new Date('2023-03-06 20:24:59')
console.log(data.toString())
//_____________________________//
console.log('Dia', data.getDate())
console.log('Mes', data.getMonth())
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Minutos', data.getMinutes())
console.log('Segundos', data.getSeconds())
console.log('Milisegundos', data.getMilliseconds())
console.log('Dia da semana', data.getDay())
console.log(data.toDateString());
