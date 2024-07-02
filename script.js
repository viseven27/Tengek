document.addEventListener("DOMContentLoaded", function(){
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0; 

    function showSlide(){
        slides.forEach(slide => {
            slide.classList.remove("active"); 
        })

        slides[currentSlide].classList.add("active");
        currentSlide = (currentSlide + 1) % slides.length; 
        setTimeout(showSlide, 5000); 
    }
    showSlide(); 
})

document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.navbar .right ul');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    document.querySelectorAll('.navbar .right ul li a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = e.target.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            targetElement.scrollIntoView({ behavior: 'smooth' });

            // Close the menu after clicking a link
            navLinks.classList.remove('active');
            burger.classList.remove('active');
        });
    });
});

let currentProfile = 1;

function showProfile(profileNum) {
    const profiles = document.querySelectorAll('.profile');
    profiles.forEach((profile, index) => {
        profile.style.display = (index === profileNum - 1) ? 'flex' : 'none';
    });
}

document.addEventListener("DOMContentLoaded", function() {
    let currentProfile = 0;
    const profiles = document.querySelectorAll('.profile');

    function showProfile(index) {
        profiles.forEach((profile, i) => {
            profile.classList.toggle('active', i === index);
        });
    }

    function prevProfile() {
        currentProfile = (currentProfile - 1 + profiles.length) % profiles.length;
        showProfile(currentProfile);
    }

    function nextProfile() {
        currentProfile = (currentProfile + 1) % profiles.length;
        showProfile(currentProfile);
    }

    document.querySelector('.left-arrow').addEventListener('click', prevProfile);
    document.querySelector('.right-arrow').addEventListener('click', nextProfile);

    showProfile(currentProfile);
});