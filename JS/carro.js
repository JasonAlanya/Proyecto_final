class carrito{

    comprar(e){
        e.preventDefault();
        if(e.target.classList.contains('agregar')){
            alert("Producto añadido al carrito")
            const producto = e.target.parentElement.parentElement;
            this.leerproducto(producto);
        }
    }

    leerproducto(producto){
        const info = {
            imagen : producto.querySelector('.imagen').src,
            titulo : producto.querySelector('.nombre').textContent,
            precio : producto.querySelector('.precio').textContent,
            cantidad: 1
        }
        this.insertarCarrito(info);
    }

    insertarCarrito(producto){
        /*var carrito = document.getElementsByClassName("carrito");
        const div= document.createElement("div");
        div.setAttribute("class", "shopping-cart-items shoppingCartItemsContainer");
        div.innerHTML="<div class='row shoppingCartItem'><div class='col-6'><div class='shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-2'><img src='"+producto.imagen +"' class='shopping-cart-image'><h6 class='shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0'>"+producto.titulo+"</h6></div></div><div class='col-2'><div class='shopping-cart-quantity d-flex align-items-center h-100 border-bottom pb-2 pt-2'><input class='shopping-cart-quantity-input shoppingCartItemQuantity' type='number' value='"+producto.cantidad+"'></div></div><div class='col-4'><div class='shopping-cart-price d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-2'><p class='item-price mb-0 shoppingCartItemPrice'>S/ "+producto.precio+"</p><button class='btn btn-danger buttonDelete' type='button'>X</button></div></div></div>";
        carrito[0].insertAdjacentElement("beforeend", div);*/
        this.guardarls(producto);
    }

    guardarls(producto){
        let productos;
        productos = this.obtenerls();
        productos.push(producto);
        localStorage.setItem('productos', JSON.stringify(productos));
    }

    obtenerls(){
        let productosls;

        if(localStorage.getItem('productos')===null){
            productosls = [];
        }
        else{
            productosls = JSON.parse(localStorage.getItem('productos'));
        }
        return productosls;
    }

    leerls(){
        let productosls;
        productosls = this.obtenerls();
        productosls.forEach(function(producto) {
            var carrito = document.getElementsByClassName("carrito");
            const div= document.createElement("div");
            div.setAttribute("class", "shopping-cart-items shoppingCartItemsContainer");
            div.innerHTML="<div class='row shoppingCartItem'><div class='col-6'><div class='shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-2'><img src='"+producto.imagen +"' class='shopping-cart-image'><h6 class='shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0'>"+producto.titulo+"</h6></div></div><div class='col-2'><div class='shopping-cart-quantity d-flex align-items-center h-100 border-bottom pb-2 pt-2'><input class='shopping-cart-quantity-input shoppingCartItemQuantity' type='number' value='"+producto.cantidad+"'></div></div><div class='col-4'><div class='shopping-cart-price d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-2'><p class='item-price mb-0 shoppingCartItemPrice'>S/ "+producto.precio+"</p><button class='btn btn-danger buttonDelete' type='button'>X</button></div></div></div>";
            carrito[0].insertAdjacentElement("beforeend", div);
        });
    }
}