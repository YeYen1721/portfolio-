Portfolio.carousel = {
    initBeforeAfterSliders: function(container) {
        if (!container) return;
        
        try {
            const sliders = container.querySelectorAll('.before-after-container');
            
            sliders.forEach(slider => {
                const handle = slider.querySelector('.slider-handle');
                const beforeImage = slider.querySelector('.before-image');
                const afterImage = slider.querySelector('.after-image');
                
                if (!handle || !beforeImage || !afterImage) return;
                
                gsap.set(beforeImage, { width: '50%' });
                gsap.set(handle, { left: '50%' });
                
                let isDragging = false;
                
                const updateSlider = (x) => {
                    const rect = slider.getBoundingClientRect();
                    const percentage = Math.max(0, Math.min(100, (x - rect.left) / rect.width * 100));
                    
                    gsap.set(beforeImage, { width: `${percentage}%` });
                    gsap.set(handle, { left: `${percentage}%` });
                };
                
                handle.addEventListener('mousedown', () => {
                    isDragging = true;
                    slider.classList.add('active');
                });
                
                document.addEventListener('mousemove', (e) => {
                    if (isDragging) {
                        updateSlider(e.clientX);
                    }
                });
                
                document.addEventListener('mouseup', () => {
                    if (isDragging) {
                        isDragging = false;
                        slider.classList.remove('active');
                    }
                });
                
                handle.addEventListener('touchstart', (e) => {
                    isDragging = true;
                    slider.classList.add('active');
                    e.preventDefault();
                });
                
                document.addEventListener('touchmove', (e) => {
                    if (isDragging && e.touches[0]) {
                        updateSlider(e.touches[0].clientX);
                        e.preventDefault();
                    }
                });
                
                document.addEventListener('touchend', () => {
                    if (isDragging) {
                        isDragging = false;
                        slider.classList.remove('active');
                    }
                });
                
                slider.addEventListener('click', (e) => {
                    if (e.target !== handle) {
                        updateSlider(e.clientX);
                    }
                });
            });
        } catch (error) {
            console.error("Error initializing before/after sliders:", error);
        }
    },
    
    initImageLightbox: function(container) {
        if (!container) return;
        
        try {
            const images = container.querySelectorAll('.section-image img, .image-grid img, .image-container img, .slider-slide img');
            
            if (!images.length) return;
            
            const lightbox = document.createElement('div');
            lightbox.className = 'project-lightbox';
            lightbox.innerHTML = `
                <div class="lightbox-overlay"></div>
                <div class="lightbox-container">
                    <img src="" alt="Enlarged image" class="lightbox-image">
                    <div class="lightbox-close">×</div>
                    <div class="lightbox-caption"></div>
                </div>
            `;
            
            document.body.appendChild(lightbox);
            
            const lightboxOverlay = lightbox.querySelector('.lightbox-overlay');
            const lightboxContainer = lightbox.querySelector('.lightbox-container');
            const lightboxImage = lightbox.querySelector('.lightbox-image');
            const lightboxClose = lightbox.querySelector('.lightbox-close');
            const lightboxCaption = lightbox.querySelector('.lightbox-caption');
            
            gsap.set(lightbox, { display: 'none', autoAlpha: 0 });
            
            images.forEach(img => {
                img.style.cursor = 'zoom-in';
                
                img.addEventListener('click', (e) => {
                    if (e.target.closest('.slider-track') && !e.metaKey && !e.ctrlKey) {
                        return;
                    }
                    
                    lightboxImage.src = img.src;
                    lightboxCaption.textContent = img.alt;
                    
                    gsap.set(lightbox, { display: 'block' });
                    gsap.to(lightbox, { autoAlpha: 1, duration: 0.3 });
                    gsap.fromTo(lightboxContainer, 
                        { scale: 0.8, opacity: 0 },
                        { scale: 1, opacity: 1, duration: 0.4, ease: 'back.out(1.2)' }
                    );
                });
            });
            
            if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);
            if (lightboxOverlay) lightboxOverlay.addEventListener('click', closeLightbox);
            
            function closeLightbox() {
                gsap.to(lightboxContainer, { 
                    scale: 0.8, 
                    opacity: 0, 
                    duration: 0.3,
                    onComplete: () => {
                        gsap.to(lightbox, { 
                            autoAlpha: 0, 
                            duration: 0.2,
                            onComplete: () => {
                                gsap.set(lightbox, { display: 'none' });
                            }
                        });
                    }
                });
            }
            
            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && lightbox.style.display !== 'none') {
                    closeLightbox();
                }
            });
            
            const lightboxStyles = document.createElement('style');
            lightboxStyles.textContent = `
                .project-lightbox {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    z-index: 2000;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                
                .lightbox-overlay {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background-color: rgba(0, 0, 0, 0.9);
                    backdrop-filter: blur(5px);
                }
                
                .lightbox-container {
                    position: relative;
                    max-width: 90%;
                    max-height: 90%;
                    z-index: 2001;
                }
                
                .lightbox-image {
                    display: block;
                    max-width: 100%;
                    max-height: 90vh;
                    object-fit: contain;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    box-shadow: 0 5px 30px rgba(0, 0, 0, 0.5);
                }
                
                .lightbox-close {
                    position: absolute;
                    top: -40px;
                    right: 0;
                    width: 40px;
                    height: 40px;
                    background: rgba(30, 40, 55, 0.8);
                    color: white;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 24px;
                    cursor: pointer;
                    transition: background 0.3s ease, transform 0.3s ease;
                }
                
                .lightbox-close:hover {
                    background: rgba(40, 50, 70, 0.9);
                    transform: scale(1.1);
                }
                
                .lightbox-caption {
                    position: absolute;
                    bottom: -40px;
                    left: 0;
                    width: 100%;
                    text-align: center;
                    color: white;
                    font-size: 16px;
                    padding: 10px;
                    background: rgba(30, 40, 55, 0.8);
                    border-radius: 5px;
                }
            `;
            document.head.appendChild(lightboxStyles);
            
            const closeBtn = container.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    if (lightbox && lightbox.parentNode) {
                        lightbox.parentNode.removeChild(lightbox);
                    }
                    if (lightboxStyles && lightboxStyles.parentNode) {
                        lightboxStyles.parentNode.removeChild(lightboxStyles);
                    }
                });
            }
        } catch (error) {
            console.error("Error initializing image lightbox:", error);
        }
    },
    
    initHorizontalImageSliders: function(container) {
        if (!container) return;
        
        try {
            const sliders = container.querySelectorAll('.horizontal-image-slider');
            
            sliders.forEach(slider => {
                const track = slider.querySelector('.slider-track');
                const slides = slider.querySelectorAll('.slider-slide');
                const prevBtn = slider.querySelector('.slider-prev');
                const nextBtn = slider.querySelector('.slider-next');
                const pagination = slider.querySelector('.slider-pagination');
                
                if (!track || !slides.length || !prevBtn || !nextBtn || !pagination) {
                    console.warn('Slider missing required elements');
                    return;
                }
                
                slides.forEach((_, index) => {
                    const dot = document.createElement('div');
                    dot.className = 'slider-dot';
                    if (index === 0) dot.classList.add('active');
                    dot.dataset.index = index;
                    pagination.appendChild(dot);
                    
                    dot.addEventListener('click', () => {
                        goToSlide(index);
                    });
                });
                
                let currentIndex = 0;
                track.dataset.currentIndex = currentIndex;
                updateSlider();
                
                prevBtn.addEventListener('click', () => {
                    goToSlide(currentIndex - 1);
                });
                
                nextBtn.addEventListener('click', () => {
                    goToSlide(currentIndex + 1);
                });
                
                let startX, isDragging = false, startPosition, distance = 0;
                
                track.addEventListener('touchstart', (e) => {
                    startDrag(e.touches[0].clientX);
                    e.preventDefault();
                });
                
                track.addEventListener('mousedown', (e) => {
                    startDrag(e.clientX);
                });
                
                track.addEventListener('touchmove', (e) => {
                    if (!isDragging) return;
                    drag(e.touches[0].clientX);
                    e.preventDefault();
                });
                
                track.addEventListener('mousemove', (e) => {
                    if (!isDragging) return;
                    drag(e.clientX);
                });
                
                document.addEventListener('touchend', () => {
                    if (!isDragging) return;
                    endDrag();
                });
                
                document.addEventListener('mouseup', () => {
                    if (!isDragging) return;
                    endDrag();
                });
                
                function goToSlide(index) {
                    if (index < 0) index = 0;
                    if (index >= slides.length) index = slides.length - 1;
                    
                    currentIndex = index;
                    track.dataset.currentIndex = currentIndex;
                    updateSlider();
                }
                
                function updateSlider() {
                    track.style.transform = `translateX(-${currentIndex * 100}%)`;
                    
                    const dots = pagination.querySelectorAll('.slider-dot');
                    dots.forEach((dot, i) => {
                        if (i === currentIndex) {
                            dot.classList.add('active');
                        } else {
                            dot.classList.remove('active');
                        }
                    });
                    
                    prevBtn.disabled = currentIndex === 0;
                    nextBtn.disabled = currentIndex === slides.length - 1;
                    
                    prevBtn.style.opacity = prevBtn.disabled ? '0.5' : '1';
                    nextBtn.style.opacity = nextBtn.disabled ? '0.5' : '1';
                }
                
                function startDrag(clientX) {
                    isDragging = true;
                    startX = clientX;
                    startPosition = -currentIndex * 100;
                    
                    track.style.transition = 'none';
                }
                
                function drag(clientX) {
                    if (!isDragging) return;
                    
                    const sliderWidth = track.parentElement.offsetWidth;
                    distance = ((clientX - startX) / sliderWidth) * 100;
                    
                    const newPosition = Math.max(
                        -((slides.length - 1) * 100),
                        Math.min(0, startPosition + distance)
                    );
                    
                    track.style.transform = `translateX(${newPosition}%)`;
                }
                
                function endDrag() {
                    isDragging = false;
                    
                    track.style.transition = 'transform 0.5s ease-in-out';
                    
                    if (Math.abs(distance) > 20) {
                        if (distance > 0) {
                            goToSlide(currentIndex - 1);
                        } else {
                            goToSlide(currentIndex + 1);
                        }
                    } else {
                        goToSlide(currentIndex);
                    }
                    
                    startX = null;
                    distance = 0;
                }
                
                slider.tabIndex = 0;
                slider.addEventListener('keydown', (e) => {
                    if (e.key === 'ArrowLeft') {
                        goToSlide(currentIndex - 1);
                        e.preventDefault();
                    } else if (e.key === 'ArrowRight') {
                        goToSlide(currentIndex + 1);
                        e.preventDefault();
                    }
                });
            });
        } catch (error) {
            console.error("Error initializing horizontal sliders:", error);
        }
    },
    
    updateHorizontalSlidersDimensions: function(container) {
        if (!container) return;
        
        try {
            const sliders = container.querySelectorAll('.horizontal-image-slider');
            
            sliders.forEach(slider => {
                const track = slider.querySelector('.slider-track');
                if (!track) return;
                
                const currentIndex = parseInt(track.dataset.currentIndex || 0);
                
                track.style.transform = `translateX(-${currentIndex * 100}%)`;
            });
        } catch (error) {
            console.error("Error updating slider dimensions:", error);
        }
    },
    
    addScrollToTopButton: function(card, content) {
        if (!card || !content) return;
        
        try {
            const scrollTopBtn = document.createElement('div');
            scrollTopBtn.className = 'scroll-top-btn';
            scrollTopBtn.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 4L4 12M12 4L20 12M12 4V20" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            `;
            card.appendChild(scrollTopBtn);
            
            gsap.set(scrollTopBtn, { opacity: 0, visibility: 'hidden' });
            
            content.addEventListener('scroll', () => {
                if (content.scrollTop > 300) {
                    gsap.to(scrollTopBtn, { opacity: 1, visibility: 'visible', duration: 0.3 });
                } else {
                    gsap.to(scrollTopBtn, { opacity: 0, visibility: 'hidden', duration: 0.3 });
                }
            });
            
            scrollTopBtn.addEventListener('click', () => {
                gsap.to(content, { scrollTop: 0, duration: 0.8, ease: 'power2.out' });
            });
            
            const buttonStyle = document.createElement('style');
            buttonStyle.textContent = `
                .scroll-top-btn {
                    position: fixed;
                    bottom: 30px;
                    right: 30px;
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: rgba(30, 40, 55, 0.8);
                    backdrop-filter: blur(5px);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
                    transition: transform 0.3s ease, background 0.3s ease;
                    z-index: 1010;
                }
                
                .scroll-top-btn:hover {
                    transform: translateY(-5px);
                    background: rgba(40, 50, 70, 0.9);
                }
                
                .scroll-top-btn svg {
                    transform: scale(1.2);
                }
            `;
            document.head.appendChild(buttonStyle);
            
            const closeBtn = card.querySelector('.close-btn');
            if (closeBtn) {
                closeBtn.addEventListener('click', () => {
                    if (buttonStyle.parentNode) {
                        buttonStyle.parentNode.removeChild(buttonStyle);
                    }
                });
            }
        } catch (error) {
            console.error("Error adding scroll to top button:", error);
        }
    },
    
    createCards: function() {
        console.log("Creating carousel cards...");
        const container = Portfolio.data.elements.cardContainer;
        if (!container) {
            console.error("Card container not found");
            return;
        }
        
        container.innerHTML = '';
        
        Portfolio.data.projects.forEach((project, index) => {
            const card = document.createElement('div');
            card.className = 'card';
            card.dataset.index = index;
            
            if (index === Portfolio.data.activeIndex) {
                card.classList.add('active');
            }
            
            card.innerHTML = `
                ${project.image ? `<img src="${project.image}" class="card-img" alt="${project.title}">` : 
                `<div class="card-placeholder"></div>`}
                <div class="card-content">
                    <h3 class="card-title">${project.title}</h3>
                    <p class="card-subtitle">${project.subtitle}</p>
                </div>
            `;
            
            card.addEventListener('click', () => {
                this.navigateToCard(index);
                
                if (index === Portfolio.data.activeIndex) {
                    this.expandCard(card, project);
                }
            });
            
            container.appendChild(card);
        });
        
        this.arrangeCards();
        
        this.updatePagination();
    },
    
    arrangeCards: function() {
        const cards = document.querySelectorAll('.card');
        const centerIndex = Portfolio.data.activeIndex;
        
        cards.forEach((card, index) => {
            const relativePos = index - centerIndex;
            
            const zIndex = 100 - Math.abs(relativePos) * 10;
            card.style.zIndex = zIndex;
            
            card.classList.remove('active');
            
            if (index === centerIndex) {
                card.classList.add('active');
                gsap.to(card, {
                    scale: 1.15,
                    duration: 0.5,
                    ease: "back.out(1.2)"
                });
            } else {
                gsap.to(card, {
                    scale: 1,
                    duration: 0.4
                });
            }
            
            if (relativePos === 0) {
                gsap.to(card, {
                    x: 0,
                    y: 0,
                    z: 100,
                    rotationY: 0,
                    opacity: 1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else if (relativePos === -1) {
                gsap.to(card, {
                    x: -300,
                    y: 0,
                    z: -100,
                    rotationY: 15,
                    opacity: 0.7,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else if (relativePos === 1) {
                gsap.to(card, {
                    x: 300,
                    y: 0,
                    z: -100,
                    rotationY: -15,
                    opacity: 0.7,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else if (relativePos < -1) {
                gsap.to(card, {
                    x: -600,
                    y: 0,
                    z: -200,
                    rotationY: 25,
                    opacity: 0.1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            } else if (relativePos > 1) {
                gsap.to(card, {
                    x: 600,
                    y: 0,
                    z: -200,
                    rotationY: -25,
                    opacity: 0.1,
                    duration: 0.5,
                    ease: "power2.out"
                });
            }
        });
    },
    
    navigateToCard: function(index) {
        const totalCards = Portfolio.data.projects.length;
        
        if (index < 0) index = 0;
        if (index >= totalCards) index = totalCards - 1;
        
        if (index === Portfolio.data.activeIndex) {
            return;
        }
        
        this.resetActiveCard();
        
        const direction = index > Portfolio.data.activeIndex ? 'right' : 'left';
        this.animateCardMovement(direction);
        
        Portfolio.data.activeIndex = index;
        
        this.arrangeCards();
        
        this.updatePagination();
    },
    
    animateCardMovement: function(direction) {
        const cards = document.querySelectorAll('.card');
        const moveDistance = direction === 'left' ? 50 : -50;
        
        cards.forEach(card => {
            gsap.to(card, {
                x: `+=${moveDistance}`,
                duration: 0.2,
                ease: "power1.in",
                onComplete: () => {
                    gsap.to(card, {
                        x: '-=0',
                        duration: 0
                    });
                }
            });
        });
    },
    
    resetActiveCard: function() {
        const activeCard = document.querySelector('.card.active');
        if (activeCard) {
            gsap.to(activeCard, {
                rotationY: 0,
                rotationX: 0,
                x: 0,
                y: 0,
                duration: 0.3,
                ease: "power2.out",
                overwrite: true
            });
        }
    },
    
    updatePagination: function() {
        const paginationText = Portfolio.data.elements.paginationText;
        if (paginationText) {
            const currentIndex = Portfolio.data.activeIndex + 1;
            const totalCards = Portfolio.data.projects.length;
            paginationText.textContent = `${currentIndex}/${totalCards}`;
        }
    },
    
    expandCard: function(card, project) {
        try {
            console.log("Expanding project:", project.id, project.title);
            
            const scrollY = window.scrollY;
            
            const rect = card.getBoundingClientRect();
            
            const overlay = document.createElement('div');
            overlay.className = 'overlay';
            document.body.appendChild(overlay);
            
            const expandedCard = document.createElement('div');
            expandedCard.className = 'expanded-card';
            
            expandedCard.style.width = `${rect.width}px`;
            expandedCard.style.height = `${rect.height}px`;
            expandedCard.style.left = `${rect.left}px`;
            expandedCard.style.top = `${rect.top}px`;
            
            const content = document.createElement('div');
            content.className = 'expanded-card-content';
            content.style.opacity = 0;
            
            content.innerHTML = `
            <div class="project-header">
                <h1 class="project-title">${project.title}</h1>
                <p class="project-subtitle">${project.subtitle || "Project subtitle goes here"}</p>
            </div>
            `;
            
            const metaGridDiv = document.createElement('div');
            metaGridDiv.className = 'project-meta-grid';
            
            if (project.metaCards && project.metaCards.length > 0) {
                project.metaCards.forEach((card, index) => {
                    const metaCard = document.createElement('div');
                    metaCard.className = 'project-meta-card';
                    metaCard.style.setProperty('--card-index', index);
                    
                    const title = document.createElement('h3');
                    title.className = 'meta-title';
                    title.textContent = card.title;
                    metaCard.appendChild(title);
                    
                    if (card.teamList) {
                        const list = document.createElement('ul');
                        list.className = 'meta-list';
                        
                        card.teamList.forEach(member => {
                            const item = document.createElement('li');
                            item.textContent = `${member.name} - ${member.role}`;
                            list.appendChild(item);
                        });
                        
                        metaCard.appendChild(list);
                    } else {
                        const content = document.createElement('p');
                        content.className = 'meta-content';
                        content.textContent = card.content || '';
                        metaCard.appendChild(content);
                    }
                    
                    metaGridDiv.appendChild(metaCard);
                });
            } else {
                const defaultCards = [
                    {
                        title: project.roleCard?.title || "Role",
                        content: project.roleCard?.content || project.role || 'UX Designer'
                    },
                    {
                        title: project.teamCard?.title || "Team",
                        teamList: project.team || [
                            { name: "Collaborator 1", role: "Role 1" },
                            { name: "Collaborator 2", role: "Role 2" }
                        ]
                    },
                    {
                        title: project.durationCard?.title || "Duration",
                        content: project.durationCard?.content || project.duration || '10 weeks'
                    }
                ];
                
                defaultCards.forEach((card, index) => {
                    const metaCard = document.createElement('div');
                    metaCard.className = 'project-meta-card';
                    metaCard.style.setProperty('--card-index', index);
                    
                    const title = document.createElement('h3');
                    title.className = 'meta-title';
                    title.textContent = card.title;
                    metaCard.appendChild(title);
                    
                    if (card.teamList) {
                        const list = document.createElement('ul');
                        list.className = 'meta-list';
                        
                        card.teamList.forEach(member => {
                            const item = document.createElement('li');
                            item.textContent = `${member.name} - ${member.role}`;
                            list.appendChild(item);
                        });
                        
                        metaCard.appendChild(list);
                    } else {
                        const content = document.createElement('p');
                        content.className = 'meta-content';
                        content.textContent = card.content || '';
                        metaCard.appendChild(content);
                    }
                    
                    metaGridDiv.appendChild(metaCard);
                });
            }
            
            content.appendChild(metaGridDiv);
            
            if (project.heroImage) {
                content.innerHTML += `
                <div class="project-hero">
                    <img src="${project.heroImage}" alt="${project.title}" class="hero-image">
                </div>
                `;
            }
            
            if (project.overview) {
                content.innerHTML += `
                <div class="project-overview">
                    <h2>Overview</h2>
                    <p>${project.overview}</p>
                </div>
                `;
            }
            
            if (project.imageSlider && project.imageSlider.length > 0) {
                let sliderHTML = `
                <div class="project-section">
                    <h2 class="section-title">${project.imageSliderTitle || "Project Gallery"}</h2>
                    <div class="horizontal-image-slider">
                        <div class="slider-wrapper">
                            <div class="slider-track">
                `;
                
                project.imageSlider.forEach((image, index) => {
                    sliderHTML += `
                        <div class="slider-slide" data-index="${index}">
                            <img src="${image.src}" alt="${image.alt || `Project image ${index + 1}`}">
                            ${image.caption ? `<div class="slide-caption">${image.caption}</div>` : ''}
                        </div>
                    `;
                });
                
                sliderHTML += `
                            </div>
                        </div>
                        <div class="slider-controls">
                            <button class="slider-prev">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                            <div class="slider-pagination"></div>
                            <button class="slider-next">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                `;
                
                content.innerHTML += sliderHTML;
            }
            
            if (project.sections && project.sections.length > 0) {
                project.sections.forEach(section => {
                    let sectionHTML = `
                    <div class="project-section">
                        <h2 class="section-title">${section.title}</h2>
                        <div class="section-content">${section.content}</div>
                    `;
                    
                    if (section.image && section.image.src) {
                        sectionHTML += `
                        <div class="section-image ${section.image.size || 'full'}">
                            <img src="${section.image.src}" alt="${section.image.alt || section.title}">
                        </div>
                        `;
                    }
                    
                    if (section.video) {
                        sectionHTML += `
                        <div class="section-video ${section.video.size || 'full'}">
                        `;
                        
                        if (section.video.embedSrc) {
                            sectionHTML += `
                            <div class="video-container">
                                <iframe 
                                    src="${section.video.embedSrc}" 
                                    frameborder="0" 
                                    allowfullscreen
                                    width="${section.video.width || '100%'}"
                                    height="${section.video.height || '500'}"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </div>
                            `;
                        } else if (section.video.src) {
                            sectionHTML += `
                            <video 
                                controls
                                ${section.video.poster ? `poster="${section.video.poster}"` : ''}
                                ${section.video.autoplay ? 'autoplay' : ''}
                                ${section.video.muted ? 'muted' : ''}
                                ${section.video.loop ? 'loop' : ''}
                                width="${section.video.width || '100%'}"
                                height="${section.video.height || 'auto'}"
                                playsinline
                                preload="metadata"
                            >
                                <source src="${section.video.src}" type="${section.video.type || 'video/mp4'}">
                                Your browser does not support the video tag.
                            </video>
                            `;
                        }
                        
                        sectionHTML += `</div>`;
                    }
                    
                    if (section.imageSlider && section.imageSlider.length > 0) {
                        sectionHTML += `
                        <div class="horizontal-image-slider">
                            <div class="slider-wrapper">
                                <div class="slider-track">
                        `;
                        
                        section.imageSlider.forEach((image, index) => {
                            sectionHTML += `
                                <div class="slider-slide" data-index="${index}">
                                    <img src="${image.src}" alt="${image.alt || `${section.title} image ${index + 1}`}">
                                    ${image.caption ? `<div class="slide-caption">${image.caption}</div>` : ''}
                                </div>
                            `;
                        });
                        
                        sectionHTML += `
                                </div>
                            </div>
                            <div class="slider-controls">
                                <button class="slider-prev">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <div class="slider-pagination"></div>
                                <button class="slider-next">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 18L15 12L9 6" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                            </div>
                        </div>
                        `;
                    }
                    
                    if (section.gallery && section.gallery.length > 0) {
                        sectionHTML += `<div class="image-grid">`;
                        
                        section.gallery.forEach(image => {
                            sectionHTML += `
                            <img src="${image.src}" alt="${image.alt || 'Gallery image'}">
                            `;
                        });
                        
                        sectionHTML += `</div>`;
                    }
                    
                    if (section.imageRow && section.imageRow.length > 0) {
                        sectionHTML += `<div class="image-row">`;
                        
                        section.imageRow.forEach(image => {
                            sectionHTML += `
                            <div class="image-container ${image.size || 'half'}">
                                <img src="${image.src}" alt="${image.alt || 'Project image'}">
                            </div>
                            `;
                        });
                        
                        sectionHTML += `</div>`;
                    }
                    
                    if (section.beforeAfter) {
                        const ba = section.beforeAfter;
                        sectionHTML += `
                        <div class="before-after-container">
                            <div class="before-image">
                                <img src="${ba.before.src}" alt="${ba.before.alt || 'Before'}">
                            </div>
                            <div class="after-image">
                                <img src="${ba.after.src}" alt="${ba.after.alt || 'After'}">
                            </div>
                            <div class="slider-handle"></div>
                            ${ba.label ? `<p class="comparison-label">${ba.label}</p>` : ''}
                        </div>
                        `;
                    }
                    
                    if (section.additionalContent) {
                        sectionHTML += `
                        <div class="section-content">${section.additionalContent}</div>
                        `;
                    }
                    
                    sectionHTML += `</div>`;
                    
                    content.innerHTML += sectionHTML;
                });
            } else if (project.overview) {
            } else {
                content.innerHTML += `
                <div class="project-section">
                    <h2 class="section-title">Overview</h2>
                    <div class="section-content">Project details coming soon.</div>
                </div>
                `;
            }
            
            const closeBtn = document.createElement('div');
            closeBtn.className = 'close-btn';
            closeBtn.innerHTML = `
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6L6 18M6 6L18 18" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                Close
            `;
            
            expandedCard.appendChild(content);
            expandedCard.appendChild(closeBtn);
            document.body.appendChild(expandedCard);
            
            const styleElement = document.createElement('style');
            styleElement.textContent = `
                .expanded-card .section-image img {
                    max-height: 600px;
                    object-fit: contain;
                }
                .expanded-card .image-grid img {
                    height: 240px;
                }
                .expanded-card .before-after-container {
                    height: 500px;
                }
                .expanded-card .project-hero img {
                    max-height: 700px;
                    object-fit: contain;
                }
                
                .horizontal-image-slider {
                    position: relative;
                    width: 100%;
                    margin: 30px 0;
                    padding-bottom: 40px;
                }
                
                .slider-wrapper {
                    width: 100%;
                    overflow: hidden;
                    border-radius: 16px;
                    box-shadow: var(--depth-shadow), var(--depth-highlight);
                    border: 1px solid rgba(151, 174, 118, 0.1);
                }
                
                .slider-track {
                    display: flex;
                    transition: transform 0.5s ease-in-out;
                    height: 450px;
                }
                
                .slider-slide {
                    min-width: 100%;
                    position: relative;
                }
                
                .slider-slide img {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                    background-color: rgba(25, 30, 40, 0.6);
                }
                
                .slide-caption {
                    position: absolute;
                    bottom: 0;
                    left: 0;
                    width: 100%;
                    padding: 15px 20px;
                    background: linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0));
                    color: white;
                    font-size: 1rem;
                    text-align: center;
                }
                
                .slider-controls {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-top: 15px;
                }
                
                .slider-prev,
                .slider-next {
                    width: 40px;
                    height: 40px;
                    border-radius: 50%;
                    background: rgba(30, 40, 55, 0.6);
                    border: 1px solid rgba(151, 174, 118, 0.1);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    cursor: pointer;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: all 0.3s ease;
                }
                
                .slider-prev:hover,
                .slider-next:hover {
                    background: rgba(40, 50, 70, 0.8);
                    transform: translateY(-3px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.3);
                }
                
                .slider-prev:active,
                .slider-next:active {
                    transform: translateY(0);
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                }
                
                .slider-pagination {
                    display: flex;
                    gap: 10px;
                    justify-content: center;
                }
                
                .slider-dot {
                    width: 10px;
                    height: 10px;
                    border-radius: 50%;
                    background: rgba(255, 255, 255, 0.3);
                    cursor: pointer;
                    transition: all 0.3s ease;
                }
                
                .slider-dot.active {
                    background: white;
                    transform: scale(1.2);
                }
                
                .section-video {
                    margin: 30px 0;
                    overflow: hidden;
                    border-radius: 16px;
                    box-shadow: var(--depth-shadow), var(--depth-highlight);
                    border: 1px solid rgba(151, 174, 118, 0.1);
                    transform: translateZ(0);
                    transition: transform 0.6s cubic-bezier(0.23, 1, 0.32, 1), box-shadow 0.6s cubic-bezier(0.23, 1, 0.32, 1);
                    background-color: rgba(25, 30, 40, 0.6);
                }

                .section-video:hover {
                    transform: translateZ(var(--depth-level1));
                    box-shadow: var(--depth-shadow), 0 0 30px rgba(163, 148, 194, 0.15);
                }

                .section-video video {
                    width: 100%;
                    display: block;
                    background-color: rgba(25, 30, 40, 0.6);
                }

                .section-video .video-container {
                    position: relative;
                    padding-bottom: 56.25%;
                    height: 0;
                    overflow: hidden;
                }

                .section-video .video-container iframe {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    border: none;
                }

                .section-video.medium {
                    width: 75%;
                    margin: 30px auto;
                }

                .section-video.small {
                    width: 50%;
                    margin: 30px auto;
                }
                
                @media (max-width: 768px) {
                    .slider-track {
                        height: 350px;
                    }
                    
                    .section-video.small,
                    .section-video.medium {
                        width: 100%;
                    }
                }
                
                @media (max-width: 576px) {
                    .slider-track {
                        height: 250px;
                    }
                }
            `;
            document.head.appendChild(styleElement);
            
            const windowWidth = window.innerWidth;
            const windowHeight = window.innerHeight;
            const isMobile = windowWidth <= 768;
            
            let cardWidth, cardHeight, maxWidth;
            
            if (windowWidth >= 1601) {
                cardWidth = '85%';
                cardHeight = '90%';
                maxWidth = '1800px';
            } else if (windowWidth >= 1201) {
                cardWidth = '85%';
                cardHeight = '90%';
                maxWidth = '1600px';
            } else if (windowWidth >= 992) {
                cardWidth = '90%';
                cardHeight = '90%';
                maxWidth = '1200px';
            } else if (windowWidth >= 768) {
                cardWidth = '92%';
                cardHeight = '85%';
                maxWidth = '1000px';
            } else if (windowWidth >= 576) {
                cardWidth = '92%';
                cardHeight = '85%';
                maxWidth = '800px';
            } else {
                cardWidth = '95%';
                cardHeight = '90%';
                maxWidth = '100%';
            }
            
            if (windowHeight <= 800) {
                cardHeight = '88%';
            }
            if (windowHeight <= 600) {
                cardHeight = '90%';
            }
            
            expandedCard.style.cssText = `
                width: ${rect.width}px;
                height: ${rect.height}px;
                position: fixed;
                z-index: 1000;
                top: ${rect.top}px;
                left: ${rect.left}px;
                overflow: hidden;
                border-radius: 16px;
                background-color: var(--card-bg, #1a1f2b);
                box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
            `;
            
            const sizeFixStyle = document.createElement('style');
            sizeFixStyle.textContent = `
                .expanded-card {
                    width: ${cardWidth} !important;
                    height: ${cardHeight} !important; 
                    max-width: ${maxWidth} !important;
                    top: 50% !important;
                    left: 50% !important;
                    transform: translate(-50%, -50%) !important;
                }
                
                .expanded-card.active {
                    width: ${cardWidth} !important;
                    height: ${cardHeight} !important;
                    max-width: ${maxWidth} !important;
                }
            `;
            document.head.appendChild(sizeFixStyle);
            
            content.style.maxWidth = isMobile ? "100%" : "1200px";
            content.style.padding = isMobile ? "30px 20px" : "40px";
            
            console.log("Applied dimensions:", 
                {width: cardWidth, height: cardHeight, maxWidth: maxWidth});
            
            gsap.fromTo(overlay, 
                { opacity: 0 },
                { 
                    opacity: 1, 
                    duration: 0.4, 
                    ease: "power2.out" 
                }
            );
            
            const expandTl = gsap.timeline({
                onComplete: () => {
                    expandedCard.classList.add('active');
                    
                    try {
                        this.initBeforeAfterSliders(expandedCard);
                        this.initHorizontalImageSliders(expandedCard);
                        this.addScrollToTopButton(expandedCard, content);
                        this.initImageLightbox(expandedCard);
                    } catch (error) {
                        console.error("Error initializing card components:", error);
                    }
                }
            });
            
            expandTl.to(expandedCard, {
                width: cardWidth,
                height: cardHeight,
                maxWidth: maxWidth,
                top: "50%",
                left: "50%",
                xPercent: -50,
                yPercent: -50,
                duration: 0.6,
                ease: "back.out(1.3)",
                force3D: true,
                clearProps: "xPercent,yPercent"
            });
            
            expandTl.fromTo(content, 
                { 
                    opacity: 0,
                    scale: 0.95
                },
                { 
                    opacity: 1,
                    scale: 1,
                    duration: 0.5,
                    ease: "power2.out"
                }, 
                "-=0.2"
            );
            
            closeBtn.addEventListener('click', () => {
                const closeTl = gsap.timeline({
                    onComplete: () => {
                        document.body.removeChild(expandedCard);
                        document.body.removeChild(overlay);
                        
                        if (styleElement.parentNode) {
                            styleElement.parentNode.removeChild(styleElement);
                        }
                        if (sizeFixStyle.parentNode) {
                            sizeFixStyle.parentNode.removeChild(sizeFixStyle);
                        }
                        
                        if (typeof Portfolio.onProjectClosed === 'function') {
                            Portfolio.onProjectClosed(project.id);
                        }
                    }
                });
                
                const originalCard = document.querySelector(`.card[data-index="${Portfolio.data.activeIndex}"]`);
                const originalRect = originalCard ? originalCard.getBoundingClientRect() : null;
                
                closeTl.to(content, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.3,
                    ease: "power2.in"
                });
                
                if (originalRect) {
                    closeTl.to(expandedCard, {
                        width: originalRect.width,
                        height: originalRect.height,
                        left: originalRect.left,
                        top: originalRect.top,
                        xPercent: 0,
                        yPercent: 0,
                        force3D: true,
                        duration: 0.5,
                        ease: "back.in(1.2)",
                    }, "-=0.1");
                } else {
                    closeTl.to(expandedCard, {
                        scale: 0.8,
                        opacity: 0,
                        duration: 0.4,
                        ease: "power2.in"
                    }, "-=0.1");
                }
                
                closeTl.to(overlay, {
                    opacity: 0,
                    duration: 0.3,
                    ease: "power2.in"
                }, "-=0.3");
            });
            
            const escHandler = (e) => {
                if (e.key === 'Escape') {
                    closeBtn.click();
                    document.removeEventListener('keydown', escHandler);
                }
            };
            document.addEventListener('keydown', escHandler);
            
            if (typeof Portfolio.onProjectOpened === 'function') {
                Portfolio.onProjectOpened(project.id);
            }
            
        } catch (error) {
            console.error("Error expanding card:", error);
        }
    }
}