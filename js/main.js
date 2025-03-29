window.Portfolio = window.Portfolio || {};

gsap.registerPlugin(ScrollTrigger);

Portfolio.data = {
    projects: [
        { 
            id: 1, 
            title: "Name Me", 
            subtitle: "Mini App Design Project", 
            image: "./nmpic/nmmain.jpg",
            heroImage: "./nmpic/nmmain.jpg",
            
            role: "UX Designer, Interaction Designer",
            duration: "3 Days",
            
            overview: "Name Me is an AI-powered naming application designed to bridge cultural and linguistic gaps, fostering global communication and connectivity. It helps users find meaningful names that resonate across different backgrounds, making communication more inclusive and accessible. Our goal was to craft an experience that felt like a personal guide rather than just another AI tool—something that celebrates identity, rather than reducing it to an algorithmic suggestion.",
            
            team: [
                { name: "June Lee", role: "UX / UI Designer" },
                { name: "Alohaensen Oncai", role: "Graphic Design" },
            ],
            
            roleCard: {
                title: "My Role",
                content: "UX Designer, Interaction Designer"
            },
            teamCard: {
                title: "Team"
            },
            durationCard: {
                title: "Timeline",
                content: "3 days"
            },
            
            sections: [
                {
                    "title": "Understanding the Problem",
                    "content": "Names carry history, culture, and identity, yet they often get lost in translation. Through user research and personal conversations, we found that many people struggle with choosing names that are culturally respectful, phonetically clear, and meaningful across different languages. Imagine the excitement of naming a startup or a newborn, only to realize later that the name has an unintended meaning elsewhere. We wanted to create a tool that feels like a trusted friend—one that understands nuances and helps navigate this journey with ease."
                },
                {
                    title: "SEAM app overview",
                    content: "SEAM is a social network that empowers users to create and share open-source miniapps, fostering a community of online creatives who showcase their work, curate inspiration, and collaborate with peers. In the SEAM Mini App Design Challenge, participants are invited to design innovative miniapps that enhance the sharing experience within the SEAM community.",
                },
                {
                    title: "Ideation - Branding",
                    content: "How do you visualize something as abstract as identity and meaning? Our branding journey was full of sketches, mood boards, and debates over typography and colors. We wanted Name Me to feel like an intersection of the personal and the universal—something that feels as friendly as a conversation yet as powerful as a linguistic database.",
                    gallery: [
                        {
                            src: "./nmpic/nmideation1.png",
                            alt: "Ideation - Logo",
                        },
                        {
                            src: "./nmpic/nmideation2.png",
                            alt: "Ideation - Basic Design",
                        },
                    ]
                },
                {
                    title: "Design Process - Lofi",
                    content: "The low-fi phase was all about speed and structure. We stripped everything down to its bare essentials—what are the absolute must-haves? Users needed to be able to search, customize, and explore meanings without friction. Our early testers gave us invaluable insights, like the need for an intuitive search function and real-time name analysis.",
                    image: {
                        src: "./nmpic/nmlowfi.png",
                        alt: "Wire frame - Lowfi",
                    }
                },
                {
                    title: "Design Process - Midfi Refinements",
                    content: "Now, things started to take shape. We layered in colors, refined the interactions, and built a seamless flow. Users told us they wanted a guided experience—so we introduced smart recommendations and contextual explanations. This wasn't just about listing names; it was about telling stories behind them.",
                    image: {
                        src: "./nmpic/nmmidfi.png",
                        alt: "Wire frame - Midfi",
                    }
                },
                {
                    title: "Final Design - Highfi Flow",
                    content: "The final design was where everything clicked. We refined micro-interactions to make browsing feel smooth and natural. Our usability tests showed that people loved the ability to explore names through a blend of cultural references, phonetics, and personal preferences. We even had users tell us they discovered names they had never considered before—exactly the kind of discovery moment we were hoping to create.",
                    image: {
                        src: "./nmpic/nmhififlow.png",
                        alt: "Wire frame - Highfi flow",
                    },
                },
                {
                    title: "Final Design - Highfi Concept",
                    content: "The final design was where everything clicked. We refined micro-interactions to make browsing feel smooth and natural. Our usability tests showed that people loved the ability to explore names through a blend of cultural references, phonetics, and personal preferences. We even had users tell us they discovered names they had never considered before—exactly the kind of discovery moment we were hoping to create.",
                    image: {
                        src: "./nmpic/nmhificoncept.png",
                        alt: "Wire frame - Highfi concept",
                    }
                },
                {
                    title: "Final Design - Vision",
                    content: "Name Me isn't just an app; it's a statement about inclusivity in communication. In a world where global conversations are more common than ever, we believe tools like this can help create connections that go beyond language barriers. Whether you're naming a project, a business, or even yourself, Name Me is here to guide you through the process with meaning and respect.",
                    image: {
                        src: "./nmpic/nmmainfin.jpg",
                        alt: "Fin",
                    }
                }
            ],
        },
        { 
            id: 2, 
            title: "Google Nest Redesign", 
            subtitle: "Creating a Future Workplace Experience", 
            image: "./nepic/nemain.jpg",
            heroImage: "./nepic/nemain.jpg",
            
            role: "UX Designer, Interaction Designer",
            duration: "10 Weeks",
            
            overview: "This redesign of Google Nest reimagines how smart home technology can enhance shared workspaces. By integrating AI-driven sensors and personalized preferences, the new Google Nest system fosters a cooperative and comfortable environment for future employees. The goal was to create a solution that seamlessly balances individual comfort with group dynamics, ensuring an efficient and adaptable workspace.",
            
            team: [
                { name: "Chris DeMassa", role: "Project Lead" },
                { name: "Alana Banister", role: "Writer / Narrative" },
                { name: "Daniel Koucheravy", role: "Development" },
                { name: "Hyunsoo Eun", role: "Interaction Design" },
                { name: "Brian Glennon", role: "UI Design" }
            ],
            
            roleCard: {
                title: "My Role",
                content: "UX Designer, Interaction Designer"
            },
            teamCard: {
                title: "Team"
            },
            durationCard: {
                title: "Timeline",
                content: "10 weeks"
            },
            
            sections: [
                {
                    title: "Understanding the Challenge",
                    content: "The modern workplace is evolving, and employees seek an environment that adapts to their personal needs while maintaining harmony with colleagues. Our redesign of Google Nest introduces AI-driven climate control and smart collaboration features, creating an intuitive system that fosters productivity and well-being."
                },
                {
                    title: "Ideation & Branding",
                    content: "We focused on balancing personalization with teamwork. Employees can adjust climate and lighting based on their preferences while AI ensures overall comfort across shared spaces. The branding emphasizes a seamless, user-friendly experience that aligns with Google's design ethos.",
                    gallery: [
                        {
                            src: "./nepic/nebranding1.png",
                            alt: "Typography",
                        },
                        {
                            src: "./nepic/nebranding2.png",
                            alt: "Colors",
                        }
                    ]
                },
                {
                    title: "Wireframing & Low-Fidelity Prototyping",
                    content: "The low-fidelity designs prioritized accessibility and visibility. Key controls, such as temperature adjustment and mode selection, were made intuitive with high-contrast elements and clear iconography. This phase ensured a smooth interaction flow without unnecessary complexity.",
                    gallery: [
                        {
                            src: "./nepic/newireframe.png",
                            alt: "Wireframe",
                        },
                        {
                            src: "./nepic/newireflow.png",
                            alt: "Wireflow",
                        }
                    ]
                },
                {
                    title: "Final Design - Device Component",
                    content: "The high-fidelity design introduces an adaptive display that adjusts brightness and contrast based on ambient light. With smooth animations, haptic feedback, and real-time climate indicators, the interface creates an effortless experience for users looking to fine-tune their surroundings.",
                    gallery: [
                        {
                            src: "./nepic/nedc1.png",
                            alt: "Device Components",
                        },
                        {
                            src: "./nepic/nedc2.png",
                            alt: "Device Components",
                        }
                    ]
                },
                {
                    title: "Final Design - High Fidelity",
                    content: "The redesigned Google Nest app extends control beyond the physical device, enabling employees to adjust their workspace settings remotely. With AI-driven recommendations and real-time data visualization, users can optimize their environment with just a few taps. The app was designed with a focus on ease of use, ensuring that even non-tech-savvy users can seamlessly personalize their workspace.",
                    image: {
                        src: "./nepic/nehifi1.png",
                        alt: "High-Fidelity App"
                    }
                },
                {
                    title: "Final Design - Device Interface",
                    content: "The high-fidelity design of the Google Nest device enhances user interaction with an intuitive and responsive interface. The device features an adaptive display that adjusts brightness based on ambient light, ensuring clear visibility at all times. Smooth animations and haptic feedback provide a tactile experience, reinforcing key actions such as temperature adjustments and mode switching. The dynamic temperature dial and real-time climate indicators make managing workplace comfort effortless and engaging.",
                    image: {
                        src: "./nepic/nehifi2.png",
                        alt: "High-Fidelity Device"
                    }
                },
                {
                    title: "Final Vision - A Smarter, More Connected Workplace",
                    content: "Our Google Nest redesign transforms the office into an adaptive ecosystem where every employee has a voice in shaping their environment. Picture an office where employees no longer have to argue over the thermostat—Nest's AI-driven system learns from preferences and finds an optimal balance for everyone. By combining individual preference with collective cooperation, the system ensures comfort, efficiency, and sustainability in the workplace of the future.",
                    image: {
                        src: "./nepic/nevision1.jpg",
                        alt: "Final Design Vision"
                    }
                }
            ]
        },
        { 
            id: 3, 
            title: "Website", 
            subtitle: "Coming soone", 
        },
        { 
            id: 4, 
            title: "Telfair Museum", 
            subtitle: "Coming soon", 
            image: "./mainpic/tmmain.jpg",
            heroImage: "./mainpic/tmmain.jpg",
            overview: "",
        },
        { 
            id: 5, 
            title: "GoodRead Redesign", 
            subtitle: "Enhancing Community Engagement for Readers", 
            image: "./gdpic/gdmain.jpg",
            heroImage: "./gdpic/gdmain.jpg",
            
            role: "UX/UI Designer, UX Researcher",
            duration: "1 Day",
            
            overview: "GoodReads is a widely recognized platform among readers, offering a space to discover books, share reviews, and connect with fellow enthusiasts. However, despite its popularity, the platform's user interface has remained largely unchanged for years. This redesign focuses on improving readability, enhancing engagement, and refining the review experience to foster a more seamless and enjoyable user journey.",
            
            team: [
                { name: "Pranav Jakhar", role: "Motion Media Designer" }
            ],
            
            roleCard: {
                title: "My Role",
                content: "UX/UI Designer, UX Researcher"
            },
            teamCard: {
                title: "Team"
            },
            durationCard: {
                title: "Timeline",
                content: "1 day"
            },
            
            sections: [
                {
                    title: "Understanding the Need for Change",
                    content: "GoodReads has a massive community of passionate readers, but its outdated design limits user experience. The review section, a core feature for engagement, often feels cluttered and repetitive. We identified key pain points through user research, including information overload, inefficient navigation, and lack of personalization. Our redesign aimed to refine the structure while preserving the essence of what makes GoodReads valuable."
                },
                {
                    title: "Research & Ideation",
                    content: "We started by analyzing how users interact with book reviews. Feedback from the community highlighted the need for better organization, clearer UI elements, and a more engaging visual hierarchy. Our goal was to create an interface that feels modern, intuitive, and fosters interaction, all while maintaining the platform's familiar community-driven essence.",
                    gallery: [
                        {
                            src: "./gdpic/gdbefore.png",
                            alt: "Before review section",
                        },
                        {
                            src: "./gdpic/gdbefore2.png",
                            alt: "Before Profile picture",
                        }
                    ]
                },
                {
                    title: "Initial Sketch",
                    content: "",
                    image: {
                        src: "./gdpic/gdsketch.png",
                        alt: "Initial Sketch"
                    }
                },
                {
                    title: "Wireframing & Low-Fidelity Prototyping",
                    content: "The low-fidelity wireframes set the foundation for a more streamlined experience. By focusing on readability, we implemented improved typography, collapsible sections, and clear call-to-action buttons. This phase ensured that navigation was intuitive, reducing cognitive load while enhancing usability.",
                    image: {
                        src: "./gdpic/gdinfoarch.png",
                        alt: "Low-Fidelity Wireframe"
                    }
                },
                {
                    title: "Final Design - High-Fidelity UI",
                    content: "The high-fidelity design brings the vision to life with a refined interface that feels welcoming and dynamic. We focused on bold yet minimalistic elements, ensuring an inclusive and community-oriented aesthetic. Interactive elements such as underlines, subtle shading, and collapsible sections improve readability and engagement. The redesigned layout ensures that reviews are easy to browse, empowering users to share their opinions effortlessly.",
                    image: {
                        src: "./gdpic/gdmain.jpg",
                        alt: "High-Fidelity UI"
                    }
                },
                {
                    title: "Final Vision - A Platform That Grows with Its Community",
                    content: "Our redesign of GoodReads enhances the platform's core purpose—bringing readers together through shared experiences. By modernizing the review system, we empower users to express themselves more effectively and discover books in a way that feels organic and engaging. The new interface creates a balance between usability and aesthetics, making GoodReads a more inviting space for book lovers worldwide.",
                },
                {
                    title: "Vision Video",
                    content: "",
                    video: {
                        src: "./gdpic/FLuxathon_Pranav&Min.mp4",
                        type: "video/mp4",
                        poster: "./gdpic/FLuxathon_Pranav&Min.mp4",
                        size: "full", 
                        autoplay: false,
                        muted: false,
                        loop: false
                    }
                },
            ]
        }
        
    ],
    elements: {
        cardContainer: null,
        prevBtn: null,
        nextBtn: null,
        paginationText: null,
        navLinks: null
    },
    activeIndex: 2
};

