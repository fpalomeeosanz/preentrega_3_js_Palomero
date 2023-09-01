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
    usuario: '',
    nuevaIdeaCuento: '',
};

//conecion con html o DOM
const buttonIdeas = document.getElementById("buttonIdeas");
const inputUsuario = document.getElementById("inputUsuario");
const inputIdea = document.getElementById("inputIdea");

//darle funcionn al evento clic y Uso de TRIM para limpiar datos depues 
buttonIdeas.addEventListener("click", () => {
    const usuario = inputUsuario.value.trim();
    const nuevaIdea = inputIdea.value.trim();

    if (usuario === '' || nuevaIdea === '') {
        swal("Para que podamos gauardar tu idea debes poner un nombre y una idea ;)");;
        
        return;
    }

    ideaDeUser.usuario = usuario;
    ideaDeUser.nuevaIdeaCuento = nuevaIdea;

    //para guardar las nuevas ideas en el array con entrada independiente 
    baseDeIdeas.push({...ideaDeUser});

    //para que queden en el localstorage
    localStorage.setItem("baseDeIdeas", JSON.stringify(baseDeIdeas));

    //para limpiar los valores al user nuevo
    inputUsuario.value = '';
    inputIdea.value = '';

    //texto de con biblioteca de sweet alert
    swal("WOW!!! Que buena idea!!! Ya la guardamos, recuerda estar atento para saber si la tuya será la proxima!");
});

//para guardar las ideas del localstorage o como respaldo
const ideasEnBruto = JSON.parse(localStorage.getItem("baseDeIdeas")) || [];

if (ideasEnBruto.length > 0) {
    ideasEnBruto.forEach(idea => {
        baseDeIdeas.push(idea);
    });
}
//solo para checar
console.log(baseDeIdeas)
console.log(ideasEnBruto)
