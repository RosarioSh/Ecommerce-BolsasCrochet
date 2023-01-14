// let nombreUsuario = prompt ("Hola ¿Cómo te llamas?");
// const edadUsuario = prompt ("¿Cuántos años tienes?");

// console.log(nombreUsuario);

// nombreUsuario = "Rosario"

// console.log(edadUsuario);

// edadUsuario = "30";

// console.log(edadUsuario);


//Concantenacion  

// const saludo = alert("Hola" + nombreUsuario + ", tienes" + edadUsuario + "años de edad");

//Interpolacion
// const saludot = alert (`Hola ${nombreUsuario}, tienes ${edadUsuario} años de edad`);


// Comparacion 
// if (edadUsuario > 20){
//     alert ("Puedes solicitar una promoción doble");
// } 
// else{
//     alert ("No puedes solicitar promociones,solo un descuento de 5%");
// }

// function saludar( ){
//     console.log("Hola usuario");
// }
// saludar();

//ACTIVIDAD 6 
//SUMA DE NUMEROS 
function suma (a, b, c){
    let resultado = a+b+c;
    console.log (resultado);
}

suma(2,3,5);


//COMPARACION 
function comparacion ( a, b){
    let mayor = a > b;
    console.log(true);
}

comparacion(8, 4);


//FUNCIONES CON ARROW 

const sumaF=(a, b, c)=>{ let resultado = a+b+c; console.log(resultado);}

sumaF(8,1,4);

const comparar=(a, b) => {let menor = a < b; console.log(false);}

comparar(2,5);

// OBJETO Y DESESTRUCTURACION 
const bolsa1={
    material: "Nylon",
    color: "Verde",
    tamaño: "30 cm x 50 cm",
    peso: "200 grs",
    puntada: "Medio punto",
}

console.log(bolsa1);

console.log("El material de la bolsa", bolsa1.material);
console.log("El color es", bolsa1.color);
console.log("Su puntada es con",bolsa1.puntada);


const { material, tamaño, peso} = bolsa1;
console.log(material, tamaño, peso);


// ARRAY 
const bolsa2=["mochila", 300, 50, monedero=["circular", "con fichas"]];

console.log(bolsa2);


const [tipo, precio,hechas]=bolsa2;
console.log(tipo, precio, hechas);





