// About page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('About page loaded');
    
    // Add fade-in animation to content
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }
    
    // Handle back button hover state and click
    const backButton = document.querySelector('.back-link');
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
        
        // Add transition effect when going back
        backButton.addEventListener('click', function(e) {
            // Allow default behavior but add transition effect
            document.body.classList.add('page-transition');
        });
    }
    
    // Optional: Add subtle animation to skills items
    const skillItems = document.querySelectorAll('.skills li');
    if (skillItems.length > 0) {
        skillItems.forEach((item, index) => {
            item.style.animationDelay = `${0.1 * index}s`;
            item.classList.add('fade-in');
        });
    }
    
    // Handle social link hover states
    const socialLinks = document.querySelectorAll('.social-link');
    if (socialLinks.length > 0) {
        socialLinks.forEach(link => {
            link.addEventListener('mouseenter', function() {
                this.style.opacity = '0.7';
            });
            
            link.addEventListener('mouseleave', function() {
                this.style.opacity = '1';
            });
        });
    }
});