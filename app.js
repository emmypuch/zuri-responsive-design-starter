let menu = document.getElementById("menu");
let open = document.getElementById("menu-open");
let close = document.getElementById("menu-close");

open.addEventListener('click', hideMenu);
close.addEventListener('click', showMenu);

function hideMenu(){
    open.style.display = 'none';
    close.style.display = 'block';
}

function showMenu(){
    close.style.display = 'none';
    open.style.display = 'block';
}