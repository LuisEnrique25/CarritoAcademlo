function showModal(db){

    // VARIABLES

    const openModal = document.querySelector('.products__container');
    const modalDOM = document.querySelector('.modal__card');
    const modalContainer = document.querySelector('.modal__container')
    const closeModal = document.querySelector('.modal__close');

    // Funciones

    function printModal (id){
        
        for (const producto of db) {
            if(id === producto.id){
                let htmlModal = `
                    <img src=" ${producto.image} " alt="" class="modal__img">
                    <h2 class="modal__title">${producto.name}</h2>
                    <p class="modal__description">${producto.description}</p>
                    <div class="modal__footer">
                    <p>En stock: ${producto.quantity}</p>
                    <p> Precio Unitario: $${producto.price}
                    </div>
                `;
                modalContainer.innerHTML = htmlModal;
            }
        }
        //console.log('funciona la llamada: ' + id)
    }

    //EVENTOS

    openModal.addEventListener('click', (event) =>{
        if(event.target.classList.contains('product__img')){
            let id = +event.target.closest('.product__img').dataset.id;
            modalDOM.classList.add('modal--show');
            printModal(id);
        }
    });

    closeModal.addEventListener('click', () => {
        modalDOM.classList.remove('modal--show')
    })
}

export default showModal;