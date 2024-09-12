//Navigation bar effects on scroll
window.addEventListener("scroll", function(){
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});
//services section - model
const serviceModels = document.querySelectorAll(".service-model");
const learnmoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

var modal = function(modalClick){
    serviceModels[modalClick].classList.add("active");
}
learnmoreBtns.forEach((learnmoreBtn, i) =>{
    learnmoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () =>{
        serviceModels.forEach((modalView) => {
            modalView.classList.remove("active");
        });
    });
});
//portfolio
const portifolioModels = document.querySelectorAll(".portifolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portifolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portifolioModel = function(modalClick){
    portifolioModels[modalClick].classList.add("active");
}
imgCards.forEach((imgCard, i) =>{
    imgCard.addEventListener("click", () => {
        portifolioModel(i);
    });
});

portifolioCloseBtns.forEach((portifolioCloseBtn) => {
    portifolioCloseBtn.addEventListener("click", () =>{
        portifolioModels.forEach((portifolioModalView) => {
            portifolioModalView.classList.remove("active");
        });
    });
});

const scrollTopBtn = document.querySelector(".scrollToTop-btn");
window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});
scrollTopBtn.addEventListener("click", () =>{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});
//navigation
window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        let sectionHeight = current.offsetHeight;
        let sectionTop = current.offsetTop - 50;
        let id = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
        }
        else{
            document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
        }
    });
});
//dark/light theme
const themeBtn = document.querySelector(".theme-btn");
themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => document.body.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.setItem("saved-theme", "yourThemeValue");
const savedIcon = localStorage.setItem("saved-icon", "yourIconValue");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}
//responsive nav
const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigationBtn = document.querySelector(".navigation");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navigationBtn.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navigationBtn.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navigationBtn.classList.remove("active");
    });
});