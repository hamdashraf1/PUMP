// قائمة التنقل المتجاوبة
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            
            // تغيير شكل زر القائمة
            const spans = this.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.toggle('active');
            });
        });
    }
    
    // إغلاق القائمة عند النقر على أي رابط
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                
                const spans = mobileMenuBtn.querySelectorAll('span');
                spans.forEach(span => {
                    span.classList.remove('active');
                });
            }
        });
    });
});


// Fade-in and Slide-up on Scroll
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.programs, .posts, .trainers, .locations, .contact, .cta, .section-title, .program-card, .post-item, .trainer-card, .location-card, .contact-info, .contact-form').forEach(element => {
        element.classList.add('fade-in-slide-up');
        observer.observe(element);
    });
});


// Navbar animation control - only on first load
document.addEventListener('DOMContentLoaded', function() {
    const navbar = document.querySelector('.main-nav');
    
    // Check if this is the first load (not a page navigation)
    if (!sessionStorage.getItem('navbarAnimated')) {
        navbar.classList.add('first-load');
        sessionStorage.setItem('navbarAnimated', 'true');
    }
});

