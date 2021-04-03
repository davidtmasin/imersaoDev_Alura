// Variável objeto
var player = {
  nome: "",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

// Variável que recebe um array de objetos
var jogadores = []

// Função para calcular os pontos do jogadores
// Vitória vale 03 pontos | Empate vale 01 ponto | Derrota não altera os pontos
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + (jogador.empates * 1) + (jogador.derrotas * 0)
  return pontos
}

function addPlayer(jogadores) {
  var jogadorNovo = Object.create(player)
 
  jogadorNovo.nome = document.querySelector("input").value
  jogadorNovo.vitorias = 0
  jogadorNovo.empates = 0
  jogadorNovo.derrotas= 0
  jogadorNovo.pontos = 0
  jogadores.push(jogadorNovo)
  
  // Chamada à função exibirJogadoresNaTela
  exibirJogadoresNaTela(jogadores)
  
  document.querySelector("input").value = ""
}


// Função para apresentar os valores dos jogadores em tela
function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button>"
    html += "<button onClick='adicionarEmpate(" + i + ")'>Empate</button>"
    html += "<button onClick='adicionarDerrota(" + i + ")'>Derrota</button>"
    html += "<button onClick='zerarPontos(" + i + ")'>Zerar</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

// Função que faz o botão Vitória funcionar
// Aumenta o valor de vitórias em +1 | Aciona a função que faz a matemática do pontos 
// Ao final, chama a função que exibe este valores em tela
function adicionarVitoria(i){
   var jogador = jogadores[i];
   jogador.vitorias++;
   jogador.pontos = calculaPontos(jogador);
   exibirJogadoresNaTela(jogadores)   
}

// Função que faz o botão Empate funcionar
// Aumenta o valor de empates em +1 | Aciona a função que faz a matemática do pontos 
// Ao final, chama a função que exibe este valores em tela
// Além disso, ao acionar qualquer um dos botões de empate, já é acrescentado +1 em todos os jogadores
function adicionarEmpate(i){
  for(var i = 0; i < jogadores.length; i++){
     jogadores[i].empates++
     jogadores[i].pontos = calculaPontos(jogadores[i])
     exibirJogadoresNaTela(jogadores)      
  }
}

// Função que faz o botão Derrota funcionar
function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}

function zerarPontos(i){
  var jogador = jogadores[i];
  jogador.vitorias = 0;
  jogador.empates = 0;
  jogador.derrotas = 0;
  jogador.pontos = 0;
  exibirJogadoresNaTela(jogadores)
}
