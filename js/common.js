const header = document.querySelector('header');
const menu = document.querySelector('.sub_nav > a');
const phoneMenu = document.querySelector('.main_nav');
menu.addEventListener('click', clickWork);
phoneMenu.addEventListener('click', clickWork);

function clickWork(ev) {
    ev.preventDefault();
    if(!header.classList.contains('on')){
        header.classList.add('on');
    } else {
        header.classList.remove('on');
        console.log('a');
    }
}