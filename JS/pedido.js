const carro = new carrito();
const productos = document.getElementById('lista_productos');

cargarEventos ();

function cargarEventos (){
    productos.addEventListener('click', (e)=>(carro.comprar(e)));
}