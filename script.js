// Navbar background on scroll

const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if(window.scrollY > 50){
        header.style.background = "rgba(10,10,10,.9)";
    }else{
        header.style.background = "rgba(10,10,10,.55)";
    }
});


// Smooth fade-in animation

const observer = new IntersectionObserver((entries)=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});

document.querySelectorAll(".card, .about").forEach((el)=>{
    observer.observe(el);
});