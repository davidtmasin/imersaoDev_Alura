var tempCelsius = parseFloat(prompt("Informe a temperatura em Celsius a converter."))

//Fórmula para conversão de °C para °F
var conversaoCelFahr = ((9*tempCelsius)/5) + 32

// Forçando o resultado a ser apresentado em até 02 casas decimais
alert(conversaoCelFahr.toFixed(2) + "°F")

var tempFahrenheit = parseFloat(prompt("Informe a temperatura em Fahrenheit a converter."))

//Fórmula para conversão de °F para °C
var conversaoFahrCel = (5*(tempFahrenheit - 32))/9

// Forçando o resultado a ser apresentado em até 02 casas decimais
alert(conversaoFahrCel.toFixed(2) + "°C")