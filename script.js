function conversor() {
    // Tabela de taxas de câmbio
    const taxaCambio = {
        USD: 5.50,  // 1 dólar = 5.50 reais
        EUR: 6.00,  // 1 euro = 6.00 reais
        KRW: 0.0039 // 1 won = 0.0039 reais
    };

    // Pergunta ao usuário qual moeda deseja converter
    let moeda = prompt("Qual moeda deseja converter para reais? (USD, EUR, KRW)");

    // Verifica se o usuário cancelou ou deixou o campo vazio
    if (!moeda) {
        alert("Operação cancelada ou moeda inválida!");
        return;
    }

    moeda = moeda.toUpperCase(); // Converter para maiúsculas

    // Verifica se a moeda é válida
    if (!taxaCambio[moeda]) {
        alert("Moeda inválida! Escolha entre: USD, EUR ou KRW.");
        return;
    }

    // Pergunta o valor a ser convertido
    let valor = prompt(`Digite o valor em ${moeda}:`);

    // Verifica se o usuário cancelou ou não digitou nada
    if (!valor) {
        alert("Operação cancelada ou valor inválido!");
        return;
    }

    valor = parseFloat(valor.replace(",", ".")); // Substitui vírgula por ponto antes da conversão

    // Verifica se o valor inserido é um número válido
    if (isNaN(valor) || valor <= 0) {
        alert("Por favor, insira um valor numérico válido!");
        return;
    }

    // Realiza a conversão
    let valorConvertido = valor * taxaCambio[moeda];

    // Formata os números para o padrão brasileiro (1.234,56)
    let valorFormatado = valor.toLocaleString("pt-BR", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
    let valorConvertidoFormatado = valorConvertido.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

    // Exibe o resultado
    alert(`💰 O valor de ${valorFormatado} ${moeda} equivale a ${valorConvertidoFormatado}.`);
}
