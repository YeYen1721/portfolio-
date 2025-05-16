// Enhanced main.js for the home page
document.addEventListener('DOMContentLoaded', function() {
    console.log('Home page loaded successfully');
    
    // Add name title click functionality for about page
    const nameTitle = document.querySelector('.title-link');
    if (nameTitle) {
        nameTitle.addEventListener('click', function(e) {
            // Allow default behavior (navigation) but could add transition effects
            console.log('Navigating to About page');
        });
    }
    
    // Add interactivity to expandable circles
    const expandableCircles = document.querySelectorAll('.circle.expandable');
    
    expandableCircles.forEach(circle => {
        // Log which project is being visited
        circle.addEventListener('click', function(e) {
            // Get the href value
            const projectLink = this.getAttribute('href');
            const projectName = this.querySelector('.link-text').textContent;
            console.log('Visiting project:', projectName);
            
            // Optional: Add page transition effect
            document.body.classList.add('page-transition');
            
            // We'll let the default link behavior handle the navigation
        });
        
        // Add subtle hover effect beyond the CSS expansion
        circle.addEventListener('mouseenter', function() {
            // Additional hover effects could be added here
        });
        
        circle.addEventListener('mouseleave', function() {
            // Reset any additional hover effects
        });
    });
    
    // Preload project pages for faster navigation
    function preloadPage(url) {
        const link = document.createElement('link');
        link.rel = 'prefetch';
        link.href = url;
        document.head.appendChild(link);
    }
    
    // Preload common pages
    preloadPage('about.html');
    preloadPage('project.html');
    
    // Optional: Add subtle animation to grid
    const gridContainer = document.querySelector('.grid-container');
    if (gridContainer) {
        gridContainer.classList.add('fade-in');
    }
});