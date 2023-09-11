// Importando o módulo readline para ler entradas do usuário
const readline = require('readline');

// Criando uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Solicitação de notas
rl.question('Digite a nota do Exame I: ', (notaI) => {
    rl.question('Digite a nota do Exame II: ', (notaII) => {
        rl.question('Digite a nota do Exame III: ', (notaIII) => {
            rl.question('Digite a nota do Exame IV: ', (notaIV) => {
                rl.question('Digite a nota do Exame V: ', (notaV) => {

                    //Converto as notas
                    const notas = [parseFloat(notaI), parseFloat(notaII), parseFloat(notaIII), parseFloat(notaIV), parseFloat(notaV)];

                    //Médias
                    const media = notas.reduce((acc, nota) => acc + nota, 0) / notas.length;

                    //E que comece as verificações
                    if (media >= 70) {
                        if (notas.every(nota => nota >= 70)) {
                            console.log('Classificação: A - Passou em todos os exames');
                        } else if (notas[0] >= 70 && notas[1] >= 70 && notas[3] >= 70 && (notas[2] < 70 || notas[4] < 70)) {
                            console.log('Classificação: B - Passou em I, II e IV, mas não em III ou V');
                        } else if ((notas[0] >= 70 && notas[1] >= 70) || (notas[2] >= 70 && notas[3] >= 70) && notas[4] < 70) {
                            console.log('Classificação: C - Passou em I e II, III ou IV, mas não em V');
                        }
                    } else {
                        console.log('Classificação: Reprovado');
                    }

                    rl.close();
                });
            });
        });
    });
});
