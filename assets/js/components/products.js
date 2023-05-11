function products(productos){
    const db = [...productos];

    function printProducts(){
        const productsDOM = document.querySelector('.products__container');

        let htmlProduct = '';

        for(let product of db){
            htmlProduct += `
            <article class="product">
                    <div class="product__image">
                        <img src="${product.image}" class="product__img" data-id="${product.id}" alt="${product.name}">
                    </div>
                    <div class="product__content">
                        <button type="button" class="product__btn add--to--cart" data-id="${product.id}">
                            <i class='bx bx-cart-download'></i>
                        </button>
                        <span class="product__price">$ ${product.price}</span>
                        <span class="product__stock">Dsponible: ${product.quantity}</span>
                        <h3 class="product__title">${product.name}</h3>
                    </div>
                </article>
            `
        }

        productsDOM.innerHTML = htmlProduct;
    }

    printProducts();

    return{
        db, printProducts
    };

}

export default products;