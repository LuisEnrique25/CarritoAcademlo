function showMenu(){
    const nav = document.querySelector('.nav')
    const menu = document.querySelector('.nav__menu')

    nav.addEventListener('click', function (e){
        if (e.target.closest('.btn--menu')){
            menu.classList.toggle('mostrar--menu');
        }

        if(e.target.closest('.btn-close')){
            menu.classList.remove('mostrar--menu')
        }
        if(e.target.closest('.nav__link')){
            menu.classList.remove('mostrar--menu')
        }
    } )
}

export default showMenu; 