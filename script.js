
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Stop page from reloading

    // Get values and trim whitespace
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1. Check for empty fields
    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return; 
    } 

    // 2. Email validation
    if (!isValidEmail(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    // 3. Length validation (though HTML 'minlength' also helps)
    if (message.length < 10) {
        alert('Message should be at least 10 characters long.');
        return;
    }

    // Success! 
    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    
    // Clear the form fields
    form.reset();
});

// Helper function for email regex
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}