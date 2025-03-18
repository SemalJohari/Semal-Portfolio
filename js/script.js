const resumeLists = document.querySelectorAll('.resume-list');
const resumeBoxs = document.querySelectorAll('.resume-box');

resumeLists.forEach((list, idx) => {
    list.addEventListener('click', () => {
        console.log("Tab clicked:", list.textContent);
        
        document.querySelector('.resume-list.active')?.classList.remove('active');
        list.classList.add('active');

        document.querySelector('.resume-box.active')?.classList.remove('active');
        resumeBoxs[idx].classList.add('active');
    });
});

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

};

ScrollReveal({ 
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.about-content, .portfolio-box, .title, .tab-box, .work__card, .input-box, .textarea', { origin: 'bottom' });
ScrollReveal().reveal('.about-img, .experience-box, .tab-wrapper', { origin: 'left' });

const typed = new Typed('.multiple-text', {
    strings: ['Machine Learning Engineer', 'Data Scientist', 'Power Platform Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})

const typed2 = new Typed('.multiple-text2', {
    strings: ['Machine Learning Engineer', 'Data Scientist', 'Power Platform Developer'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
})



document.addEventListener("DOMContentLoaded", function () {
    const scrollBtn = document.querySelector(".scroll-to-top");

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) { // Show button when scrolled down
            scrollBtn.classList.add("show");
        } else {
            scrollBtn.classList.remove("show");
        }
    });

    scrollBtn.addEventListener("click", function (e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const portfolioBoxes = document.querySelectorAll(".portfolio-box");
  
    portfolioBoxes.forEach((box) => {
      box.addEventListener("click", function () {
        portfolioBoxes.forEach((b) => {
          if (b !== box) {
            b.classList.remove("active");
          }
        });
  
        this.classList.toggle("active");
      });
    });
  });
