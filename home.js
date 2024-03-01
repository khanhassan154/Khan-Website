function scrollValue() {
    var navbar = document.getElementById('navbar');
    var scroll = window.scrollY;
    var header1 = document.getElementById('header-scroll')
    if (scroll < 150) {
        navbar.classList.remove('BgColour');
        navbar.classList.remove('navbar-top');
        navbar.classList.add('navbar1');   
        header1.classList.add('header'); 
    } else {
        navbar.classList.add('BgColour');
        navbar.classList.add('navbar-top');
        navbar.classList.remove('navbar1');
        header1.classList.remove('header');
    }
}


