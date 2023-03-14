const diaDaSemana = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
   
  const data = new Date();
   
  console.log(`Hoje é ${diaDaSemana[data.getDay()]}`); //  o comando getDay vai enviar um numero para dentro do array e este vai retornar uma string conforme este numero me indican quaml é o dia da semana