// Função para gerar uma senha aleatória
function generateRandomPassword(length, includeNumbers) {
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numbers = '0123456789';
    let charset = letters;

    // Estrutura condicional if para incluir números
    if (includeNumbers) {
        charset += numbers;
    }

    let password = '';

    // Estrutura condicional switch para ajustar o comprimento da senha
    switch (true) {
        case (length < 8):
            alert('Comprimento muito curto. Ajustando para 8 caracteres.');
            length = 8; // Define comprimento mínimo
            break;
        case (length > 128):
            alert('Comprimento muito longo. Ajustando para 128 caracteres.');
            length = 128; // Define comprimento máximo
            break;
    }

    // Estrutura de repetição do-while para gerar uma senha válida
    let isPasswordValid = false;
    do {
        password = '';
        // Estrutura de repetição for para construir a senha
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        // Valida a senha gerada (para simplicidade, apenas gera uma senha e assume que está OK)
        isPasswordValid = password.length === length;
    } while (!isPasswordValid);

    return password;
}

// Solicita ao usuário o comprimento da senha e se deve incluir números
const lengthInput = prompt('Digite o comprimento desejado para a senha (mínimo 8, máximo 128):');
const includeNumbersInput = confirm('Deseja incluir números na senha?');

// Converte a entrada do comprimento para um número
const length = parseInt(lengthInput);

// Gera e exibe a senha
const generatedPassword = generateRandomPassword(length, includeNumbersInput);
alert('Senha Gerada: ' + generatedPassword);