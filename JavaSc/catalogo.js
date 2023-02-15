const contenedorProductos = document.getElementById("contenedorProductos");

let bolsasT = [
  { id: 1, bolsa: "Rafia", stock: 3, precio: 100 },
  { id: 2, bolsa: "Rafia", stock: 4, precio: 90 },
  { id: 3, bolsa: "Nylon", stock: 5, precio: 150 },
  { id: 4, bolsa: "Nylon", stock: 5, precio: 180 },
  { id: 5, bolsa: "Trapillo", stock: 6, precio: 200 },
  { id: 6, bolsa: "Trapillo", stock: 5, precio: 250 },
];

bolsasT.forEach((item) => {
  const div = document.createElement("div");
  div.innerHTML = `
    <h4> Bolsa: <p class="producto-agregado">${item.bolsa}</p></h4>
    <h4> Stock: <p class="producto-agregado">${item.stock}</p></h4>
    <h4> Precio: <p class="producto-agregado">${item.precio}</p></h4>
    <div class ="contendedorProductos">
    <button class="btn btnAgregarProducto" id="mostrarProductos${item.id}" Mostrar productos</button>
  </div>
  `;
  contenedorProductos.appendChild(div);
});

  

  const botonMostrarProductos=document.getElementById(`mostrarPrductos${item.id}`);
  botonMostrarProductos.addEventListener("click", () => {
    agregarProductos(item.id, botonMostrar);
});

  const botonOcultarProductos=document.getElementById(`ocultarPrductos${item.id}`);
  botonOcultarProductos.addEventListener("click", () => {
    agregarProductos(item.id, botonOcultar);
});

