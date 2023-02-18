
const contenedorProductos = document.getElementById("contenedorProductos");
const conContadorCarrito = document.getElementById("conContadorCarrito");
const carritoOff = document.getElementById("carritoOff");
const tCompra = document.getElementById("tCompra");
const contador= document.createElement ("p");

const carritoDeCompras =[]

const bolsas = [
    {id:1, nombre: "Bolsa disco", imagen:"./imagenes/bolsa_disco1.jpg", color:"Rojo matizado", precio:" $150", cantidad:1},
    {id:2, nombre: "Bolsa estambre", imagen:"./imagenes/bolsa_estambre1.jpg", color:"Azul con verde", precio:" $80", cantidad:1},
    {id:3, nombre: "Bolsa vino", imagen:"./imagenes/bolsa_nylon1.jpg", color:"Vino", precio:" $180", cantidad:1},
    {id:4, nombre: "Bolsa de mano", imagen:"./imagenes/bolsa_nylon2.jpg", color:"Azul", precio:" $200", cantidad:1},
    {id:5, nombre: "Bolsa para hombros ", imagen:"./imagenes/bolsa_nylon3.jpg", color:"Azul", precio:" $180", cantidad:1},
    {id:6, nombre: "Bolsa matizado con argolla", imagen:"./imagenes/bolsa_nylon4.jpg", color:"Azul con amarillo", precio:" $160", cantidad:1},
    {id:7, nombre: "Bolsa rosado", imagen:"./imagenes/bolsa_nylon5.jpg", color:"Blanco con rosa", precio:" $150", cantidad:1},
    {id:8, nombre: "Bolsa medialuna", imagen:"./imagenes/bolsa_nylon6.jpg", color:"Rosa tonos", precio:" $120", cantidad:1},
    {id:9, nombre: "Bolsa matiz", imagen:"./imagenes/bolsa_nylon8.jpg", color:"Azul tonos", precio:" $140", cantidad:1},
    {id:10, nombre: "Bolsa fichera", imagen:"./imagenes/bolsa_nylon9.jpg", color:"Negro con fichas", precio:" $160", cantidad:1},
    {id:11, nombre: "Bolsa corazón de fichas", imagen:"./imagenes/bolsa_nylon10.jpg", color:"Rojo con fichas", precio:" $160", cantidad:1},
    {id:12, nombre: "Bolsa con fichas", imagen:"./imagenes/bolsa_nylon11.jpg", color:"Negro con fichas", precio:" $170", cantidad:1},
    {id:13, nombre: "Bolsa purple", imagen:"./imagenes/bolsa_nylon12.jpg", color:"Morado", precio:" $150", cantidad:1},
    {id:14, nombre: "Bolsa arcoiris", imagen:"./imagenes/bolsa_nylon13.jpg", color:"Arcoiris", precio:" $160", cantidad:1},
    {id:15, nombre: "Bolsa con flor", imagen:"./imagenes/bolsa_rafia1.jpg", color:"Blanco con rosa", precio:" $100", cantidad:1},
    {id:16, nombre: "Bolsa con flores", imagen:"./imagenes/bolsa_rafia2.jpg", color:"Gris con negro", precio:" $100", cantidad:1},
    {id:17, nombre: "Bolsa matizada", imagen:"./imagenes/bolsa_rafia3.jpg", color:"Blanco con naranja", precio:" $100", cantidad:1},
    {id:18, nombre: "Bolsa ligera", imagen:"./imagenes/bolsa_rafia4.jpg", color:"Café", precio:" $110", cantidad:1},
    {id:19, nombre: "Bolsa matizada", imagen:"./imagenes/bolsa_rafia5.jpg", color:"Café tonos", precio:" $110", cantidad:1},
    {id:20, nombre: "Bolsa rafia", imagen:"./imagenes/bolsa_rafia6.jpg", color:"Cafe", precio:" $110", cantidad:1},
    {id:21, nombre: "Bolsa para mandado", imagen:"./imagenes/bolsa_rafia7.jpg", color:"Café", precio:" $150", cantidad:1},
    {id:22, nombre: "Bolsa textura", imagen:"./imagenes/bolsa_rafia8.jpg", color:"Café tonos", precio:" $100", cantidad:1},
    {id:23, nombre: "Bolsa ondas", imagen:"./imagenes/bolsa_rafia9.jpg", color:"Café tonos", precio:" $100", cantidad:1},
    {id:24, nombre: "Bolsa corta", imagen:"./imagenes/bolsa_rafia10.jpg", color:"Café tonos", precio:" $100", cantidad:1},
    {id:25, nombre: "Bolsa mar rafia", imagen:"./imagenes/bolsa_rafia11.jpg", color:"Azul con blanco", precio:" $110", cantidad:1},
    {id:26, nombre: "Bolsa de cola de rata matiz oro", imagen:"./imagenes/bolsa_raton1.jpg", color:"Café tonos ", precio:" $200", cantidad:1},
    {id:27, nombre: "Bolsa de cola de rata matiz azul", imagen:"./imagenes/bolsa_raton2.jpg", color:"Azul", precio:" $200", cantidad:1},
    {id:28, nombre: "Bolsa de cola de rata turquesa" , imagen:"./imagenes/bolsa_raton3.jpg", color:"Turquesa con blanco", precio:" $200", cantidad:1},
    {id:29, nombre: "Bolsa de trapillo cuadrada", imagen:"./imagenes/bolsa_trapillo1.jpg", color:"Verde", precio:" $250", cantidad:1},
    {id:30, nombre: "Bolsa de trapillo cuadrada", imagen:"./imagenes/bolsa_trapillo2.jpg", color:"Verde", precio:" $250", cantidad:1},
    {id:31, nombre: "Mochila purple", imagen:"./imagenes/mochila_nylon1.jpg", color:"Morada", precio:" $200", cantidad:1},
    {id:32, nombre: "Mochila blue", imagen:"./imagenes/mochila_nylon2.jpg", color:"Azul con blanco", precio:" $210", cantidad:1},
    {id:33, nombre: "Mochila pequeña", imagen:"./imagenes/mochila_nylon3.jpg", color:"Vino", precio:" $200", cantidad:1},
    {id:34, nombre: "Mochila pequeña rosita", imagen:"./imagenes/mochila_nylon4.jpg", color:"Rosa", precio:" $200", cantidad:1},
    {id:35, nombre: "Mochila helado", imagen:"./imagenes/mochila_rafia1.jpg", color:"Azul y amarillo", precio:" $150", cantidad:1},
    {id:36, nombre: "Mochila peque", imagen:"./imagenes/mochila_rafia2.jpg", color:"Azul con morado", precio:" $150", cantidad:1},
    {id:37, nombre: "Mochila de trapillo ", imagen:"./imagenes/mochila_trapillo1.jpg", color:"Verde", precio:" $280", cantidad:1},
    {id:38, nombre: "Mochila roja grande", imagen:"./imagenes/mochila_trapillo2.jpg", color:"Rojo", precio:" $300", cantidad:1},
    {id:39, nombre: "Mochila pequeña trapillo", imagen:"./imagenes/mochila_trapillo3.jpg", color:"Olivo", precio:" $280", cantidad:1},
    {id:40, nombre: "Portacelular", imagen:"./imagenes/portacelular1.jpg", color:"Amarillo matizado", precio:" $80", cantidad:1}

]


