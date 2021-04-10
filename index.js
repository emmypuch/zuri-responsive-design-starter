let hamburger = document.querySelector("div.nav-bar i") ;
let lim = document.querySelector("ul.nav-links") ;
let closex = document.querySelector(".fa-times");




window.addEventListener("resize", resize);





function menu() {
   

    hamburger.style.display = "none";
    lim.style.display = "block";
    closex.style.display = "block";
  
}


function resize(){
    if (window.innerWidth > 768 ){
    hamburger.style.display = "none" ;
     lim.style.display = "flex";
     closex.style.display = "none";
    }
    else{
        closex.addEventListener("click", e=>{
            lim.style.display = "none";
            hamburger.style.display = "block";
        })
        hamburger.style.display = "block" ;
         lim.style.display = "none";
        }


    
}

resize();