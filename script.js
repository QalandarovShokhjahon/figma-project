document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    
    hamburger.addEventListener('click', function() {
        navbar.classList.toggle('active');
    });
    
    // Close menu when clicking on a link
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navbar.classList.remove('active');
        });
    });
});
