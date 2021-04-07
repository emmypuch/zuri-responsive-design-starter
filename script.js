const toggle = document.getElementById('nav-toggle') ;
const navlink = document.getElementById('nav-links');

//function to show side bar

toggle.addEventListener('click', () => {
    navlink.classList.toggle('show');
})
