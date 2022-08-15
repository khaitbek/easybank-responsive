const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector(".navigation");
const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click",()=>{
    hamburger.toggleAttribute("toggleNav")
    document.body.toggleAttribute("no-scroll");
    navigation.classList.toggle("show");
    overlay.classList.toggle("show");
})