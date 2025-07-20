// navbar move based on last clicked
const navLink = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo')

const activePage=() =>{
    navLink.forEach(link =>{
        link.classList.remove('active');
    });
}

navLink.forEach((link, idx) =>{
    link.addEventListener('click', ()=>{
        if(!link.classList.contains('active')){
            activePage();

            link.classList.add('active');
        }
    });
});

logoLink.addEventListener('click', () =>{
    if(!navLink[0].classList.contains('active')){
        activePage();

        navLink[0].classList.add('active');
    }
});

// RESPONSIVE NAVBAR - toggle
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () =>{
    menuIcon.classList.toggle('bx-x'); //change icon -> x
    navbar.classList.toggle('active'); //visibility navbar toggle
});

navLink.forEach(link =>{
    link.addEventListener('click', () => {
        menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');
    });
});


// choose all element in doc that match CSS selector
const expBtns = document.querySelectorAll('.exp-btn');

expBtns.forEach((btn,idx) => {
    btn.addEventListener('click', ()=> {

        const expDetails = document.querySelectorAll('.exp-detail');
        expBtns.forEach(btn =>{
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        
        expDetails.forEach(detail =>{
            detail.classList.remove('active');
        });
        expDetails[idx].classList.add('active');
    });
});


// SLIDER
let currentSlide = 0;
const totalSlides = 5; // picture
const projectDetails = document.querySelectorAll('.project-detail');

// updare active project details
function updateProjectDetails(){
    projectDetails.forEach(detail => {
        detail.classList.remove('active');
    });

    // active class add at project details that match with currentSlide
    if(projectDetails[currentSlide]){
        projectDetails[currentSlide].classList.add('active');
    }
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    updateSlide();
    updateProjectDetails();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    updateSlide();
    updateProjectDetails();
}

function updateSlide() {
    const slideContainer = document.querySelector('.img-slide');
    const translateX = -currentSlide * 100;
    slideContainer.style.transform = `translateX(${translateX}%)`;
}

// set 1st projectDetail = active
updateProjectDetails();



// RESPONSIVE WEB



// debug if project details detected
console.log('Total project details found:', projectDetails.length);
projectDetails.forEach((detail, index) => {
    console.log(`Project detail ${index}:`, detail);
});