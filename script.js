let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () => {
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.container-cart');

document.querySelector('#cart-btn').onclick = () => {
    cartItem.classList.toggle('active'); 
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

let searchForm = document.querySelector('.search-Form');

document.querySelector('#search-btn').onclick = () => {
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');

}
let exit = document.querySelector('.cart');

document.querySelector('#tim').onclick = () => {

    exit.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}