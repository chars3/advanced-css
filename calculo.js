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


// console.log(horasPorMes)
// console.log(ganhoPorHora)
// console.log(horasGastasTotais)
// console.log(custoProcessoManual)
// console.log(totalPorMes)
// console.log(totalPorAno)
// console.log(`aumento de até ${porcentagemEconomia}% de faturamento`)

function gerarUTM() {
    var copyButton = document.getElementById('copyButton');
    copyButton.style.display = 'block';

    var urlBase = document.getElementById('urlBase').value;
    var source = document.getElementById('source').value;
    var medium = document.getElementById('medium').value;
    var campaign = document.getElementById('campaign').value;

    var urlGerada = urlBase;
    urlGerada += (urlBase.includes('?') ? '&' : '?') + 'fiqon_source=' + encodeURIComponent(source);
    urlGerada += '&fiqon_medium=' + encodeURIComponent(medium);
    urlGerada += '&fiqon_campaign=' + encodeURIComponent(campaign);

    document.getElementById('urlGerada').value = urlGerada;
}

document.getElementById('copyButton').addEventListener('click', function() {
    var textarea = document.getElementById('urlGerada');
    navigator.clipboard.writeText(textarea.value)
        .then(() => {
            // Opção: Mostrar uma mensagem indicando que o texto foi copiado
            console.log('copiado')
        })
        .catch(err => {
            console.log('Algo deu errado', err);
        });
});

document.addEventListener('DOMContentLoaded', () => {
    let form = document.getElementById('form-phone');
    

    form.addEventListener('submit', (e) => {
        let phone = document.getElementById('phone').value;
        e.preventDefault();
        console.log('Formulário enviado');
        console.log(phone.value);
    });
});