Portfolio.animations = {
    setupAnimations: function() {
        console.log("Setting up animations...");
        gsap.to('.background-gradient', {
            rotation: 360, 
            duration: 180, 
            repeat: -1, 
            ease: 'none'
        });
        
        const particles = document.getElementById('particles');
        if (particles) {
            for (let i = 0; i < 15; i++) {
                const particle = document.createElement('div');
                particle.className = 'particle';
                particle.style.width = Math.random() * 8 + 4 + 'px';
                particle.style.height = particle.style.width;
                particle.style.left = Math.random() * 100 + '%';
                particle.style.top = Math.random() * 100 + '%';
                
                particles.appendChild(particle);
                
                gsap.to(particle, {
                    x: 'random(-40, 40)', y: 'random(-60, 20)',
                    duration: 'random(15, 25)', repeat: -1, yoyo: true,
                    ease: 'sine.inOut'
                });
            }
        }
        
        gsap.fromTo('.japan-title a', 
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.6, ease: 'power2.out' }
        );
    },
    
    initParallax: function() {
        console.log("Initializing parallax...");
        let lastX = 0, lastY = 0;
        const smoothFactor = 0.25;
    
        document.addEventListener('mousemove', (e) => {
            if (!document.getElementById('home')?.classList.contains('active')) return;
            
            const activeCard = document.querySelector('.card.active');
            if (!activeCard) return;
            
            const targetX = (window.innerWidth / 2 - e.clientX) / 45;
            const targetY = (window.innerHeight / 2 - e.clientY) / 45;
            
            lastX = lastX + (targetX - lastX) * smoothFactor;
            lastY = lastY + (targetY - lastY) * smoothFactor;
            
            gsap.to(activeCard, {
                rotationY: lastX / 2, 
                rotationX: -lastY / 2,
                x: lastX, 
                y: lastY, 
                duration: 0.1, 
                ease: "none", 
                overwrite: true
            });
        });
        
        document.addEventListener('mouseleave', () => {
            const activeCard = document.querySelector('.card.active');
            if (activeCard) {
                gsap.to(activeCard, {
                    rotationY: 0,
                    rotationX: 0,
                    x: 0,
                    y: 0,
                    duration: 0.4,
                    ease: "power2.out"
                });
                lastX = lastY = 0;
            }
        });
    }
};

