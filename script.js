document.addEventListener('DOMContentLoaded', () => {
    // Reveal Engine
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Mobile Hamburger Toggle
    const hamburger = document.getElementById('hamburger');
    const navLinks = document.getElementById('nav-links');

    hamburger?.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Handle Navbar hide/show on scroll for cleaner aesthetic
    let lastScroll = 0;
    const navbar = document.querySelector('.glass-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateX(-50%) translateY(0)';
            return;
        }
        if (currentScroll > lastScroll) {
            // Scrolling down - hide nav
            navbar.style.transform = 'translateX(-50%) translateY(-150%)';
        } else {
            // Scrolling up - show nav
            navbar.style.transform = 'translateX(-50%) translateY(0)';
        }
        lastScroll = currentScroll;
    });
});
