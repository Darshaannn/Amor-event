/**
 * AMOR EVENTZ — Master Interaction Script
 * Robust Reveal Animations, Cinematic Sliders, and Stat Counters
 */

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. CINEMATIC HERO SLIDER
    const slider = document.getElementById('heroSlider');
    const thumbs = document.getElementById('heroThumbs');
    if (slider && thumbs) {
        const slides = slider.querySelectorAll('.hero-slide');
        const thumbItems = thumbs.querySelectorAll('.hero-thumb');
        let currentSlide = 0;
        let slideInterval;

        function showSlide(index) {
            slides.forEach(s => s.classList.remove('active', 'previous'));
            thumbItems.forEach(t => t.classList.remove('active'));
            
            const prevIndex = currentSlide;
            currentSlide = index;
            
            slides[prevIndex].classList.add('previous');
            slides[currentSlide].classList.add('active');
            thumbItems[currentSlide].classList.add('active');
        }

        function nextSlide() {
            let next = (currentSlide + 1) % slides.length;
            showSlide(next);
        }

        // Auto-advance
        slideInterval = setInterval(nextSlide, 6000);

        // Thumbnail Clicks
        thumbItems.forEach((thumb, idx) => {
            thumb.addEventListener('click', () => {
                clearInterval(slideInterval);
                showSlide(idx);
                slideInterval = setInterval(nextSlide, 6000);
            });
        });
    }

    // 2. ROBUST COUNTER ANIMATIONS (IntersectionObserver)
    const counters = document.querySelectorAll('.counter');
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.getAttribute('data-target'));
                const suffix = el.getAttribute('data-suffix') || '';
                const duration = 2000; // 2 seconds
                const frameRate = 1000 / 60; // 60 FPS
                const totalFrames = Math.round(duration / frameRate);
                let frame = 0;

                const animate = () => {
                    frame++;
                    const progress = frame / totalFrames;
                    // Ease out expo
                    const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
                    const current = Math.floor(easeProgress * target);
                    
                    el.textContent = current + suffix;

                    if (frame < totalFrames) {
                        requestAnimationFrame(animate);
                    } else {
                        el.textContent = target + suffix;
                    }
                };

                requestAnimationFrame(animate);
                counterObserver.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(c => counterObserver.observe(c));

    // 3. SCROLL REVEAL ANIMATIONS
    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                // Optional: stop observing once revealed
                // revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15 });

    revealElements.forEach(el => revealObserver.observe(el));

    // 4. NAVBAR SCROLL EFFECT
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 5. SMOOTH ANCHOR SCROLLING
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
