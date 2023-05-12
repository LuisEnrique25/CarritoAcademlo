function resetLocasStorage(){
    const reset = document.querySelector('.btn__container--reset');
    const ls = window.localStorage;

    reset.addEventListener('click', function(){
        window.alert('El stock a sido rellenado! Actualiza la pagina para ver el stock actual!');
        ls.removeItem('DB');
    })
}

export default resetLocasStorage;