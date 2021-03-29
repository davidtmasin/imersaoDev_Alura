var listaFilmes = ["https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_UY268_CR8,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BNjQ3NWNlNmQtMTE5ZS00MDdmLTlkZjUtZTBlM2UxMGFiMTU3XkEyXkFqcGdeQXVyNjUwNzk3NDc@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg", "https://m.media-amazon.com/images/M/MV5BMzQ2ZTBhNmEtZDBmYi00ODU0LTgzZmQtNmMxM2M4NzM1ZjE4XkEyXkFqcGdeQXVyNjE5MjUyOTM@._V1_UX182_CR0,0,182,268_AL_.jpg"]
// Imagens adquiridas no site: https://www.imdb.com/

var listaNomeFilmes = ["Toy Story", "Star Wars", "Eu, robô", "Harry Potter", "Interstellar", "Jogos Mortais"]


for(i= 0; i < 1; i++){
  document.write("<figure>")
  for(j=0; j<listaFilmes.length; j++){
    document.write("<a href= " + listaFilmes[j] + " target=_blank> <img src= " + listaFilmes[j] + "> </a> <br> " + "<figcaption> "+listaNomeFilmes[j]+" </figcaption> </figure> <br> ")
  }
    
}



// for(i = 0; i < listaFilmes.length; i++){
//   for(j = 0; j < listaNomeFilmes.length; j++){
//     document.write(i + "-" + j)
//   // document.write("<img src=" + listaFilmes[j] + ">" + "<h2>" + listaNomeFilmes[i] + "</h2>")
//   }
// }
 
