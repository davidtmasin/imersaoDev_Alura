var firstValue = parseInt(prompt('Digite o primeiro valor: '))
var secondValue = parseInt(prompt("Digite o segundo valor: "))

var escolhaOperacao = parseInt(prompt('Escolha uma opção: 1 - para efetuar divisão, 2 - para efetuar multiplicação, 3 - para efetuar soma e 4 - para efetuar subtração'))

if(escolhaOperacao == 1){
  var finalValue = firstValue / secondValue
  document.write("<h2>" + firstValue + " / " + secondValue + " = " + finalValue + "</h2>")
}else if(escolhaOperacao == 2){
  var finalValue = firstValue * secondValue
  document.write("<h2>" + firstValue + " * " + secondValue + " = " + finalValue + "</h2>")
}else if(escolhaOperacao == 3){
  var finalValue = firstValue + secondValue
  document.write("<h2>" + firstValue + " + " + secondValue + " = " + finalValue + "</h2>")
}else if(escolhaOperacao == 4){
  var finalValue = firstValue - secondValue
  document.write("<h2>" + firstValue + " - " + secondValue + " = " + finalValue + "</h2>")
}else{
  document.write("<h2>Opção inválida!</h2>") 
}


// document.write() escreve na tela/no documento HTML
// if - se
// else if - senão se
// else - senão
// operador + além de somar, tem a função de concatenação
// 01 sinal de igual > significa atribuir (var exemploValor = 10)
// 02 sinais de igual > operação de igualdade (if(1 == 1){})
