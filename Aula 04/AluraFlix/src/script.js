// var filmes = ["Coraline", "Noiva Cadáver", "A vida é uma festa", "A era do gelo", "Como treinar o seu dragão?", "Power Rangers", "Dragon Ball Z: A batalha do Deuses", "Alice no país das Maravilhas", "Guerra Mundial Z", "Mr. e Ms. Smith", "Ela é o cara", "Minha mãe é uma peça", "A bela e a fera", "A dama e o vagabundo", "Matrix", "007: Um novo dia para morrer", "A lenda do rei macaco", "Kung Fusão", "Kung Fu Panda"]
// var tentativas = 3

// iterar = percorrer
// usa-se "for" para percorrer um array
// for(var i = 0;i < filmes.length;i++){
//   console.log(i)
//   console.log(filmes[i])
  
// }

// Push é usado para jogar o valor entre parênteses para a variável filmes
// filmes.push("Coraline")
// filmes.push("Noiva Cadáver")

// console.log(filmes)
// console.log(filmes[0])
// console.log(filmes[1])
// console.log(filmes[2])

// console.log(filmes.length)

var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_UY268_CR8,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg", ""]
// Imagens adquiridas no site: https://www.imdb.com/

for(i = 0; i < listaFilmes.length; i++){
  document.write("<img src=" + listaFilmes[i] + ">")
}
