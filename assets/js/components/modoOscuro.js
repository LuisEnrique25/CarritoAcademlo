function ModoOscuro(){
    const toggle = document.getElementById('darkM__container');
    const body = document.querySelector('body');

    toggle.onclick = function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');
    }
}

export default ModoOscuro;