function myMenuFunction () {
    var menuBth = dokumen.getElementById("myNavMenu");
    
    if (menuBth.className === "nav-menu") {
        menuBth.className += " responsive";
    } else {
        menuBth.className = "nav-menu";
    }

}


/*---------Dark Mode--------*/

const body = document.querySelector("body"),
    toggleswitch = document.getElementById("toggle-switch");

toggle-Switch.addEventListener("click", ()=> { 
    body.classList.toggle("dark");
});

/*-------Typing Effect-------*/

var TypingEffect = new typed (".typedText", {
    strings: ("Designer", "Coder", "developer"),

    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000,

})

/*-------------Scroll Animation------------*/

const sr : ScrollReveal ({
    origin: "top",
    distance: "80px",
    duration: 2000,
    reset: true,
})

sr.reveal(".featured-name", { delay: 100});
sr.reveal(".text-info", { delay: 200});
sr.reveal(".text-btn", { delay: 200});
sr.reveal(".socical_icons", { delay: 200});
sr.reveal(".featured-image", { delay: 320});

sr.reveal(".experience-box", { interval: 200});

sr.reveal(".top-header", {});


const srLeft = ScrollReveal ({
    origin: "left",
    distance: "80px",
    duration: 2000,
    reset: true,
})

srLeft.reveal(".about-info", { delay: 100});
srLeft.reveal(".contact-info", { delay: 100});