const readline = require('readline');
const { Bissexto } = require('./atividade-C-modulo'); // Importe a função do módulo

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Digite um ano: ', (ano) => {
    if (isNaN(ano)) {
        console.log('Por favor, insira um ano válido.');
        rl.close();
    } else {
        if (Bissexto(parseInt(ano))) {
            console.log(`${ano} é um ano bissexto.`);
        } else {
            console.log(`${ano} não é um ano bissexto.`);
        }
        rl.close();
    }
});