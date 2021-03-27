var secretNumber = parseInt(Math.random() * (9 - 2 + 1) + 2)

var numTentativas = 3

while(numTentativas > 0){
  
  var chute = parseInt(prompt("Digite um número entre 1 e 10"))
  
  if(secretNumber == chute){
    document.write("<h2>Acertô, mizeravi!!</h2>")
    document.write("<h3>100 pts</h3>")
    numTentativas = 0
    
  }
  else if(chute > secretNumber){
  
    numTentativas--
    if(numTentativas != 0){
      alert("O número secreto é menor. Você tem " + numTentativas + " de 3 tentativas!")
    } else{
      alert("Que pena, suas tentativas esgotaram... :(")
    }
  }
  else if(chute < secretNumber){
    
    numTentativas--
    
    if(numTentativas != 0){
       alert("O número secreto é maior. Você tem " + numTentativas + " de 3 tentativas!")
    } else{
       alert("Que pena, suas tentativas esgotaram... :(")
    }
       
  } 
  
}

if(chute != secretNumber){
  document.write("<h2>O número secreto era " + secretNumber + ".</h2>")
  document.write("<h3>:( 0pt</h3>")
}