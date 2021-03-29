var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_UY268_CR8,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
// Imagens adquiridas no site: https://www.imdb.com/

var escolhaFilme = parseInt(prompt("Qual filme você deseja ver? 1- Toy Story | 2- Star Wars | 3- Eu, robô | 4- Harry Potter e a Pedra Filosofal | 5- Interstellar | 6- Jogos Mortais | 7- Ver todos os disponíveis"))

switch(escolhaFilme){
  case 1:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 2:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 3:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 4:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 5:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 6:
    document.write("<a href=" + listaFilmes[escolhaFilme-1] +"> <img src=" + listaFilmes[escolhaFilme-1] + "></a>")
  break;
  case 7:
    for(i = 0; i < listaFilmes.length; i++){
      document.write("<a href=" + listaFilmes[i] +"> <img src=" + listaFilmes[i] + "></a>")
    }
  break;
  default:
    alert("OPÇÃO INVÁLIDA!")
}
