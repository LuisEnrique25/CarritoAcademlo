
function cart(db, printProducts){
    let cart = [];
    //Elementos del DOM
    const productsDOM = document.querySelector('.products__container');
    const notifyDOM = document.querySelector('.notify');
    const cartDOM = document.querySelector('.cart__body');
    const countDOM = document.querySelector('.cart__count--item');
    const totalDOM = document.querySelector('.cart__total--item');
    const checkoutDOM = document.querySelector('.btn--buy');
    
    
    
    //FUNCIONES
    function getCantidad(id){
        let cantidad = 0;
        for (const producto of db) {
            if (producto.id === id){
                cantidad = producto.quantity;
            }
        }
        return cantidad;
    }
    


    function printCart(){
        let htmlCart = ''

        console.log('Carrito:');
        console.log(cart);
        if(cart.length === 0){
            htmlCart += `
                <div class="cart__empty">
                    <i class="bx bx-cart"></i>
                    <p class="cart__empty--text">Sin productos añadidos</p>
                </div>
            `

            notifyDOM.classList.remove('show--notify');  

        }else{
            for (const item of cart) {
                const product = db.find(p => p.id === item.id)
                htmlCart += `
                <article class="article">
                    <div class="article__image">
                        <img src="${product.image}" alt=" ${product.name} ">
                    </div>
                    <div class="article__content">
                        <h3 class="article__title">${product.name}</h3>
                        <span class="article__price">$ ${product.price}</span>
                        <div class="article__quantity">
                            <button type="button" class="article__quantity-btn  article--minus" data-id="${item.id}">
                                <i class="bx bx-minus"></i>
                            </button>
                            <span class="article__quantity-text">${item.qty}</span>
                            <button type="button" class="article__quantity-btn  article--plus" data-id="${item.id}">
                                <i class="bx bx-plus"></i>
                            </button>
                        </div>
                        <button type="button" class="article__btn remove-from-cart" data-id="${item.id}">
                            <i class="bx bx-trash" ></i>
                        </button>
                    </div>
                </article>
                `
            }
            notifyDOM.classList.add('show--notify');  
        }
        cartDOM.innerHTML = htmlCart;
        notifyDOM.innerHTML = showItemCount()
        countDOM.innerHTML = showItemCount()
        totalDOM.innerHTML = showTotal()
    }
    function addToCart (id, qty = 1){
        const itemFinded = cart.find(item => item.id === id);
        
        
        if(itemFinded){
            if(itemFinded.qty < getCantidad(id)){
                itemFinded.qty += qty
            }else{
                window.alert('No quedan mas de ese productos en el inventario! Mil Disculpas')
            }
        }else{
            cart.push({id, qty});
        }
        console.log(id)
        printCart();
    }
    function removeFromCart(id, qty = 1){
        const itemFinded = cart.find(item => item.id === id);
        const result = itemFinded.qty - qty;
        if(result > 0){
            itemFinded.qty -= qty;
        }else{
            cart = cart.filter(item => item.id !== id);
        }
        printCart();
    }
    function deleteFromCart(id){
        cart = cart.filter(item => item.id !== id);
        printCart();
    }
    function showItemCount(){
        let suma = 0;
        for (const item of cart) {
            suma = suma + item.qty; // suma += item.qty
        }
        return suma;
    }
    function showTotal(){
        let total = 0;
        for (const item of cart) {
            const productFinded = db.find(p => p.id === item.id);
            total +=  item.qty * productFinded.price;
        }
        return total;
    }
    function checkout(){
        if(cart.length > 0){
            for (const item of cart) {
                const productFinded = db.find(product => product.id === item.id);

                productFinded.quantity -= item.qty;
            }
            cart = [];
            printCart();
            printProducts();
            window.alert('Compra Exitosa! Gracias por su compra!')
        }else{
            window.alert('Tu carrito esta vacio! Agrega al menos uno de los increibles productos que tenemos para ti!!')
        }
    }

   printCart();

    //Eventos

    productsDOM.addEventListener('click', function(e){
        if(e.target.closest('.add--to--cart')){
            
            let id = +e.target.closest('.add--to--cart').dataset.id;
            if(getCantidad(id) !== 0){
            addToCart(id)
            }else{
                window.alert('Lo sentimos! Parece que ya no tenemos ese producto en inventario!')
            }
            
        }
    });
    
    cartDOM.addEventListener('click', function(e){
        if(e.target.closest('.article--minus')){
            let id = +e.target.closest('.article--minus').dataset.id;
            removeFromCart(id);
        }
        if(e.target.closest('.article--plus')){
            let id = +e.target.closest('.article--plus').dataset.id;
            addToCart(id);
        }
    
    
        if(e.target.closest('.remove-from-cart')){
            let id = +e.target.closest('.remove-from-cart').dataset.id;
            deleteFromCart(id);
        }
    });

    checkoutDOM.addEventListener('click', function(event){
        checkout();
    })
}

export default cart;