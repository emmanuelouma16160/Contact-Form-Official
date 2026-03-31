const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event)  {
    event.preventDefault(); //stop page reloading


    const name= document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

        //form validation
    if(name === '' || email === '' || message === ''){{
        alert('Please fill in all fields.');
        return; 
    } 
    if(!isValidEmail(email)){
        alert('Please enter a valid email address.');
        return;
    }
    if (message.length < 10){
        alert('Message should be at least 10 characters long.');
        return;
    }
    // success message
    alert('Thank you for contacting us, ' + name + '! We will get back to you shortly.');
    form.reset();
}});
     //email validation function
function isValidEmail(email){
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

