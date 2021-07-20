const btnMenu = document.querySelector('.btn-menu');
const menu = document.querySelector('.menu-navegacion');

btnMenu.addEventListener('click', ()=>{
    menu.classList.toggle('spread');
})