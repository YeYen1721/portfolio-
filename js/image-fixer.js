document.addEventListener('DOMContentLoaded', function() {
    setTimeout(function() {
        if (typeof Portfolio !== 'undefined' && Portfolio.carousel) {
            console.log("Installing image fixer patch...");
            
            const originalExpandCard = Portfolio.carousel.expandCard;
            
            Portfolio.carousel.expandCard = function(card, project) {
                originalExpandCard.call(this, card, project);
                
                setTimeout(function() {
                    const expandedCard = document.querySelector('.expanded-card');
                    if (!expandedCard) return;
                    
                    console.log("Fixing images in expanded card...");
                    
                    const heroImages = expandedCard.querySelectorAll('.project-hero img, .hero-image');
                    heroImages.forEach(function(img) {
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.maxHeight = 'none';
                        img.style.objectFit = 'contain';
                        
                        const container = img.closest('.project-hero');
                        if (container) {
                            container.style.width = '100%';
                            container.style.height = 'auto';
                            container.style.maxHeight = 'none';
                            container.style.backgroundColor = 'transparent';
                            container.style.display = 'block';
                            container.style.borderRadius = '16px';
                            container.style.overflow = 'hidden';
                            container.style.border = '1px solid rgba(151, 174, 118, 0.1)';
                            container.style.margin = '30px 0';
                        }
                    });
                    
                    const sectionImages = expandedCard.querySelectorAll('.section-image');
                    sectionImages.forEach(function(container) {
                        container.style.width = '100%';
                        container.style.height = 'auto';
                        container.style.maxHeight = 'none';
                        container.style.backgroundColor = 'transparent';
                        container.style.display = 'block';
                        container.style.alignItems = 'normal';
                        container.style.justifyContent = 'normal';
                        container.style.margin = '30px 0';
                        container.style.padding = '0';
                        container.style.borderRadius = '16px';
                        container.style.overflow = 'hidden';
                        container.style.border = '1px solid rgba(151, 174, 118, 0.1)';
                        
                        const img = container.querySelector('img');
                        if (img) {
                            img.style.width = '100%';
                            img.style.height = 'auto';
                            img.style.maxHeight = 'none';
                            img.style.objectFit = 'contain';
                            img.style.margin = '0';
                            img.style.padding = '0';
                            
                            if (container.classList.contains('small')) {
                                img.style.maxWidth = '50%';
                                img.style.margin = '0 auto';
                                img.style.display = 'block';
                            } else if (container.classList.contains('medium')) {
                                img.style.maxWidth = '75%';
                                img.style.margin = '0 auto';
                                img.style.display = 'block';
                            }
                        }
                    });
                    
                    const galleryImages = expandedCard.querySelectorAll('.image-grid img');
                    galleryImages.forEach(function(img) {
                        img.style.width = '100%';
                        img.style.height = 'auto';
                        img.style.maxHeight = 'none';
                        img.style.objectFit = 'contain';
                        img.style.borderRadius = '12px';
                        img.style.overflow = 'hidden';
                        img.style.border = '1px solid rgba(151, 174, 118, 0.1)';
                    });
                    
                    const imageContainers = expandedCard.querySelectorAll('.image-container');
                    imageContainers.forEach(function(container) {
                        container.style.width = '100%';
                        container.style.height = 'auto';
                        container.style.maxHeight = 'none';
                        container.style.backgroundColor = 'transparent';
                        container.style.display = 'block';
                        container.style.alignItems = 'normal';
                        container.style.justifyContent = 'normal';
                        container.style.borderRadius = '16px';
                        container.style.overflow = 'hidden';
                        container.style.border = '1px solid rgba(151, 174, 118, 0.1)';
                        
                        const img = container.querySelector('img');
                        if (img) {
                            img.style.width = '100%';
                            img.style.height = 'auto';
                            img.style.maxHeight = 'none';
                            img.style.objectFit = 'contain';
                            img.style.margin = '0';
                            img.style.padding = '0';
                        }
                    });
                    
                    setTimeout(function() {
                        const heroImages = expandedCard.querySelectorAll('.project-hero img, .hero-image');
                        heroImages.forEach(function(img) {
                            img.style.width = '100%';
                            img.style.height = 'auto';
                        });
                        
                        const sectionImages = expandedCard.querySelectorAll('.section-image img');
                        sectionImages.forEach(function(img) {
                            img.style.width = '100%';
                            img.style.height = 'auto';
                        });
                    }, 500);
                    
                }, 300);
            };
            
            console.log("Image fixer patch installed successfully");
        } else {
            console.error("Portfolio object not available for patching");
        }
    }, 500);
});