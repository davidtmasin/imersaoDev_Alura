// Varíavel objeto
var paulo = {
  nome: "Paulo",
  vitorias: 2,
  empates: 5,
  derrotas: 1,
  pontos: 0
}

// console.log(paulo)
// console.log(paulo.vitorias)

var rafa = {
  nome: "Rafa",
  vitorias: 3,
  empates: 5,
  derrotas: 2,
  pontos: 0
}

// console.log(rafa)
// console.log(rafa.vitorias)
// console.log(rafa.pontos)
rafa.pontos = calculaPontos(rafa)
paulo.pontos = calculaPontos(paulo)
// console.log(rafa.pontos)

function calculaPontos(jogador){
  
//   Vitória: 3 | Empate: 1 | Derrota: 0
  var pontos = (jogador.vitorias * 3) + (jogador.empates * 1) + (jogador.derrotas * 0)
  // console.log(pontos)
  
  return pontos
  
}

var jogadores = [rafa, paulo]
exibirJogadoresNaTela(jogadores)

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

function adicionarVitoria(i){
  // console.log("clicou no botão Vitória")
  var jogador = jogadores[i]
  jogador.vitorias++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarEmpate(i){
  // console.log("clicou no botão Empate ")
  var jogador = jogadores[i]
  jogador.empates++
  jogador.pontos = calculaPontos(jogador)
  exibirJogadoresNaTela(jogadores)
}

function adicionarDerrota(i){
  // console.log("clicou no botão Derrota")
  var jogador = jogadores[i]
  jogador.derrotas++
  exibirJogadoresNaTela(jogadores)
}