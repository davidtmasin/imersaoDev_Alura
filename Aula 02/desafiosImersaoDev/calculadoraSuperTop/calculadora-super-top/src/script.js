var firstValue = parseFloat(prompt('Digite o primeiro valor: '))
var secondValue = parseFloat(prompt("Digite o segundo valor: "))

var escolhaOperacao = parseInt(prompt('Escolha uma opção: 1 - para efetuar divisão, 2 - para efetuar multiplicação, 3 - para efetuar soma, 4 - para efetuar subtração e 5 - para exponecial'))


switch (escolhaOperacao) {
  case 1:
    var finalValue = (firstValue / secondValue).toFixed(2)
    document.write("<h2>" + firstValue + " / " + secondValue + " = " + finalValue + "</h2>")
    break;
    
  case 2:
     var finalValue = (firstValue * secondValue).toFixed(2)
     document.write("<h2>" + firstValue + " * " + secondValue + " = " + finalValue + "</h2>")
    
    break;
  
  case 3: 
    var finalValue = (firstValue + secondValue).toFixed(2)
    document.write("<h2>" + firstValue + " + " + secondValue + " = " + finalValue + "</h2>")
    
    break;
    
  case 4: 
    var finalValue = (firstValue - secondValue).toFixed(2)
    document.write("<h2>" + firstValue + " - " + secondValue + " = " + finalValue + "</h2>")
    
    break;
    
  case 5:
    var finalValue = (firstValue ** secondValue).toFixed(2)
    document.write("<h2>" + firstValue + " ^ " + secondValue + " = " + finalValue + "</h2>")
    
    break;
  
  default:
    document.write("<h2>Opção inválida!</h2>") 
}


