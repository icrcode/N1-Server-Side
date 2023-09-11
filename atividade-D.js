const readline = require('readline');

// Cria uma interface para leitura e escrita no console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Hipermercado Tabajara ===");
console.log('                                    Até 5 Kg                    Acima de 5 Kg');
console.log('1.  File Duplo                  R$ 24,90 por Kg                 R$ 25,80 por Kg');
console.log('2.  Alcatra                     R$ 25,90 por Kg                 R$ 26,80 por Kg');
console.log('3.  Picanha                     R$ 36,90 por Kg                 R$ 37,80 por Kg');
console.log('Lembre-se voce podera levar apenas uma carne da promoção!');
console.log('E vale ressaltar que a carne que voce escolher nao tem um limite, pode levar a quantidade que quiser! :)\n');
console.log("Tipos de carne disponíveis na promoção:");
console.log("1 - File Duplo");
console.log("2 - Alcatra");
console.log("3 - Picanha");

// Pergunta ao usuário o tipo de carne desejado
rl.question("Escolha o tipo de carne (1/2/3): ", (tipoCarne) => {
    rl.question("Quantos quilos de carne você deseja comprar? ", (quantidade) => {
        rl.question("Você vai pagar com cartão Tabajara? (S/N): ", (respostaCartao) => {

            // Define os tipos de carne e seus preços por quilo
            const tiposCarne = ["File Duplo", "Alcatra", "Picanha"];
            const precos = [25.80, 26.80, 37.80];
            const tipoEscolhido = tiposCarne[tipoCarne - 1];
            const precoKg = precos[tipoCarne - 1];

            if (tipoEscolhido && quantidade > 0) {
                // Calcula o preço total
                const precoTotal = precoKg * quantidade;
                let desconto = 0;

                // Verifica se o cliente escolheu pagar com o cartão Tabajara
                if (respostaCartao.toLowerCase() === "s") {
                    // Calcula o desconto de 5% sobre  o preço total
                    desconto = (precoTotal * 5) / 100;
                }

                // Calcula o valor a pagar com o desconto (se aplicável)
                const valorAPagar = precoTotal - desconto;1

                //Monstra os valores
                console.log("\n=== Cupom Fiscal ===");
                console.log("Tipo de carne: " + tipoEscolhido);
                console.log("Quantidade: " + quantidade + " Kg");
                console.log("Preço total: R$" + precoTotal.toFixed(2));
                console.log("Tipo de pagamento: " + (respostaCartao.toLowerCase() === "s" ? "Cartão Tabajara" : "Outro"));
                console.log("Valor do desconto: R$" + desconto.toFixed(2));
                console.log("Valor a pagar: R$" + valorAPagar.toFixed(2));
            } else {
                console.log("Opção de carne inválida ou quantidade não informada corretamente.");
            }

            // Fecha a interface de leitura
            rl.close();
        });
    });
});