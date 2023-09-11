// Importando o módulo readline para ler entradas do usuário
const readline = require('readline');

// Criando uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Arrays para armazenar as informações dos leitores
const idades = [];
const cidades = [];
const opinioes = [];

// Função para receber informações de um leitor
function receberInformacoesLeitor() {
    rl.question('\n Informe a idade do leitor:', (idade) => {
        rl.question('Informe a cidade do leitor: ', (cidade) => {
            rl.question('Informe a opinião do leitor (3- Otimo, 2- Bom, 1- Regular): ', (opiniao) => {
                // Converte a idade e a opinião para números inteiros
                idade = parseInt(idade);
                opiniao = parseInt(opiniao);

                // Valida se a opinião é válida (1, 2 ou 3)
                if (opiniao !== 1 && opiniao !== 2 && opiniao !== 3) {
                    console.log('Opinião inválida. Use 1 para regular, 2 para bom ou 3 para ótimo.');
                    receberInformacoesLeitor();
                    return;
                }

                // Armazena as informações do leitor nos arrays
                idades.push(idade);
                cidades.push(cidade);
                opinioes.push(opiniao);

                // Pergunta se deseja adicionar mais leitores
                rl.question('Deseja adicionar outro leitor? (S para Sim, qualquer outra tecla para terminar): ', (resposta) => {
                    if (resposta.toUpperCase() === 'S') {
                        receberInformacoesLeitor(); // Continua adicionando leitores
                    } else {
                        // Calcula e exibe os resultados
                        calcularEExibirResultados();
                        rl.close();
                    }
                });
            });
        });
    });
}

// Função para calcular e exibir os resultados
function calcularEExibirResultados() {
    //Declaração das variaveis
    const totalLeitores = idades.length;

    /*

    A propriedade length de um array retorna o número de elementos presentes no array.
    No seu caso, totalLeitores irá conter o número de idades que foram armazenadas no array idades.
    Isso é útil em muitos casos, especialmente quando você precisa iterar (percorrer) um array.

    */

    let somaIdadesOtimo = 0;
    let totalRegular = 0;
    let totalBom = 0;
    const cidadesContagem = {};

    for (let i = 0; i < totalLeitores; i++) {
        if (opinioes[i] === 3) {
            somaIdadesOtimo += idades[i];
        } else if (opinioes[i] === 1) {
            totalRegular++;
        } else if (opinioes[i] === 2) {
            totalBom++;
        }

        // Conta a quantidade de leitores por cidade
        if (cidadesContagem[cidades[i]]) {
            cidadesContagem[cidades[i]]++;
        } else {
            cidadesContagem[cidades[i]] = 1;
        }
    }

    const mediaIdadesOtimo = somaIdadesOtimo / totalLeitores;

    const porcentagemBom = (totalBom / totalLeitores) * 100;

    //Monstrar o Resultado
    console.log(`Média das idades dos leitores que responderam ótimo: ${mediaIdadesOtimo.toFixed(2)}`);
    console.log(`Quantidade de leitores que responderam regular: ${totalRegular}`);
    console.log(`Porcentagem de leitores que responderam bom entre todos os leitores: ${porcentagemBom.toFixed(2)}%`);
    console.log('Porcentagem de leitores para cada cidade:');
    for (const cidade in cidadesContagem) {
        const porcentagemCidade = (cidadesContagem[cidade] / totalLeitores) * 100;
        console.log(`${cidade}: ${porcentagemCidade.toFixed(2)}%`);
    }
}

// Inicia o processo de receber informações dos leitores
receberInformacoesLeitor();