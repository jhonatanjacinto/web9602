let btnMobile = document.querySelector('.btn-mobile');
btnMobile.onclick = function() {
    btnMobile.nextElementSibling.classList.toggle('active');
}