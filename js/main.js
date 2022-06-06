let elBtn = document.querySelector('#hamburger');
let elNavbar = document.querySelector('#btn');
let el_btn = document.querySelector('#elBtn');

function handleClick() {
    elNavbar.classList.toggle('active-list');
    el_btn.classList.toggle('active-btn');
}
elBtn.addEventListener('click', handleClick);