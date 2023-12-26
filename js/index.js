function Producto(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
}

let carrito = [];

function agregarProductoAlCarrito() {
    let listaProductos = document.getElementById("listaProductos");
    let productosSeleccionados = [];

    // Obtener los productos seleccionados
    for (let i = 0; i < listaProductos.children.length; i++) {
        var producto = listaProductos.children[i];
        if (producto.classList.contains("seleccionado")) {
            let nombre = producto.getAttribute("data-nombre");
            let precio = parseFloat(producto.getAttribute("data-precio"));
            productosSeleccionados.push(new Producto(nombre, precio));
        }
    }

    // Añadir productos al carrito
    carrito = carrito.concat(productosSeleccionados);

    // Limpiar la selección
    for (let i = 0; i < listaProductos.children.length; i++) {
        listaProductos.children[i].classList.remove("seleccionado");
    }

    alert("Productos agregados al carrito.");
}

function mostrarCarrito() {
    if (carrito.length === 0) {
        alert("El carrito está vacío.");
    } else {
        let mensaje = "Productos en el carrito:\n";
        for (let i = 0; i < carrito.length; i++) {
            mensaje += carrito[i].nombre + " - $" + carrito[i].precio.toFixed(2) + "\n";
        }
        mensaje += "Total: $" + calcularTotal().toFixed(2);
        alert(mensaje);
    }
}

function deshacerCarrito() {
    carrito = [];
    alert("Carrito deshecho. Todos los productos han sido eliminados.");
}

function calcularTotal() {
    let total = 0;
    for (let i = 0; i < carrito.length; i++) {
        total += carrito[i].precio;
    }
    return total;
}

// Función para manejar la selección/deselección de productos
function toggleSeleccion(element) {
    element.classList.toggle("seleccionado");
}

// Asignar evento de clic a los elementos de la lista de productos
let listaProductos = document.getElementById("listaProductos");
for (let i = 0; i < listaProductos.children.length; i++) {
    listaProductos.children[i].addEventListener("click", function () {
        toggleSeleccion(this);
    });
}