const navslide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        
        //burger animation
        burger.classList.toggle('toggle');
    });
}

navslide();