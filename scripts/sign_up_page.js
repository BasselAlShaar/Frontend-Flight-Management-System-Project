document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("sign_up_form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        console.log('Form submitted');

        const name = document.getElementById("name").value;
        const username = document.getElementById("user_name").value;
        const email = document.getElementById("user_email").value;
        const password = document.getElementById("password").value;

        console.log('Username:', name);
        console.log('Password:', username);
        console.log('Password:', email);
        console.log('Password:', password);

    });
});