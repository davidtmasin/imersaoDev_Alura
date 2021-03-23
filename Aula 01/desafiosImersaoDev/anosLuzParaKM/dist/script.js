// var valorEuro = parseFloat(prompt("Informe o valor do produto em U$ que você deseja converter, exemplo: €299.99"))

// Matemática da conversão do valor do dólar U$ em R$
// Incluso com a formatação de fixar em até 02 casas decimais
// var valorBRL = (valorEuro * 6.51).toFixed(2)


// alert("€" + valorEuro + " equivale a " + "R$" + valorBRL)
// Math.pow >> função para potência
// Podemos usar o operador **
// Vamos representar com o "e"
const ANOS_LUZ_KM = 9.461e+12

var anoLuzEmKM = parseFloat(prompt("Informe a quantidade de anos-luz, caro viajante"))

alert("O valor de " + anoLuzEmKM + " ano-luz(anos-luz) equivale a " + ANOS_LUZ_KM * anoLuzEmKM + " km").toFixed(2)