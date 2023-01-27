//ACTIVIDAD 8 

let zapatos = [
    {id:1, marca:"NIKE", stock: 8, precios: 150.30},
    {id:2, marca:"PUMA", stock: 7, precios: 80.5},
    {id:3, marca:"ADIDAS", stock: 6, precios: 70.41},
    {id:4, marca:"CONVERSE", stock: 8, precios: 120.8},
]

// console.log("zapatos");
zapatos.forEach(nombreStock =>{
console.log(nombreStock.marca, nombreStock.stock);
})

///
const precioM = zapatos.some(item => item.precios >=200);
console.log (precioM);

////
const prom = zapatos.map(item => item.precios);
const promR= prom.reduce((total, precios)=>total+precios);

console.log("Total",promR);

const promedio = promR / zapatos.length;

console.log("Promedio",promedio);

/////
zapatos.sort((a,b) => {
    if(a.marca == b.marca){
        return 0;
    }
    if(a.marca < b.marca){
        return -1;
    }
    return 1;
});

console.log(zapatos);

/////
let valorMax = 0;

zapatos.forEach(item => {
    console.log(item.precios);
    valorMax= Math.max(item.precios, valorMax);
    valorR=Math.round(valorMax);
})

console.log("El producto más costoso", valorMax);
console.log("Redondeo", valorR);



