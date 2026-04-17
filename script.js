// Fluid reveal animation on scroll
document.addEventListener('DOMContentLoaded', () => {
    
    // Select all elements with the 'reveal' class
    const reveals = document.querySelectorAll('.reveal');

    function checkReveal() {
        reveals.forEach(element => {
            // Check if element is in viewport
            const windowHeight = window.innerHeight;
            const elementTop = element.getBoundingClientRect().top;
            const revealPoint = 100; // Trigger threshold

            if (elementTop < windowHeight - revealPoint) {
                element.classList.add('visible');
            }
        });
    }

    // Trigger check on load and scroll
    window.addEventListener('scroll', checkReveal);
    checkReveal(); // First check on page load
    
});
