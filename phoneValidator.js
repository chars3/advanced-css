// document.addEventListener('DOMContentLoaded', () => {
//     let form = document.getElementById('form-phone');

//     form.addEventListener('submit', (e) => {
//         e.preventDefault();
//         let phone = document.getElementById('phone').value;


//         if (validarTelefone(phone)) {
//             console.log('Número de telefone válido:', phone);
//         } else {
//             console.log('Número de telefone inválido', phone);
//         }
//     });
// });

// document.addEventListener('DOMContentLoaded', () => {
//     let phoneInput = document.getElementById('phone');

//     phoneInput.addEventListener('input', () => {
//         let phone = phoneInput.value;

//         if (validarTelefone(phone)) {
//             console.log('Número de telefone válido:', phone);
//         } else {
//             console.log('Número de telefone inválido', phone);
//         }
//     });
// });

document.addEventListener('DOMContentLoaded', () => {
    let phoneInput = document.getElementById('phone');
    let spanError = document.querySelector('.span-error')
    console.log(spanError)

    phoneInput.addEventListener('input', handlePhone); // Aplica a máscara
    phoneInput.addEventListener('blur', validatePhone); // Valida quando o campo perde o foco

    function validatePhone() {
        let phone = phoneInput.value;

        if (validarTelefone(phone)) {
            console.log('Número de telefone válido:', phone);
        } else {
            phoneInput.style.border = '1px solid orangered';
            spanError.style.background = 'orangered';
            spanError.innerHTML = 'Telefone inválido';
            console.log('Número de telefone inválido', phone);
        }
    }
});

function validarTelefone(phone) {
    const regex = /^\(?([1-9]{2})\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;

    // Extrai apenas os números do telefone para verificar se são todos iguais
    const digits = phone.replace(/[^\d]/g, '').slice(2); // Remove tudo que não é dígito e o código de área

    // Verifica se todos os dígitos, exceto o código de área, são iguais
    const sameDigits = /^(\d)\1+$/.test(digits);

    return regex.test(phone) && !sameDigits;
}

module.exports = validarTelefone;

