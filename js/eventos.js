//window é a janela document é o site a pagina web

var contador = document.querySelector('.badge');

document.addEventListener('click', event => {
    var numero = parseInt(contador.textContent) + 1;
    contador.textContent = numero;
    console.log('click');
});


window.addEventListener('focus', event => {

    console.log('focus');
});