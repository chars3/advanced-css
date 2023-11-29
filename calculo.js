let salario = 2000;

//TODO: fazer o mesmo calculo levando em conta o faturamento anual da empresa
//É preciso calcular quanto a empresa fatura por hora
let faturamento = 80000

let diasTrabalhadosSemana = 5;
let horasPorDia = 8;

//horas trabalhadas por mes
let horasPorMes = diasTrabalhadosSemana * horasPorDia * 4;

let ganhoPorHora = salario / horasPorMes;

//horas gastas com processos manuais por semana
let horasGastasManualSemana = 8;

//horas gastas com processos manuais por mes
let horasGastasTotais = horasGastasManualSemana * 4;

//custo mensal
let custoProcessoManual = horasGastasTotais * ganhoPorHora;

let quantidadeDeProcessos = 2;

//total com base em quantos processos manuais são realizados
let totalPorMes = quantidadeDeProcessos * custoProcessoManual;

//total gasto por ano
let totalPorAno = totalPorMes * 12;

let porcentagemEconomia = (totalPorAno/faturamento) * 100;


console.log(horasPorMes)
console.log(ganhoPorHora)
console.log(horasGastasTotais)
console.log(custoProcessoManual)
console.log(totalPorMes)
console.log(totalPorAno)
console.log(`aumento de até ${porcentagemEconomia}% de faturamento`)