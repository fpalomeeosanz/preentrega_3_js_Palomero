//busqueda y preparacion de audios 
let queryCuentos = window.location.search.substring(1).split("=");
let audioEscucha = document.getElementById("audioEscucha");
//empate de busquedas y play
audioEscucha.src = "../audios/" + queryCuentos[1];
audioEscucha.play();
//para el problema del autoplay bloqueado 
function handlePlayButton() {
    if (audioEscucha.paused) {
      play();
    } else {
      audioEscucha.pause();
      playButton.audioEscucha = "";
    }
  }