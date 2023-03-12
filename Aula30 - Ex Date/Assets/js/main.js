const data = new Date();

//  const diaDaSemana = [
//      "Domingo",
//      "Segunda",
//      "Terça",
//      "Quarta",
//      "Quinta",
//      "Sexta",
//      "Sábado",
//  ];

//  const mesDoAno = [
//      "Janeiro",
//      "Feveiro",  
//      "Março",
//      "Abril",
//      "Maio",
//      "Junho",
//      "Julho",
//      "Agosto",
//      "Setembro",
//      "Outubro",
//      "Novembro",
//      "Dezembro",
//  ];

//  res.innerHTML = (`${diaDaSemana[data.getDay()]}, ${data.getDate()} de ${mesDoAno[data.getMonth()]} de ${data.getFullYear()}.. Agora são: ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

//  na documentação Mdn esta de maneira abreviada
// const opcoes = {
//     dateStyle: 'full',
//     timeStyle: 'short',
// };
    
res.innerHTML = data.toLocaleString('pt-BR', {dateStyle: 'full', timeStyle:'short'});