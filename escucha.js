//busqueda y preparacion de audios 
let queryCuentos = window.location.search.substring(1).split("=");
let audioEscucha = document.getElementById("audioEscucha");

//empate de busquedas y play
audioEscucha.src = "../audios/" + queryCuentos[1];
audioEscucha.play();

//para el problema del autoplay bloqueado ayuda de documentacion
audioEscucha.addEventListener("play", function() {
  function handlePlayButton() {
  if (audioEscucha.paused) {
      audioEscucha.play();
  } else {
      audioEscucha.pause();
  }
}
});

// Muestra una alerta si ocurre un error de carga
audioEscucha.addEventListener('error', function () {
  swal({
    title: "UPS!! Estamos trabajando para ti!!!",
    text: "Este audiocuento está en proceso, pero puedes escuchar otros en JUEGA.",
    icon: "warning",
    buttons: true,
    dangerMode: true,
})
.then((play) => {
    if (play) {
        swal("¡Dale a Jugar Otra Vez!",);
    } else {
        swal("¡Vuelve pronto!", "Estamos agregando nuevos cuentos constantemente.", "info");
    }
});
});
