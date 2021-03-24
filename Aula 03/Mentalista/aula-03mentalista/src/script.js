// alert - document.write - console.log
// Mostram informações ao usuário de uma forma de diferente.

// Math.random sempre irá gerar números entre 0 e 1, nunca 1 ou 0. Exemplo: 0.0431232
// Estamos multiplicando o resultado gerado por 10, para poder andar uma casa decimal para a direita do número.
// Por fim, usamos a função parseInt para usar apenas a parte inteira do número.
var secretNumber = parseInt(Math.random() * 10)
var numTentativas = 3

while(numTentativas > 0){
  
  var chute = parseInt(prompt("Digite um número entre 0 e 10"))
  
  if(secretNumber == chute){
    alert("Acertô, mizeravi!!")
    break
  }
  else if(chute > secretNumber){
    alert("O número secreto é menor.")
    numTentativas--
  }
  else if(chute < secretNumber){
    alert("O número secreto é maior.")
    numTentativas--
  }  
}

if(chute != secretNumber){
  alert("Suas tentativas acabaram. O número secreto era " + secretNumber)
}