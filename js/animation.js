Portfolio.animations = {
    setupAnimations: function() {
        console.log("Setting up enhanced animations...");
        
        gsap.to('.background-gradient', {
            rotation: 360, 
            duration: 180, 
            repeat: -1, 
            ease: 'none'
        });
        
        this.createParticles();
        
        this.setupJapanTitleAnimation();
        
        this.addSubtleAnimations();
    },
    
    createParticles: function() {
        const particles = document.getElementById('particles');
        if (particles) {
            for (let i = 0; i < 20; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                
                const size = Math.random() * 8 + 3;
                particle.style.width = size + 'px';
                particle.style.height = size + 'px';
                
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                const colors = [
                    'rgba(151, 174, 118, 0.15)',
                    'rgba(163, 148, 194, 0.15)',
                    'rgba(233, 183, 168, 0.15)',
                    'rgba(228, 213, 183, 0.15)'
                ];
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                
                particles.appendChild(particle);
                
                gsap.to(particle, {
                    x: 'random(-60, 60)',
                    y: 'random(-80, 30)',
                    duration: 'random(15, 30)',
                    delay: Math.random() * 5,
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut',
                });
                
                gsap.to(particle, {
                    opacity: 'random(0.2, 0.6)',
                    scale: 'random(0.8, 1.2)',
                    duration: 'random(4, 8)',
                    repeat: -1,
                    yoyo: true,
                    ease: 'sine.inOut'
                });
            }
        }
    },
    
    setupJapanTitleAnimation: function() {
        const japanTitle = document.querySelector('.japan-title a');
        if (japanTitle) {
            gsap.fromTo(japanTitle, 
                { opacity: 0, y: -20, rotateX: -20 },
                { 
                    opacity: 1, 
                    y: 0, 
                    rotateX: 0,
                    duration: 1, 
                    ease: 'power3.out',
                    clearProps: 'rotateX'
                }
            );
            
            japanTitle.addEventListener('mousemove', (e) => {
                const rect = japanTitle.getBoundingClientRect();
                const x = e.clientX - rect.left; 
                const y = e.clientY - rect.top;
                
                const xPercent = (x / rect.width - 0.5) * 2;
                const yPercent = (y / rect.height - 0.5) * 2;
                
                gsap.to(japanTitle, {
                    rotateX: -yPercent * 10,
                    rotateY: xPercent * 10,
                    transformPerspective: 1000,
                    duration: 0.5,
                    ease: 'power2.out'
                });
            });
            
            japanTitle.addEventListener('mouseleave', () => {
                gsap.to(japanTitle, {
                    rotateX: 0,
                    rotateY: 0,
                    duration: 0.7,
                    ease: 'elastic.out(1, 0.5)'
                });
            });
        }
    },
    
    addSubtleAnimations: function() {
        gsap.to('.section-title', {
            y: -5,
            duration: 3,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        gsap.to('.card-container', {
            y: -8,
            duration: 5,
            repeat: -1,
            yoyo: true,
            ease: 'sine.inOut'
        });
        
        const buttons = document.querySelectorAll('.control-btn, .page-indicator, .btn, nav.main-nav a');
        buttons.forEach(button => {
            button.addEventListener('mouseenter', () => {
                gsap.to(button, {
                    scale: 1.05,
                    duration: 0.3,
                    ease: 'back.out(1.5)',
                    overwrite: true
                });
            });
            
            button.addEventListener('mouseleave', () => {
                gsap.to(button, {
                    scale: 1,
                    duration: 0.2,
                    ease: 'power2.out',
                    overwrite: true
                });
            });
        });
    },
    
    initParallax: function() {
        console.log("Initializing enhanced 3D parallax...");
        let lastX = 0, lastY = 0;
        const smoothFactor = 0.15;
    
        document.addEventListener('mousemove', (e) => {
            if (!document.getElementById('home')?.classList.contains('active')) return;
            
            const activeCard = document.querySelector('.card.active');
            if (!activeCard) return;
            
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            
            const mouseX = e.clientX;
            const mouseY = e.clientY;
            
            const targetX = (windowWidth / 2 - mouseX) / 40;
            const targetY = (windowHeight / 2 - mouseY) / 40;
            
            lastX = lastX + (targetX - lastX) * smoothFactor;
            lastY = lastY + (targetY - lastY) * smoothFactor;
            
            gsap.to(activeCard, {
                rotateY: lastX,
                rotateX: -lastY,
                x: lastX * 1.2,
                y: lastY * 1.2,
                z: 150,
                scale: 1.15,
                duration: 0.5,
                ease: "power2.out",
                overwrite: true
            });
            
            const cardContent = activeCard.querySelector('.card-content');
            if (cardContent) {
                gsap.to(cardContent, {
                    x: lastX * 0.5,
                    y: lastY * 0.5,
                    duration: 0.5,
                    ease: "power2.out",
                    overwrite: true
                });
            }
            
            gsap.to('.background-gradient', {
                x: -lastX * 5,
                y: -lastY * 5,
                duration: 1,
                ease: "power1.out",
                overwrite: true
            });
            
            const otherCards = document.querySelectorAll('.card:not(.active)');
            otherCards.forEach(card => {
                const depth = card.style.zIndex || 0;
                const depthFactor = Math.max(0.1, Math.abs(depth) / 100);
                
                gsap.to(card, {
                    x: lastX * 0.8 * depthFactor,
                    y: lastY * 0.8 * depthFactor,
                    duration: 0.8,
                    ease: "power2.out",
                    overwrite: true
                });
            });
        });
        
        document.addEventListener('mouseleave', () => {
            const activeCard = document.querySelector('.card.active');
            if (activeCard) {
                gsap.to(activeCard, {
                    rotateY: 0,
                    rotateX: 0,
                    x: 0,
                    y: 0,
                    scale: 1.15,
                    duration: 0.8,
                    ease: "elastic.out(1, 0.8)"
                });
                
                const cardContent = activeCard.querySelector('.card-content');
                if (cardContent) {
                    gsap.to(cardContent, {
                        x: 0, 
                        y: 0,
                        duration: 0.8,
                        ease: "elastic.out(1, 0.8)"
                    });
                }
            }
            
            const otherCards = document.querySelectorAll('.card:not(.active)');
            otherCards.forEach(card => {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    duration: 0.8,
                    ease: "power2.out"
                });
            });
            
            gsap.to('.background-gradient', {
                x: 0,
                y: 0,
                duration: 1.2,
                ease: "power1.out"
            });
            
            lastX = lastY = 0;
        });
        
        const aboutPage = document.getElementById('about');
        if (aboutPage) {
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.target.classList.contains('active') && mutation.target.id === 'about') {
                        this.setupAboutPageParallax();
                    }
                });
            });
            
            observer.observe(aboutPage, { attributes: true, attributeFilter: ['class'] });
        }
    },
    
    setupAboutPageParallax: function() {
        const aboutElements = document.querySelectorAll('.about-content h3, .about-content p, .glass-card');
        
        aboutElements.forEach((el, index) => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top bottom-=100",
                    end: "bottom top+=100",
                    scrub: true,
                    toggleActions: "play none none reverse"
                },
                y: (index % 2 === 0) ? -15 : -10,
                z: 10,
                opacity: 1,
                duration: 1
            });
        });
    },
    
    enhancePageTransitions: function() {
        const originalShowNewPage = Portfolio.navigation.showNewPage;
        
        Portfolio.navigation.showNewPage = function(targetPage, pageId) {
            gsap.set(targetPage, {
                visibility: 'visible', 
                opacity: 0, 
                y: 30, 
                scale: 0.95,
                rotateX: 10
            });
            
            targetPage.classList.add('active');
            
            gsap.to(targetPage, {
                opacity: 1, 
                y: 0, 
                scale: 1,
                rotateX: 0,
                duration: 0.75, 
                ease: "power3.out",
                clearProps: "rotateX"
            });
            
            if (pageId === 'about') {
                const sectionTitle = targetPage.querySelector('.section-title');
                const glassCard = targetPage.querySelector('.glass-card');
                
                if (sectionTitle) {
                    gsap.fromTo(sectionTitle, 
                        { opacity: 0, y: -25, rotateX: -5 },
                        { opacity: 1, y: 0, rotateX: 0, duration: 0.6, delay: 0.1, ease: "power3.out" });
                }
                
                if (glassCard) {
                    gsap.fromTo(glassCard,
                        { opacity: 0, y: 40, scale: 0.97, rotateX: 5 },
                        { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 0.7, delay: 0.2, ease: "power3.out" });
                }
                
                const aboutElements = targetPage.querySelectorAll('.about-content h3, .about-content p');
                gsap.fromTo(aboutElements, 
                    { opacity: 0, y: 20 },
                    { opacity: 1, y: 0, duration: 0.5, stagger: 0.08, delay: 0.3, ease: "power2.out" });
            }
        };
    },
    
    enhanceCarouselAnimations: function() {
        const originalArrangeCards = Portfolio.carousel.arrangeCards;
        
        Portfolio.carousel.arrangeCards = function() {
            originalArrangeCards.call(this);
            
            const cards = document.querySelectorAll('.card');
            const activeIndex = Portfolio.data.activeIndex;
            
            cards.forEach((card, index) => {
                const distanceFromCenter = Math.abs(index - activeIndex);
                const delay = 0.05 * distanceFromCenter;
                
                if (index === activeIndex) {
                    gsap.fromTo(card, 
                        { scale: 1.05, y: -10 },
                        { 
                            scale: 1.15, 
                            y: 0,
                            duration: 0.5, 
                            delay: 0.1,
                            ease: "back.out(1.7)",
                            clearProps: "y" 
                        }
                    );
                } else if (distanceFromCenter === 1) {
                    gsap.fromTo(card,
                        { scale: 0.95, y: -5 },
                        {
                            scale: 1,
                            y: 0,
                            duration: 0.4,
                            delay: delay,
                            ease: "back.out(1.5)",
                            clearProps: "y"
                        }
                    );
                } else {
                    gsap.fromTo(card,
                        { scale: 0.9, y: -3 },
                        {
                            scale: 1,
                            y: 0,
                            duration: 0.3,
                            delay: delay,
                            ease: "power2.out",
                            clearProps: "y"
                        }
                    );
                }
            });
        };
        
        const originalNavigateToCard = Portfolio.carousel.navigateToCard;
        
        Portfolio.carousel.navigateToCard = function(index) {
            const cards = document.querySelectorAll('.card');
            const currentIndex = Portfolio.data.activeIndex;
            
            if (index !== currentIndex && index >= 0 && index < Portfolio.data.projects.length) {
                const direction = index > currentIndex ? 1 : -1;
                
                cards.forEach(card => {
                    gsap.to(card, {
                        scale: '*=0.95',
                        opacity: '*=0.9',
                        duration: 0.15,
                        ease: "power1.in",
                        onComplete: () => {
                            gsap.to(card, {
                                scale: '*=1.05',
                                opacity: '*=1.11',
                                duration: 0.3,
                                ease: "back.out(1.7)"
                            });
                        }
                    });
                });
            }
            
            originalNavigateToCard.call(this, index);
        };
    }
};

document.addEventListener('DOMContentLoaded', function() {
    if (typeof Portfolio !== 'undefined' && Portfolio.init) {
        const originalInit = Portfolio.init;
        
        Portfolio.init = function() {
            originalInit.call(this);
            
            Portfolio.animations.enhancePageTransitions();
            
            Portfolio.animations.enhanceCarouselAnimations();
            
            window.addEventListener('load', function() {
                setTimeout(function() {
                    const activeElements = document.querySelectorAll('.active');
                    activeElements.forEach(el => {
                        gsap.fromTo(el, 
                            { opacity: 0.9, y: 10 },
                            { opacity: 1, y: 0, duration: 0.5, ease: "power2.out" }
                        );
                    });
                }, 500);
            });
        };
    } else {
        console.error("Portfolio object not found. Animation enhancements not applied.");
    }
});