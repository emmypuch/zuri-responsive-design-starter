let toggleB = document.getElementsByClassName('nav-btn')[0];
const navbar = document.getElementsByClassName('nav-links')[0];

toggleB.addEventListener('click', function(){
    
    navbar.classList.toggle('active');
})