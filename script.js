/**
 * AMOR EVENTZ — Master Interaction Script
 * Robust Reveal Animations, Cinematic Sliders, and Stat Counters
 */

const translations = {
    'en': {
        'nav-home': 'HOME',
        'nav-about': 'ABOUT',
        'nav-venues': 'VENUES',
        'nav-services': 'SERVICES',
        'nav-pricing': 'PRICING',
        'nav-gallery': 'GALLERY',
        'nav-contact': 'CONTACT',
        'nav-reserve': 'RESERVE NOW',
        'hero-title-1': 'Where Every',
        'hero-title-2': 'Celebration',
        'hero-title-3': 'Becomes a Legend.',
        'hero-btn-explore': 'EXPLORE OUR VENUES',
        'hero-btn-enquire': 'ENQUIRE NOW',
        'why-amor': 'WHY AMOR EVENTZ',
        'why-amor-title': 'Five Reasons Families Choose Us',
        'usp-1-h': 'Bespoke Event Planning',
        'usp-1-p': 'A dedicated event curator is assigned to you from day one — your vision, your story, your celebration.',
        'usp-2-h': 'Culinary Excellence',
        'usp-2-p': 'In-house chefs, 200+ menu options, live counters and artisanal catering for every palate.',
        'usp-3-h': '500+ Events Legacy',
        'usp-3-p': 'Over 15 years of flawless execution across grand weddings and prestigious corporate galas.',
        'usp-4-h': 'Transparent Packages',
        'usp-4-p': 'Starting from ₹1,50,000 — we offer meticulous budgeting with absolute clarity on every deliverable.',
        'usp-5-h': 'Premier Infrastructure',
        'usp-5-p': 'State-of-the-art AV, immersive lighting, and seamless amenities designed for grand guest comfort.',
        'footer-tagline': 'Where Every Celebration Becomes a Legend.',
        'footer-explore': 'EXPLORE',
        'footer-connect': 'CONNECT',
        'footer-newsletter': 'NEWSLETTER',
        'footer-newsletter-p': 'Subscribe for event inspiration & exclusive offers',
        'footer-join': 'JOIN',
        'footer-rights': '© 2024 AMOR EVENTZ. ALL RIGHTS RESERVED.',
        'crest-subtitle': 'EVENT MANAGEMENT \u2022 MUMBAI, INDIA',
        'services-subtitle': 'What We Offer',
        'services-title': 'Our Services',
        'srv-corp-h': 'Corporate Events',
        'srv-corp-1': 'Annual Day Celebrations',
        'srv-corp-2': 'Award Functions',
        'srv-corp-3': 'Conferences & Seminars',
        'srv-corp-4': 'Product Launches',
        'srv-corp-5': 'Team Building Activities',
        'srv-corp-6': 'Dealer / Channel Partner Meets',
        'srv-corp-7': 'Offsite Meetings',
        'srv-wed-h': 'Wedding & Social Events',
        'srv-wed-1': 'Wedding Planning (End-to-End)',
        'srv-wed-2': 'Engagement Ceremonies',
        'srv-wed-3': 'Mehendi & Sangeet',
        'srv-wed-4': 'Reception',
        'srv-wed-5': 'Birthday Parties',
        'srv-wed-6': 'Anniversary Celebrations',
        'srv-wed-7': 'Baby Shower / Naming Ceremony',
        'srv-birth-h': 'Birthdays & Anniversaries',
        'srv-birth-1': 'Milestone Birthdays (30, 40, 50, etc.)',
        'srv-birth-2': 'Theme Parties',
        'srv-birth-3': 'House Parties',
        'srv-birth-4': 'Retirement Parties',
        'srv-birth-5': 'Farewell Parties',
        'srv-ent-h': 'Entertainment & Themed Events',
        'srv-ent-1': 'DJ & Live Music',
        'srv-ent-2': 'Celebrity Appearances',
        'srv-view-all': 'View All Services'
    },
    'hi': {
        'nav-home': 'होम',
        'nav-about': 'हमारे बारे में',
        'nav-venues': 'स्थान',
        'nav-services': 'सेवाएं',
        'nav-pricing': 'मूल्य निर्धारण',
        'nav-gallery': 'गैलरी',
        'nav-contact': 'संपर्क',
        'nav-reserve': 'बुक करें',
        'hero-title-1': 'जहाँ हर',
        'hero-title-2': 'उत्सव',
        'hero-title-3': 'एक महान गाथा बन जाता है।',
        'hero-btn-explore': 'हमारे स्थानों को देखें',
        'hero-btn-enquire': 'पूछताछ करें',
        'why-amor': 'अमोर इवेंट्स क्यों',
        'why-amor-title': 'पाँच कारण क्यों परिवार हमें चुनते हैं',
        'usp-1-h': 'कस्टम इवेंट प्लानिंग',
        'usp-1-p': 'पहले दिन से आपके लिए एक समर्पित इवेंट क्यूरेटर — आपका विज़न, आपकी कहानी, आपका उत्सव।',
        'usp-2-h': 'पाक उत्कृष्टता',
        'usp-2-p': 'इन-हाउस शेफ, 200+ मेनू विकल्प, लाइव काउंटर और हर पसंद के लिए कारीगरी खानपान।',
        'usp-3-h': '500+ आयोजनों की विरासत',
        'usp-3-p': 'शानदार शादियों और प्रतिष्ठित कॉर्पोरेट उत्सवों में 15 से अधिक वर्षों का निष्कलंक अनुभव।',
        'usp-4-h': 'पारदर्शी पैकेज',
        'usp-4-p': '₹1,50,000 से शुरू — हम हर चीज पर पूर्ण स्पष्टता के साथ सावधानीपूर्वक बजट पेश करते हैं।',
        'usp-5-h': 'प्रमुख बुनियादी ढांचा',
        'usp-5-p': 'अत्याधुनिक एवी, इमर्सिव लाइटिंग और मेहमानों के आराम के लिए डिजाइन की गई निर्बाध सुविधाएं।',
        'footer-tagline': 'जहाँ हर उत्सव एक महान गाथा बन जाता है।',
        'footer-explore': 'अन्वेषण करें',
        'footer-connect': 'जुड़ें',
        'footer-newsletter': 'न्यूज़लेटर',
        'footer-newsletter-p': 'इवेंट प्रेरणा और विशेष ऑफ़र के लिए सब्सक्राइब करें',
        'footer-join': 'शामिल हों',
        'footer-rights': '© 2024 अमोर इवेंट्स। सर्वाधिकार सुरक्षित।',
        'services-subtitle': 'हम क्या प्रदान करते हैं',
        'services-title': 'हमारी सेवाएं',
        'srv-corp-h': 'कॉर्पोरेट कार्यक्रम',
        'srv-corp-1': 'वार्षिक दिवस समारोह',
        'srv-corp-2': 'पुरस्कार समारोह',
        'srv-corp-3': 'सम्मेलन और सेमिनार',
        'srv-corp-4': 'उत्पाद लॉन्च',
        'srv-corp-5': 'टीम बिल्डिंग गतिविधियाँ',
        'srv-corp-6': 'डीलर / चैनल पार्टनर मीट',
        'srv-corp-7': 'ऑफसाइट बैठकें',
        'srv-wed-h': 'शादी और सामाजिक कार्यक्रम',
        'srv-wed-1': 'वेडिंग प्लानिंग (शुरुआत से अंत तक)',
        'srv-wed-2': 'सगाई समारोह',
        'srv-wed-3': 'मेहंदी और संगीत',
        'srv-wed-4': 'रिसेप्शन',
        'srv-wed-5': 'जन्मदिन की पार्टियाँ',
        'srv-wed-6': 'वर्षगांठ समारोह',
        'srv-wed-7': 'बेबी शावर / नामकरण समारोह',
        'srv-birth-h': 'जन्मदिन और वर्षगाँठ',
        'srv-birth-1': 'मील का पत्थर जन्मदिन (30, 40, 50, आदि)',
        'srv-birth-2': 'थीम पार्टियाँ',
        'srv-birth-3': 'हाउस पार्टियाँ',
        'srv-birth-4': 'सेवानिवृत्ति पार्टियाँ',
        'srv-birth-5': 'विदाई पार्टियाँ',
        'srv-ent-h': 'मनोरंजन और थीम आधारित कार्यक्रम',
        'srv-ent-1': 'डीजे और लाइव संगीत',
        'srv-ent-2': 'सेलिब्रिटी उपस्थिति',
        'srv-view-all': 'सभी सेवाएं देखें',
        'crest-subtitle': 'इवेंट मैनेजमेंट • मुंबई, भारत'
    }
};

function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Update active state in switcher
    document.querySelectorAll('.lang-btn').forEach(btn => {
        if (btn.getAttribute('data-lang') === lang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    localStorage.setItem('amor-eventz-lang', lang);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Language
    const savedLang = localStorage.getItem('amor-eventz-lang') || 'en';
    setLanguage(savedLang);

    // Language Toggle Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
        });
    });
    
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
