document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("login_form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        console.log('Form submitted');

        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        console.log('Username:', username);
        console.log('Password:', password);

    });
    document.getElementById('logo').addEventListener('click', function() {
        window.location.href = '../index.html'; 
    });
});