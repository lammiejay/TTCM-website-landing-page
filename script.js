let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .fa-magnifying-glass");


searchBox.addEventListener("click", () => {
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
        searchBox.classList.replace("fa-magnifying-glass", "fa-xmark");
    } else {
        searchBox.classList.replace("fa-xmark", "fa-magnifying-glass");
    }
});


// sidebar open close 
let menuOpenBtn = document.querySelector(".navbar .fa-bars");
let menuCloseBtn = document.querySelector(".navbar .fa-xmark");
let navCollapse = document.querySelector(".navbar-collapse");
 
menuOpenBtn.addEventListener("click", () => {
    navCollapse.style.left = "0";
});

menuCloseBtn.addEventListener("click", () => {
    navCollapse.style.left = "-100%";
});

// Side bar Sub Menu Open Close

let hoverArrow = document.querySelector(".fa-caret-down");
hoverArrow.addEventListener("click", () => {
    navCollapse.classList.toggle("show1");
})



// BACK TO TOP BUTTTON

// Get the button:
const backToTop = document.querySelector('.back-to-top');

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 100){
        backToTop.classList.add("active");
    } else {
        backToTop.classList.remove("active");
    }
})























// const dropBtn1 = document.querySelector('.btn-drop-1');
// const dropMenu1 = document.querySelector('.menu1');
// const dropBtn2 = document.querySelector('.btn-drop-2');
// const dropMenu2 = document.querySelector('.menu2');
// const dropBtn3 = document.querySelector('.btn-drop-3');
// const dropMenu3 = document.querySelector('.menu3');
// const dropBtn4 = document.querySelector('.btn-drop-4');
// const dropMenu4 = document.querySelector('.menu4');

// dropBtn1.addEventListener('click', display);

// function display() {
//     dropBtn1.classList.toggle("show1");
//     dropBtn2.classList.toggle("show2");
//     dropBtn3.classList.toggle("show3");
//     dropBtn4.classList.toggle("show4");
// }
// const hamburger = document.querySelector('.hamburger');
// const navMenu = document.querySelector('.navbar-collapse');
// const burger2 = document.querySelector('.burger2');

// // Event Listener for menu button
// hamburger.addEventListener("click", mobileMenu);

// function mobileMenu() {
//     hamburger.classList.toggle("active");
//     navMenu.classList.toggle("active");
//     burger2.classList.toggle("active");
// }

// burger2.addEventListener("click", closeMenu) ;
// function closeMenu(){
//     burger2.classList.remove("active");
//     hamburger.classList.remove("active");
//     navMenu.classList.remove("active");
// }