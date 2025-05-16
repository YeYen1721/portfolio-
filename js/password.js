// Password page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    console.log('Password page loaded');
    
    // Define the passwords for each project (for a real site, this would be server-side)
    const projectPasscodes = {
        'flux': '0273',
        'telfair': '0273',
        'nameme': '0273',
        'nest': '0273'
    };
    
    // Get the project parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('project') || '';
    
    // If no project ID is provided, redirect to home
    if (!projectId || !projectPasscodes[projectId]) {
        window.location.href = 'index.html';
    }
    
    // Add fade-in animation to content
    const content = document.querySelector('.content');
    if (content) {
        content.classList.add('fade-in');
    }
    
    // Handle back button hover state
    const backButton = document.querySelector('.back-link');
    if (backButton) {
        backButton.addEventListener('mouseenter', function() {
            this.style.opacity = '0.7';
        });
        
        backButton.addEventListener('mouseleave', function() {
            this.style.opacity = '1';
        });
        
        backButton.addEventListener('click', function(e) {
            // Add page transition effect
            document.body.classList.add('page-transition');
        });
    }
    
    // Handle digit input focus and auto-advance
    const digitInputs = document.querySelectorAll('.digit-input');
    
    digitInputs.forEach((input, index) => {
        // Only allow numbers in the input
        input.addEventListener('input', function(e) {
            if (!/^\d*$/.test(this.value)) {
                this.value = this.value.replace(/[^\d]/g, '');
            }
            
            // If a digit is entered, move to next input
            if (this.value.length === 1 && index < digitInputs.length - 1) {
                digitInputs[index + 1].focus();
            }
            
            // If all digits are entered, submit automatically
            if (index === digitInputs.length - 1 && this.value.length === 1) {
                checkPasscode();
            }
        });
        
        // Handle backspace to move back to previous input
        input.addEventListener('keydown', function(e) {
            if (e.key === 'Backspace' && this.value === '' && index > 0) {
                digitInputs[index - 1].focus();
            }
        });
    });
    
    // Focus first input when page loads
    digitInputs[0].focus();
    
    // Handle submit button click
    const submitButton = document.getElementById('submit-password');
    submitButton.addEventListener('click', checkPasscode);
    
    // Function to check the entered passcode
    function checkPasscode() {
        let enteredPasscode = '';
        
        // Get the passcode from inputs
        digitInputs.forEach(input => {
            enteredPasscode += input.value;
        });
        
        // Check if passcode is complete
        if (enteredPasscode.length !== 4) {
            showError('Please enter all 4 digits');
            return;
        }
        
        // Check if passcode is correct
        if (enteredPasscode === projectPasscodes[projectId]) {
            // Store successful authentication in sessionStorage
            sessionStorage.setItem(`auth_${projectId}`, 'true');
            
            // Redirect to the project page
            window.location.href = `project.html?project=${projectId}`;
        } else {
            // Show error and shake effect
            showError('Incorrect passcode. Try again.');
            
            // Add shake animation to inputs
            const inputContainer = document.querySelector('.passcode-input');
            inputContainer.classList.add('shake');
            
            // Remove the shake class after animation completes
            setTimeout(() => {
                inputContainer.classList.remove('shake');
            }, 500);
            
            // Clear the inputs and focus on first input
            digitInputs.forEach(input => {
                input.value = '';
            });
            digitInputs[0].focus();
        }
    }
    
    // Function to show error message
    function showError(message) {
        const errorElement = document.getElementById('error-message');
        errorElement.textContent = message;
        
        // Clear error after 3 seconds
        setTimeout(() => {
            errorElement.textContent = '';
        }, 3000);
    }
});