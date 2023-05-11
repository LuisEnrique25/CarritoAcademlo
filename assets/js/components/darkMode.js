function darkmode(){
    const darkButton = document.getElementById('darkM__container');
    const ls = window.localStorage;
    const modo = ls.getItem('theme');

    //obtener el modo actual
    if(modo === 'active'){
        document.body.classList.add('active');
    }else{
        document.body.classList.remove('active');
    }


    darkButton.addEventListener('click', function (){
        document.body.classList.toggle('active');
        darkButton.classList.toggle('active');
        if(document.body.classList.contains('active')){
            ls.setItem('theme', 'active');
        }else{
            ls.removeItem('theme');
        }
    })
}

export default darkmode;