Portfolio.navigation = {
    navigateToPage: function(pageId) {
        console.log("Navigating to page:", pageId);
        const currentActivePage = document.querySelector('.page.active');
        const targetPage = document.getElementById(pageId);
        
        if (!targetPage) {
            console.error("Target page not found:", pageId);
            return;
        }
        
        if (currentActivePage && currentActivePage.id === pageId) {
            return;
        }
        
        const navLinks = Portfolio.data.elements.navLinks;
        if (navLinks) {
            navLinks.forEach(link => {
                if (link.dataset.page === pageId) {
                    link.classList.add('active');
                    gsap.to(link, {scale: 1.05, duration: 0.3, ease: "power1.out"});
                } else {
                    link.classList.remove('active');
                    gsap.to(link, {scale: 1, duration: 0.2, ease: "power1.out"});
                }
            });
        }
        
        const japanTitle = document.querySelector('.japan-title a');
        if (japanTitle) {
            const newJapanTitle = japanTitle.cloneNode(true);
            japanTitle.parentNode.replaceChild(newJapanTitle, japanTitle);
            
            newJapanTitle.addEventListener('click', (e) => {
                console.log('Japan title clicked');
                e.preventDefault();
                e.stopPropagation();
                
                Portfolio.navigation.navigateToPage('home');
            });
            
            document.querySelector('.japan-title').addEventListener('click', (e) => {
                e.preventDefault();
                Portfolio.navigation.navigateToPage('home');
            });
        }
        
        gsap.timeline()
            .to('.background-gradient', {opacity: 0.2, duration: 0.2})
            .to('.background-gradient', {opacity: 0.3, duration: 0.2});
        
        if (currentActivePage) {
            gsap.to(currentActivePage, {
                opacity: 0, 
                y: -5, 
                scale: 0.98, 
                duration: 0.3,
                onComplete: () => {
                    currentActivePage.classList.remove('active');
                    currentActivePage.style.visibility = 'hidden';
                    
                    Portfolio.navigation.showNewPage(targetPage, pageId);
                }
            });
        } else {
            Portfolio.navigation.showNewPage(targetPage, pageId);
        }
    },
    
    showNewPage: function(targetPage, pageId) {
        gsap.set(targetPage, {
            visibility: 'visible', 
            opacity: 0, 
            y: 15, 
            scale: 0.97
        });
        
        targetPage.classList.add('active');
        
        gsap.to(targetPage, {
            opacity: 1, 
            y: 0, 
            scale: 1, 
            duration: 0.35, 
            ease: "power2.out"
        });
        
        if (pageId === 'about') {
            const sectionTitle = targetPage.querySelector('.section-title');
            const glassCard = targetPage.querySelector('.glass-card');
            
            if (sectionTitle) {
                gsap.fromTo(sectionTitle, 
                    {opacity: 0, y: -15},
                    {opacity: 1, y: 0, duration: 0.3, delay: 0.1});
            }
            
            if (glassCard) {
                gsap.fromTo(glassCard,
                    {opacity: 0, y: 20, scale: 0.98},
                    {opacity: 1, y: 0, scale: 1, duration: 0.35, delay: 0.15});
            }
            
            const aboutElements = targetPage.querySelectorAll('.about-content h3, .about-content p');
            gsap.fromTo(aboutElements, 
                {opacity: 0, y: 10},
                {opacity: 1, y: 0, duration: 0.3, stagger: 0.05, delay: 0.2});
        }
    }
};

