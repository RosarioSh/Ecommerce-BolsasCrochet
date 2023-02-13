// let bolsas=[
//     {id:1, bolsa:'Bolsa de Rafia',stock:3,precio:100},
//     {id:2, bolsa:'Bolsa de Rafia',stock:4,precio:90},
//     {id:3, bolsa:'Nylon',stock:5,precio:150},
//     {id:4, bolsa:'Nylon',stock:5,precio:180},
//     {id:5, bolsa:'Trapillo',stock:6,precio:200},
//     {id:6, bolsa:'Trapillo',stock:5,precio:250}
// ]

// bolsas.forEach((producto) => {
//     const div=document.createElement('div');
//     div.classList.add('producto')
//     div.innerHTML=`
//     <h4>Marca: <p class="producto-agregado">${producto.bolsa}</p></h4>
//     <h4>Stock: <p class="producto-agregado">${producto.stock}</p></h4>
//     <h4>Precio: <p class="producto-agregado">${producto.precio}</p></h4>
//     `
//     contenedorProductos.appendChild(div)
// })



const boton = document.getElementById("botonAPI");
const starW = document.getElementById("starW")



const traerStarWars = () => {
    fetch ("producto10.json")
    .then(respuesta => (respuesta.json()))
    .then(data => data.forEach(item => {
        starW.innerHTML +=
    `
        <ul>
            <li>${item.url}</li>
            <li>${item.name}</li>
            <li>${item.estatura}</li>
            <li>${item.genero}</li>
        </ul> 
    `
    }))
}

boton.addEventListener("click",()=> {
    traerStarWars();
})