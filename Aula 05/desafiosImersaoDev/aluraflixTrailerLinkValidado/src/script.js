// Copie o link do vídeo
// https://www.youtube.com/watch?v=Fn9adh4HWUU&list=RDFn9adh4HWUU
// <iframe width="560" height="315" src="https://www.youtube.com/embed/Fn9adh4HWUU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

function adicionarTrailerFilme(){
  
  var campoTrailerFavorito = document.querySelector('#filme')
 // console.log(campoTrailerFavorito)
  var trailerFavorito = campoTrailerFavorito.value
 // // console.log(trailerFavorito)
  // listarTrailerNaTela(trailerFavorito)
  campoTrailerFavorito.value = ""
  validarLink(trailerFavorito)
}




function validarLink(teste) {
  if (teste.includes("&ab_channel=") || teste.includes("/embed/")) {
    alert("Link inválido")
  } else if(teste.includes("watch?v=") || teste.includes(".be")) {
    listarTrailerNaTela(teste)
  } else {
    alert("Link inválido")
  }
}



function listarTrailerNaTela(trailer){
  var listaTrailers = document.querySelector('#listaTrailers')
  // console.log(listaTrailers)
  // console.log(trailer)
  if(trailer.includes("watch?v=")){
    
    var urlTrailer = trailer.replace("watch?v=", "embed/")
    // console.log(urlTrailer)
    
    var elementoFilme = "<iframe src=" + "'" + urlTrailer + "'" + " frameborder='0' allowfullscreen></iframe>"
    // console.log(elementoFilme)
//   innerHTML ->
    listaTrailers.innerHTML += elementoFilme
    
  } else if(trailer.includes(".be/")){
    
     var urlTrailer = trailer.replace(".be", "be.com/embed/")
    
     var elementoFilme = "<iframe src=" + "'" + urlTrailer + "'" + " frameborder='0' allowfullscreen></iframe>"
     // console.log(elementoFilme)
     //   innerHTML ->
     listaTrailers.innerHTML += elementoFilme
  }
  
  
}