Portfolio.init = function() {
    console.log("Initializing application...");
    if (typeof gsap === 'undefined') {
        console.error('GSAP not loaded!');
        return;
    }
    
    const elements = Portfolio.data.elements;
    elements.cardContainer = document.getElementById('cardContainer');
    elements.prevBtn = document.getElementById('prevBtn');
    elements.nextBtn = document.getElementById('nextBtn');
    elements.paginationText = document.getElementById('paginationText');
    elements.navLinks = document.querySelectorAll('.nav-link');
    
    Portfolio.animations.setupAnimations();
    
    Portfolio.carousel.createCards();
    
    const japanTitle = document.querySelector('.japan-title a');
    if (japanTitle) {
        japanTitle.addEventListener('click', (e) => {
            e.preventDefault();
            Portfolio.navigation.navigateToPage('home');
        });
    }
    
    if (elements.prevBtn) {
        let prevBtnAnimation = null;
        
        elements.prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (prevBtnAnimation) prevBtnAnimation.kill();
            
            prevBtnAnimation = gsap.timeline({
                onComplete: () => { prevBtnAnimation = null; }
            });
            
            prevBtnAnimation.to(elements.prevBtn, {
                scale: 0.85,
                duration: 0.1,
                ease: "power1.in"
            }).to(elements.prevBtn, {
                scale: 1,
                duration: 0.4,
                ease: "elastic.out(1.2, 0.5)"
            });
            
            const cards = document.querySelectorAll('.card');
            gsap.to(cards, {
                x: "+=30",
                duration: 0.1,
                ease: "power1.in",
                onComplete: () => {
                    Portfolio.carousel.navigateToCard(Portfolio.data.activeIndex - 1);
                }
            });
        });
        
        elements.prevBtn.addEventListener('mouseenter', () => {
            if (!prevBtnAnimation) {
                gsap.to(elements.prevBtn, {
                    scale: 1.08,
                    boxShadow: "0 0 15px rgba(163, 148, 194, 0.3)",
                    duration: 0.2, 
                    ease: "power1.out"
                });
            }
        });
        
        elements.prevBtn.addEventListener('mouseleave', () => {
            if (!prevBtnAnimation) {
                gsap.to(elements.prevBtn, {
                    scale: 1,
                    boxShadow: "none",
                    duration: 0.2, 
                    ease: "power1.out"
                });
            }
        });
    }
    
    if (elements.nextBtn) {
        let nextBtnAnimation = null;
        
        elements.nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            
            if (nextBtnAnimation) nextBtnAnimation.kill();
            
            nextBtnAnimation = gsap.timeline({
                onComplete: () => { nextBtnAnimation = null; }
            });
            
            nextBtnAnimation.to(elements.nextBtn, {
                scale: 0.85,
                duration: 0.1,
                ease: "power1.in"
            }).to(elements.nextBtn, {
                scale: 1,
                duration: 0.4,
                ease: "elastic.out(1.2, 0.5)"
            });
            
            const cards = document.querySelectorAll('.card');
            gsap.to(cards, {
                x: "-=30",
                duration: 0.1,
                ease: "power1.in",
                onComplete: () => {
                    Portfolio.carousel.navigateToCard(Portfolio.data.activeIndex + 1);
                }
            });
        });
        
        elements.nextBtn.addEventListener('mouseenter', () => {
            if (!nextBtnAnimation) {
                gsap.to(elements.nextBtn, {
                    scale: 1.08,
                    boxShadow: "0 0 15px rgba(163, 148, 194, 0.3)",
                    duration: 0.2, 
                    ease: "power1.out"
                });
            }
        });
        
        elements.nextBtn.addEventListener('mouseleave', () => {
            if (!nextBtnAnimation) {
                gsap.to(elements.nextBtn, {
                    scale: 1,
                    boxShadow: "none", 
                    duration: 0.2, 
                    ease: "power1.out"
                });
            }
        });
    }
    
    if (elements.navLinks) {
        elements.navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                if (link.dataset.page) {
                    Portfolio.navigation.navigateToPage(link.dataset.page);
                }
            });
        });
    }
    
    Portfolio.animations.initParallax();
    
    let keyNavigationEnabled = true;
    document.addEventListener('keydown', (e) => {
        if (!keyNavigationEnabled) return;
        
        const cards = document.querySelectorAll('.card');
        
        if (e.key === 'ArrowLeft') {
            keyNavigationEnabled = false;
            
            gsap.to(cards, {
                x: "+=20",
                duration: 0.1,
                ease: "power1.in",
                onComplete: () => {
                    Portfolio.carousel.navigateToCard(Portfolio.data.activeIndex - 1);
                }
            });
            
            setTimeout(() => { keyNavigationEnabled = true; }, 600);
        } 
        else if (e.key === 'ArrowRight') {
            keyNavigationEnabled = false;
            
            gsap.to(cards, {
                x: "-=20",
                duration: 0.1,
                ease: "power1.in",
                onComplete: () => {
                    Portfolio.carousel.navigateToCard(Portfolio.data.activeIndex + 1);
                }
            });
            
            setTimeout(() => { keyNavigationEnabled = true; }, 600);
        }
    });
    
    if (window.location.hash) {
        const hash = window.location.hash.substring(1);
        if (['home', 'about'].includes(hash)) {
            Portfolio.navigation.navigateToPage(hash);
        }
    }
};

document.addEventListener('DOMContentLoaded', Portfolio.init);
