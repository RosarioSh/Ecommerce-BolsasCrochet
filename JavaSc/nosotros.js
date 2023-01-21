//  OPERACION ARITMETICA
// const edadUsuario1 = 20
// const edadUsuario2 = 30

// const resultado = edadUsuario1 + edadUsuario2;

// alert ("edad de ambos usuarios" + resultado)


//EJEMPLOS DE VARIABLES

// STRING
// let nombre = "Rosario";
// console.log(nombre);

// NUMBER
// let edad = "30";
// console.log(edad);

// BOOLEAN
// let cafe= "true";
// console.log(cafe);
// let cocacola= "false";
// console.log(cocacola);


//UNDEFINED 
// let apellidoUsuario= "sin definir"
// console.log(apellidoUsuario);


//NULL
// let residencia = "null";
// console.log (residencia);



////////////////////////////////////////////

//ACTIVIDAD 7:

//OP. TERNARIO
let edad = (number = 18 ? console.log('VALIDO') : console.log('NO VALIDO'));


//BUCLE FOR

const bolsasT = [
    {Tejido:1, Material: "Trapillo", Precio:"300"},
    {Tejido:2, Material: "Nylón", Precio:"250"},
    {Tejido:3, Material: "Rafia", Precio:"90"},
    {Tejido:4, Material: "Estambre", Precio:"60"},
];

console.log (bolsasT);

for (let i = 0; i < bolsasT.length; i++) {
    console.log("Propiedades de: ", bolsasT [i]);   
} 


//BUCLE SWITCH 
let tejidoMaterial = 'Trapillo';

switch(tejidoMaterial){
    case 'Nylon':
        console.log('Prefiero mi tejido de nylon');
        break;
    case 'Rafia':
        console.log('Pefiero mi tejido de rafia');
        break;
    case 'Estambre':
        console.log('Prefiero mi tejido de estambre');
        break;
    case 'Trapillo':
        console.log('Prefiero mi tejido de trapillo');
        break;
    default:
        console.log('No hay otro material');
        break;
}