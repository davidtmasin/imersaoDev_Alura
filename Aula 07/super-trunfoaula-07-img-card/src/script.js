// Declaração de objetos
var cardPaulo = {
  charName: "Seiya de Pégasus",
  attributes:{
    attack: 80,
    defense: 60,
    magic: 90
  },
  image: "https://i.pinimg.com/originals/82/ac/49/82ac49d9d50ed206f5b4481cbd19f80c.jpg"
}

var cardRafa = {
  charName: "Bulbasauro",
  attributes:{
    attack: 70,
    defense: 65,
    magic: 85
  },
   image:"https://d1w8cc2yygc27j.cloudfront.net/-4254313654709834313/4635922672543250378.jpg"
}

var cardGui = {
  charName: "Lorde Darth Vader",
  attributes:{
    attack: 88,
    defense: 62,
    magic: 90
  },
  image:"https://static.wikia.nocookie.net/star-wars-destiny-card-game/images/3/3b/Swd03_darth-vader.png/revision/latest?cb=20181008021819"
}

var cardMachine;
var cardPlayer;
// Lista de objetos
var cartas = [cardPaulo, cardRafa, cardGui]
//               0          1        2


function sortearCarta(){
  var imgCard = document.getElementById('carta-jogador')
  var exibirImagemCardPlayer = ""
  
  var numberCardMachine =  parseInt(Math.random() * 3)
  
  cardMachine = cartas[numberCardMachine]
  // console.log(cardMachine)
  
  var numberCardPlayer = parseInt(Math.random() * 3)
  while(numberCardMachine == numberCardPlayer){
    numberCardPlayer = parseInt(Math.random() * 3)
  }
  cardPlayer = cartas[numberCardPlayer]
  console.log(cardPlayer)
  
  document.getElementById('btnSortear').disabled = true
  document.getElementById('btnJogar').disabled = false
  
  
  exibirImagemCardPlayer += "<img id='card-player' src='" + cartas[numberCardPlayer].image +"'/>"
  imgCard.innerHTML = exibirImagemCardPlayer
  
  exibirOpcoes()
}


function exibirOpcoes(){
  var opcoes = document.getElementById('opcoes')
  var opcoesTexto = ""
  for (var attribute in cardPlayer.attributes){
    // console.log(attribute)
    opcoesTexto += "<input type='radio' name='attribute' value='" + attribute + "'>" + attribute
  }
  opcoes.innerHTML = opcoesTexto
  
  
}

function obterAtributoSelecionado(){
  var radioAtributo = document.getElementsByName('attribute')
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked){
      return radioAtributo[i].value
    }
  }
}


function jogar(){
 var atributoSelecionado = obterAtributoSelecionado()
 
 if((cardPlayer.attributes[atributoSelecionado] > cardMachine.attributes[atributoSelecionado])){
   alert("Você venceu seu oponente!")
   
 } else if (cardPlayer.attributes[atributoSelecionado] < cardMachine.attributes[atributoSelecionado]){
   alert("Seu oponente derrotou você!")
   
 } else {
   alert("Empate!")
 }
  console.log(cardMachine)
}