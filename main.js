const navToggle  =document.querySelector('.hamburger-container');
const links  =document.querySelector('.links');
navToggle.addEventListener('click', function() {
    links.classList.toggle('show-links');
});