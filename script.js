document.addEventListener('DOMContentLoaded', () => {

    // ─── 1. SMOOTH SCROLL (Pure DOM) ────────────────────────────────────────
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });


    // ─── 2. STICKY NAVBAR ───────────────────────────────────────────────────
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            navbar.classList.toggle('scrolled', window.scrollY > 60);
        });
    }


    // ─── 3. SCROLL REVEAL ANIMATIONS ────────────────────────────────────────
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                if (entry.target.classList.contains('about-content')) animateCounters();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));


    // ─── 4. NUMBER COUNTER ANIMATION ────────────────────────────────────────
    let countersStarted = false;

    function animateCounters() {
        if (countersStarted) return;
        countersStarted = true;
        document.querySelectorAll('.stat-number').forEach(counter => {
            const target = +counter.getAttribute('data-target');
            const step = target / (1800 / 16);
            let current = 0;
            const tick = () => {
                current += step;
                if (current < target) {
                    counter.textContent = Math.ceil(current);
                    requestAnimationFrame(tick);
                } else {
                    counter.textContent = target;
                }
            };
            requestAnimationFrame(tick);
        });
    }


    // ─── 5. FAQ ACCORDION ───────────────────────────────────────────────────
    document.querySelectorAll('.faq-item').forEach(item => {
        const btn = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');
        if (!btn || !answer) return;

        btn.addEventListener('click', () => {
            const isOpen = item.classList.contains('active');
            document.querySelectorAll('.faq-item').forEach(i => {
                i.classList.remove('active');
                const a = i.querySelector('.faq-answer');
                if (a) a.style.maxHeight = null;
            });
            if (!isOpen) {
                item.classList.add('active');
                answer.style.maxHeight = answer.scrollHeight + 'px';
            }
        });
    });


    // ─── 6. CINEMATIC HERO SLIDER with THUMBNAIL NAVIGATION ─────────────────
    const slides = Array.from(document.querySelectorAll('.hero-slide'));
    const thumbs = Array.from(document.querySelectorAll('.hero-thumb'));
    let current = 0;
    let autoTimer = null;

    function goToSlide(index) {
        // Clear old state
        slides.forEach(s => { s.classList.remove('active', 'previous'); });
        thumbs.forEach(t => t.classList.remove('active'));

        // Briefly mark the outgoing slide as 'previous' so it fades out underneath
        if (slides[current]) slides[current].classList.add('previous');

        current = index;
        slides[current].classList.add('active');
        if (thumbs[current]) thumbs[current].classList.add('active');

        // Remove 'previous' after crossfade completes
        setTimeout(() => {
            slides.forEach(s => s.classList.remove('previous'));
        }, 2600);
    }

    function startAutoplay() {
        clearInterval(autoTimer);
        autoTimer = setInterval(() => {
            goToSlide((current + 1) % slides.length);
        }, 5000);
    }

    // Init
    if (slides.length > 0) {
        goToSlide(0);
        startAutoplay();

        // Thumbnail click → jump to that slide and reset autoplay timer
        thumbs.forEach(thumb => {
            thumb.addEventListener('click', () => {
                const idx = parseInt(thumb.getAttribute('data-index'), 10);
                if (idx !== current) {
                    goToSlide(idx);
                    startAutoplay(); // reset timer so autoplay doesn't snap immediately
                }
            });
        });
    }

});
