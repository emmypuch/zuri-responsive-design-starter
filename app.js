let menu = document.getElementById("menu");
let open = document.getElementById("menu-open");
let close = document.getElementById("menu-close");
let item = document.getElementById("item");

open.addEventListener('click', hideMenu);
close.addEventListener('click', showMenu);

function hideMenu(){
    open.style.display = 'none';
    close.style.display = 'block';
    item.style.display = "flex";
}

function showMenu(){
    close.style.display = 'none';
    open.style.display = 'block';
    item.style.display = "none";
}