// toogle icon  navbar 
 let menuIcon = document.querySelector('#menu-icon');
 let navbar = document.querySelector('.navbar');
 
 menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
 };


// scroll section active link 
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*="' + id + '"]').classList.add('active');

            });
        };
    });
//  sticky navbar 
let header = document.querySelector('header');
header.classList.toggle('sticky', window.scrollY > 100);

};
// remove togge icons and navbar when click on navbar link 

menuIcon.classList.remove('bx-x');
navbar.classList.remove('active');

// Initialize ScrollReveal
const sr = ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

// Use ScrollReveal to animate elements
sr.reveal('.home-content, .heading', { origin: 'top' });
sr.reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'bottom' });
sr.reveal('.home-content h1, .about-img', { origin: 'left' });
sr.reveal('.home-content p, .about-content', { origin: 'right' });

// typed js 

const typed = new Typed('.multiple-text', {
    strings: ['Frontend Developer',  'Web Developer','SQA ENGINEER','Test Automation Engineer'],
    typeSpeed: 100,
    backSpeed : 100,
    backDelay: 1000,
    loop: true
})


let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

































