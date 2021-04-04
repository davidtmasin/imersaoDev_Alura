const somTeste = new Audio();
somTeste.src="https://www.myinstants.com/media/sounds/pai-de-familia.mp3";

const somTeste2 = new Audio();
somTeste2.src="https://www.myinstants.com/media/sounds/eoq.mp3";

const somTeste3 = new Audio();
somTeste3.src="https://www.myinstants.com/media/sounds/ff7_victory_QyN4ZfS.mp3";

var cartaPaulo = {
    nome: "Seiya de Pegaso",
    imagem: "https://i.pinimg.com/originals/c2/1a/ac/c21aacd5d092bf17cfff269091f04606.jpg",
    animado:"https://thumbs.gfycat.com/WillingKnobbyIcefish-size_restricted.gif",
    audio: "https://www.myinstants.com/media/sounds/mteoro-de-pegaso.mp3",
    atributos: {
        ataque: 80,
        defesa: 60,
        magia: 90
    }
}

var cartaRafa = {
    nome: "Bulbasauro",
    imagem: "http://4.bp.blogspot.com/-ZoCqleSAYNc/UQgfMdobjUI/AAAAAAAACP0/s_iiWjmw2Ys/s1600/001Bulbasaur_Dream.png",    animado:"https://64.media.tumblr.com/bc65a4937e12ecc37e7cef885b4af85f/497e040589f04c86-db/s500x750/784fee475b0f3f6968542c2e786ffacd98c01e97.gifv",
    audio: "https://www.myinstants.com/media/sounds/bulbasaur-1.mp3",
    atributos: {
        ataque: 70,
        defesa: 65,
        magia: 85
    }
}

var cartaGui = {
    nome: "Lorde Darth Vader",
    imagem: "https://images-na.ssl-images-amazon.com/images/I/91SO-p-UYTL.jpg",    animado:"https://i.pinimg.com/originals/54/68/fa/5468fa318d3628704bea2b32fee6fce0.gif",
    audio: "https://www.myinstants.com/media/sounds/swvader02.mp3",
    atributos: {
        ataque: 88,
        defesa: 62,
        magia: 90
    }
}


var cartaMaquina
var cartaJogador
var cartas = [cartaPaulo, cartaRafa, cartaGui]


function sortearCarta() {
    const somCard = new Audio();
  
    var numeroCartaMaquina = parseInt(Math.random() * 3)
    cartaMaquina = cartas[numeroCartaMaquina]

    var numeroCartaJogador = parseInt(Math.random() * 3)
    while (numeroCartaJogador == numeroCartaMaquina) {
        numeroCartaJogador = parseInt(Math.random() * 3)
    }
    cartaJogador = cartas[numeroCartaJogador]
    console.log(cartaJogador)
  
    somCard.src = cartaJogador.audio;
    somCard.play();
 
    document.getElementById('btnSortear').disabled = true
    document.getElementById('btnJogar').disabled = false
    
    exibeCartaJogador()
}

function exibeCartaJogador(){
  var divCartaJogador = document.getElementById('carta-jogador')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  // Não foi preciso utilizar o innerHTML aqui pois foi realizada uma manipulação direta no CSS
  divCartaJogador.style.backgroundImage=`url(${cartaJogador.animado})`
  //  Aqui já irá ser preciso o uso do innerHTML pois, o JS está realizando uma manipulação no HTML
  var nome = `<p class="carta-subtitle"> ${cartaJogador.nome} </p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type='radio' name='atributo' value='" + atributo + "'>" +atributo + ": " + cartaJogador.atributos[atributo] + " pontos" + "<br>"
    }
  
   var html = "<div id='opcoes' class='carta-status'>"
  
  // divCartaJogador.innerHTML += nome
  divCartaJogador.innerHTML = moldura+nome+html+opcoesTexto+'</div>'  
}

function obtemAtributoSelecionado() {
    var radioAtributo = document.getElementsByName('atributo')
    for (var i = 0; i < radioAtributo.length; i++) {
        if (radioAtributo[i].checked) {
            return radioAtributo[i].value
        }
    }
}

function jogar() {
  var divResultado = document.getElementById("resultado")
  var atributoSelecionado = obtemAtributoSelecionado()
    
    if (cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Venceu!</p>'
        somTeste3.play();
    } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
        htmlResultado = '<p class="resultado-final">Perdeu!</p>'
        somTeste.play();
    } else {
        htmlResultado = '<p class="resultado-final">Empatou!</p>'
        somTeste2.play();
    }
  divResultado.innerHTML = htmlResultado
  exibeCartaMaquina()
}


function exibeCartaMaquina(){
  
  var divCartaMaquina = document.getElementById('carta-maquina')
  var moldura = '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent.png" style=" width: inherit; height: inherit; position: absolute;">';
  // Não foi preciso utilizar o innerHTML aqui pois foi realizada uma manipulação direta no CSS
  divCartaMaquina.style.backgroundImage=`url(${cartaMaquina.imagem})`
  //  Aqui já irá ser preciso o uso do innerHTML pois, o JS está realizando uma manipulação no HTML
  var nome = `<p class="carta-subtitle"> ${cartaMaquina.nome} </p>`
  var opcoesTexto = ""
  
  for (var atributo in cartaMaquina.atributos) {
        opcoesTexto += "<p type='text' name='atributo' value='" + atributo + "'>" + atributo + ": " + cartaMaquina.atributos[atributo] + " pontos" + "</p>"
    }
  
   var html = "<div id='opcoes' class='carta-status --spacing'>"
  
  // divCartaJogador.innerHTML += nome
  divCartaMaquina.innerHTML = moldura+nome+html+opcoesTexto+'</div>'  
  
}