bolsas.forEach (item => {
    const div = document.createElement("div");
    div.innerHTML += 
    `
    <div class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <img src="${item.imagen}" alt="${item.nombre}">
            </div>
            <div class="flip-card-back">
                <h3 class="tituloCard"> ${item.nombre} </h3>
                <p>Precio: ${item.precio}</p>
                <button id="bolsas${item.id}">Agregar al carrito</button>
            </div>
        </div>
    </div>
    `
    contenedorProductos.appendChild(div);


    bolsas.sort((a,b)=>{
        if(a.precio===b.precio){
            return 0;
        }
        if(b.precio>a.precio){
            return -1;
        }
        return+1;
    });
    console.log(bolsas)


    const botonAgregarCarrito = document.getElementById(`bolsas${item.id}`);  
    botonAgregarCarrito.addEventListener ("click", ()=> {
        agregarAlCarrito(item.id, carritoDeCompras);
        agregarContadorCar();
        mostrarCarrito();
    })
})

const agregarAlCarrito = (productoSeleccionado, carrito)=> {
    const productoExiste = carritoDeCompras.some(bolsa => bolsa.id ===productoSeleccionado);
    const productoElegido = bolsas.find (bolsa => bolsa.id === productoSeleccionado);
    if (productoExiste) {
        let precioInicial = productoElegido.precio;
        productoElegido.cantidad++;
        productoElegido.precio = productoElegido.cantidad * precioInicial;
    } else{
        carrito.push(productoElegido);
        console.log("se agrego", carrito);
    }
}

const agregarContadorCar = () =>{
    if (carritoDeCompras.length !==0) {
contador.textContent =carritoDeCompras.length
contador.classList.add("contadorCarrito");
conContadorCarrito.appendChild(contador);
    }else{
        contador.textContent="";
        contador.classList.remove("contadorCarrito")
    }
}

const mostrarCarrito = ()=> {
    carritoOff.innerHTML ="";
    carritoDeCompras.forEach(producto => {
        const tr = document.createElement("tr");
        tr.classList.add("tablaProducto");
        tr.innerHTML +=
        `
            <td>
            <img src="${producto.imagen}" alt="${producto.nombre}">
        </td>
        <td class="infoProducto">Bolsa${producto.nombre}</td>
        <td class="infoProducto">${producto.cantidad}</td>
        <td class="infoProducto">${producto.precio}</td>
        <td class="infoProducto eliminarProducto">
            <iconify-icon icon="material-symbols:delete-outline" class="deleteIconify" id="eliminar${producto.id}"></iconify-icon>
        </td>
        `
carritoOff.appendChild(tr);

const botonEliminar = document.getElementById(`eliminar${producto.id}`);
botonEliminar.addEventListener("click", ()=>{
    eliminarProducto(producto.id);
})
    })
    const precioTotalCarrito = carritoDeCompras.reduce((acumulador, productos) => acumulador + productos.precio, 0);
    totalCarrito.innerText = `Precio Total: $${precioTotalCarrito}`;
}

const eliminarProducto = (productoClickeado) => {
const productoEliminado = carritoDeCompras.find(bolsa => bolsa.id ===productoClickeado);
const index=carritoDeCompras.indexOf (productoEliminado);
carritoDeCompras.splice(index,1);
agregarContadorCar();
mostrarCarrito();
}
tCompra.addEventListener("click", ()=>{
    Swal.fire("¡Gracias por tu compra!");
    
})