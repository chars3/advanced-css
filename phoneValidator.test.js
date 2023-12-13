const validarTelefone = require('./phoneValidator');

test('rejeita número de telefone inválido', () => {
    expect(validarTelefone('(11) 12345-6789')).toBe(false);
});

test('rejeita número de telefone sem código de área', () => {
    expect(validarTelefone('(99) 912-6552')).toBe(false);
});

test('rejeita número de telefone sem código de área e sem caracteres', () => {
    expect(validarTelefone('999126356')).toBe(false);
});

test('rejeita número de telefone com todos os dígitos iguais', () => {
    expect(validarTelefone('(11) 99999-9999')).toBe(false);
});

test('rejeita número de celular com menos de 9 digitos', () => {
    expect(validarTelefone('(11) 99876543')).toBe(false);
});

test('rejeita número de celular com hífen e com menos de 9 digitos', () => {
    expect(validarTelefone('(11) 9987-6543')).toBe(false);
});

test('rejeita número de celular com mais de 9 digitos', () => {
    expect(validarTelefone('(11) 99876-54340')).toBe(false);
});

test('rejeita número de ctelefone fixo com mais de 8 dígitos', () => {
    expect(validarTelefone('(11) 3434-12344')).toBe(false);
});


// Testes para números de telefone válidos
test('valida número de telefone celular com hífen e código de área', () => {
    expect(validarTelefone('(11) 99876-5432')).toBe(true);
});

test('valida número de telefone fixo sem hífen e com código de área', () => {
    expect(validarTelefone('(21) 34341234')).toBe(true);
});

test('valida número de telefone celular sem hífen e sem parênteses no código de área', () => {
    expect(validarTelefone('11 998765432')).toBe(true);
});

test('valida número de telefone fixo com hífen e sem parênteses no código de área', () => {
    expect(validarTelefone('21 3434-1234')).toBe(true);
});

test('valida número de telefone celular com 9 no início', () => {
    expect(validarTelefone('(15) 91234-5678')).toBe(true);
});