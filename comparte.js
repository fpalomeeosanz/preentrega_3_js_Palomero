//base de datos con nuevas ideas de cuentos 
const baseDeIdeas = [{
    usuario: 'felipe' ,
    nuevaIdeaCuento: 'una morsa radioactiva con poderes mentales y aficionada por la onda disco', 
},
{
    usuario: 'laura' ,
    nuevaIdeaCuento: 'una liebre espia con doble vida como vendedora da tacos en ciudad de mexico', 
},
{
    usuario: 'joaquin' ,
    nuevaIdeaCuento: 'un panda que se desdobla para resolver eacuaciones imposibles en librerias abandonadas', 
},
];

//objeto para contener info nuevas ideas
const ideaDeUser = {
    usuario: '' ,
    nuevaIdeaCuento: '' ,
};

//conecion con html
const buttonIdeas = document.getElementById("buttonIdeas");
const cuadroMensaje = document.getElementById ("cuadroMensaje");
const inputs = document.querySelectorAll("imput")

//boton para enviar iddeas
inputs.forEach((ele)=> {
    ele.addEventListener("input",()=>{
        buttonIdeas.addEventListener("click",()=>{
            ideaDeUser.push(baseDeIdeas);
        });
    });
});

//guardado en local storage
localStorage.setItem("usuario","nuevaIdeaCuento");

//JSON
const ideasEnBruto = localStorage.getItem("baseDeIdeas",JSON.stringify(baseDeIdeas));
JSON.parse(localStorage.getItem("ideasEnBruto"))
console.log(baseDeIdeas)
console.log(ideasEnBruto)


