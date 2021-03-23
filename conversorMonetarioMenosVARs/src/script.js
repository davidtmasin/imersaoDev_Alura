var valorDolar = parseFloat(prompt("Informe o valor do produto em U$ que você deseja converter, exemplo: 299.99"))

// Matemática da conversão do valor do dólar U$ em R$
var valorBRL = (valorDolar * 5.51).toFixed(2)


alert("U$" + valorDolar + " equivale a " + "R$" + valorBRL)
