//boton declarado para ir a escuchar audioCuentos
const boton = document.getElementById("escucha");

//metodo para capturar informacion de html 
const generos = document.getElementById("generos");
const personajes = document.getElementById("personajes");
const lugares = document.getElementById("lugares");
const elementos = document.getElementById("elementos");

//metdodo para ofrecer audioCuento aleatorio cada vez
generos.children[parseInt(Math.random()*10%3)].selected=true;
personajes.children[parseInt(Math.random()*10%3)].selected=true;
lugares.children[parseInt(Math.random()*10%3)].selected=true;
elementos.children[parseInt(Math.random()*10%3)].selected=true;

//al clic de la selecion crea variable y abre en ventana nueva con seleccion
boton.addEventListener("click",function (){ 
	
	let audioPath = generos.value + personajes.value + lugares.value + elementos.value + ".mp3";

	let escucha = "escucha.html?audio="+audioPath;

	window.open(escucha, "_self");
});

