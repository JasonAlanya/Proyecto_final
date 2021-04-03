const compra = new carrito();

cargarEventos();

function cargarEventos(){
    document.addEventListener('DOMContentLoaded',compra.leerls());
}

function total(){
    var p_total=0;
    var pr_total = $(".total");
    var igv = $(".igv");
    var sub_total = $(".sub_total");
    var cantidades = $(".shoppingCartItemQuantity");
    var precio = $(".item-price");
    for (var i =0; i<cantidades.length; i++){
        p_total=p_total+((parseFloat(cantidades[i].value))*(parseFloat(precio[i].innerHTML.replace('S/', ''))));
    }
    pr_total[0].innerHTML = "S/ " + p_total.toFixed(2);
    igv[0].innerHTML = "S/ " + (0.18*(p_total)).toFixed(2);
    sub_total[0].innerHTML = "S/ " + (p_total-(0.18*(p_total))).toFixed(2);
}

//recopilar_datos();
total();

/*var cantidad=document.querySelectorAll('.shoppingCartItemQuantity');
cantidad.forEach(Element => Element.addEventListener('change', total));*/

$(".shoppingCartItemQuantity").change(total);