const compra = new carrito();

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded',compra.leerls());
}

/*var num_cantidad = 0;
var img_productos = new Array(), nombre_productos = new Array(), precio_productos = new Array(), cantidad_productos = new Array(); 

class producto{
    constructor(img, nombre, precio, cantidad){
        this.img = img;
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        img_productos[num_cantidad] = img;
        nombre_productos[num_cantidad] = nombre;
        precio_productos[num_cantidad] = precio;
        cantidad_productos[num_cantidad] = cantidad;
        num_cantidad++;
    }
}

var Avena = new producto ( "3-ositos-0.jpg", "Avena 3 ositos", 1.5, 2);
var Fideos = new producto ( "don-vittorio-0.jpg","Fideos Don Vittorio", 2.5, 3);
var Arroz = new producto ("tonderito-0.jpg","Arroz tonderito", 3.00, 4);
var Gaseosa = new producto ("coca-cola-0.jpg", "Coca cola", 8.00, 2);
var Papel = new producto ("elite-0.jpeg", "Papel Elite", 1.8, 1);

function recopilar_datos(){
    var carrito = document.getElementsByClassName("carrito");
    for(var i=0; i<num_cantidad; i++){
        const div= document.createElement("div");
        div.setAttribute("class", "shopping-cart-items shoppingCartItemsContainer")
        div.innerHTML="<div class='row shoppingCartItem'><div class='col-6'><div class='shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-2'><img src='img/productos/"+img_productos[i] +"' class='shopping-cart-image'><h6 class='shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0'>"+nombre_productos[i]+"</h6></div></div><div class='col-2'><div class='shopping-cart-quantity d-flex align-items-center h-100 border-bottom pb-2 pt-2'><input class='shopping-cart-quantity-input shoppingCartItemQuantity' type='number' value='"+cantidad_productos[i]+"'></div></div><div class='col-4'><div class='shopping-cart-price d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-2'><p class='item-price mb-0 shoppingCartItemPrice'>S/ "+precio_productos[i].toFixed(2)+"</p><button class='btn btn-danger buttonDelete' type='button'>X</button></div></div></div>"
        carrito[0].insertAdjacentElement("beforeend", div); 
    }
}
*/
function total(){
    var p_total=0;
    var pr_total = document.getElementsByClassName("total");
    var igv = document.getElementsByClassName("igv");
    var sub_total = document.getElementsByClassName("sub_total");
    var cantidades = document.getElementsByClassName("shoppingCartItemQuantity");
    var precio = document.getElementsByClassName("item-price");
    for (var i =0; i<cantidades.length; i++){
        p_total=p_total+((parseFloat(cantidades[i].value))*(parseFloat(precio[i].innerHTML.replace('S/', ''))));
    }
    pr_total[0].innerHTML = "S/ " + p_total.toFixed(2);
    igv[0].innerHTML = "S/ " + (0.18*(p_total)).toFixed(2);
    sub_total[0].innerHTML = "S/ " + (p_total-(0.18*(p_total))).toFixed(2);
}

//recopilar_datos();
total();

var cantidades=document.querySelectorAll('.shoppingCartItemQuantity');
cantidades.forEach(Element => Element.addEventListener('change', total));