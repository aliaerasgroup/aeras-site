document.addEventListener('DOMContentLoaded', () => {
    // Reveal Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Nav Behavior
    let lastScroll = 0;
    const navbar = document.querySelector('.glass-nav');

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            navbar.style.transform = 'translateX(-50%) translateY(0)';
            return;
        }
        if (currentScroll > lastScroll) {
            navbar.style.transform = 'translateX(-50%) translateY(-150%)';
        } else {
            navbar.style.transform = 'translateX(-50%) translateY(0)';
        }
        lastScroll = currentScroll;
    });
});
