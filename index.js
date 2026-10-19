const about = document.getElementById("about");
about.addEventListener("click", aboutPage);
function aboutPage(){
    window.location.href= "about.html"
}

const menu = document.getElementById("btn1");
menu.addEventListener("click", openMenu);
function openMenu(){
    window.location.href = "menu.html";
}

const reservation = document.getElementById("reserve-table");
reservation.addEventListener("click", reserveSection);
function reserveSection(){
    const section = document.querySelector("reservation");
    section.scrollIntoView({behavior: "smooth"});
}