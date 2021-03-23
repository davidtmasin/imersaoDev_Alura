var valorEuro = parseFloat(prompt("Informe o valor do produto em U$ que você deseja converter, exemplo: €299.99"))

// Matemática da conversão do valor do dólar U$ em R$
// Incluso com a formatação de fixar em até 02 casas decimais
var valorBRL = (valorEuro * 6.51).toFixed(2)


alert("€" + valorEuro + " equivale a " + "R$" + valorBRL)