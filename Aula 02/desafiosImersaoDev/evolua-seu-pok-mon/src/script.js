// var firstValue = parseFloat(prompt('Digite o primeiro valor: '))
// var secondValue = parseFloat(prompt("Digite o segundo valor: "))


// alert("Quem é esse Pokémon?")

// var escolhaOperacao = parseInt(prompt('Escolha uma opção: 1 - É o pombo do centro, 2 - É um pardal, 3 - É uma galinha, 4 - É o Pidgey'))

// if(escolhaOperacao == 4){
//   document.write("<h2>Acertô mizeravi!</h2>")
// }else if(escolhaOperacao != 4 &&  escolhaOperacao < 4 && escolhaOperacao != 0){
//   document.write("<h2>Errrôôô!!</h2>")
// }else{
//   document.write("<h2> Opção Inválida </h2>")
// }

alert("Seja bem-vindo(a) ao Centro Pokémon da Cidade de PALLET! Em que posso ajudá-lo?")

var opcao = parseInt(prompt("Digite 1 se deseja evoluir seus Pokémons ou Digite 2 para sair"))

if(opcao == 2){
  console.log("ARIGATO GOSAIMASU!")
} else{
  
  alert("Vejo que você trás consigo 05 Pokémons: 01 Pichu, 01 Pikachu, 01 Bulbassauro, 01 Squirtle e 01 Charmander. Qual você deseja evoluir?")
  
  var opcaoPokemon = parseInt(prompt("Escolha seu Pokém para evoluir: 1 - Pichu, 2 - Pikachu, 3 - Bulbassauro, 4 - Charmander"))
  
  switch(opcaoPokemon){ 
            
      case 1:
           console.log("UAAUUU!!! Seu Pichu está se transformando.... UAAAUUU!!! É um Pikachu!")
           console.log("Pika-Pika!")
    
      break;

      case 2:
          console.log("UAAUUU!!! Seu Pikachu está se transformando.... UAAAUUU!!! É um Raiochu!")
           console.log("Raiochu!")

      break;

      case 3:
          console.log("UAAUUU!!! Seu Bulbassauro está se transformando.... UAAAUUU!!! É um Ivyssauro!")
          console.log("Ivyesaur!")

      break;

      case 4:
          console.log("UAAUUU!!! Seu Squirtle está se transformando.... UAAAUUU!!! É um Wartortle!")
          console.log("Pika-Pika!")

      break;

      case 5:
          console.log("UAAUUU!!! Seu Charmander está se transformando.... UAAAUUU!!! É um Charmeleon!")
          console.log("FOGO!")

      break;

      default:  
        console.log("Opção inválida!")
  
   }
}