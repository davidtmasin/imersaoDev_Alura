// Varíavel objeto
var player1 = {
  nome: "",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

var player2 = {
  nome: "",
  vitorias: 0,
  empates: 0,
  derrotas: 0,
  pontos: 0
}

// Solicitação dos nomes do jogadores
player1.nome = prompt("Qual o nome do primeiro jogador")
player2.nome = prompt("Qual o nome do segundo jogador")

// Chamada à função calculaPontos
player1.pontos = calculaPontos(player1)
player2.pontos = calculaPontos(player2)

// Função para calcular os pontos do jogadores
// Vitória vale 03 pontos | Empate vale 01 ponto | Derrota não altera os pontos
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + (jogador.empates * 1) + (jogador.derrotas * 0)
  return pontos
}

// Variável que recebe um array de objetos
var jogadores = [player1, player2]

// Chamada à função exibirJogadoresNaTela
exibirJogadoresNaTela(jogadores)

// Função para apresentar os valores dos jogadores em tela
function exibirJogadoresNaTela(jogadores){
  var html = ""
  for(var i = 0; i < jogadores.length; i++){
    html += "<tr><td>" + jogadores[i].nome + "</td>"
    html += "<td>" + jogadores[i].vitorias + "</td>"
    html += "<td>" + jogadores[i].empates + "</td>"
    html += "<td>" + jogadores[i].derrotas + "</td>"
    html += "<td>" + jogadores[i].pontos + "</td>"
    html += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
    html += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
    html += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td></tr>"
  }
  var tabelaJogadores = document.getElementById("tabelaJogadores")
  tabelaJogadores.innerHTML = html
}

// Função que faz o botão Vitória funcionar
// Aumenta o valor de vitórias em +1 | Aciona a função que faz a matemática do pontos 
// Ao final, chama a função que exibe este valores em tela
function adicionarVitoria(i){
   var jogador = jogadores[i]
   if(jogador == player1){
     jogador.vitorias++
     jogador.pontos = calculaPontos(jogador)
     player2.derrotas++
     exibirJogadoresNaTela(jogadores)
   } else if(jogador == player2){
     jogador.vitorias++
     jogador.pontos = calculaPontos(jogador)
     player1.derrotas++
     exibirJogadoresNaTela(jogadores)
   }
   
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

// Função que faz o botão Derrota funcionar[
// Quem recebe a derrota, automaticamente o outro jogador leva a vitória
// Os pontos são calculados ao final
function adicionarDerrota(i){
  var jogador = jogadores[i]
  if(jogador == player1){
    jogador.derrotas++
    player2.vitorias++
    player2.pontos = calculaPontos(player2)
    exibirJogadoresNaTela(jogadores)

  } else{
    jogador.derrotas++
    player1.vitorias++
    player1.pontos = calculaPontos(player1)
    exibirJogadoresNaTela(jogadores)
  }
}