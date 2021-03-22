var valorDolarTexto = prompt("Informe o valor do produto em U$ que você deseja converter, exemplo: 299.99")

// parseInt não funcionará legal aqui pois, os valores a serem gerados aqui são do tipo float e não do tipo inteiro, logo, use parseFloat
var valorDolarNumero = parseFloat(valorDolarTexto)

// Matemática da conversão do valor do dólar U$ em R$
var valorBRL = valorDolarNumero * 5.51

//Função para fixar duas casas decimais
var valorBRLDuasCasas = valorBRL.toFixed(2)

alert("U$" + valorDolarNumero + " equivale a " + "R$" + valorBRLDuasCasas)
