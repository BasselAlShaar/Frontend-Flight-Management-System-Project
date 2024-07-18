document.addEventListener("DOMContentLoaded", function() {
   
    document.getElementById("login_form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        console.log('Form submitted');

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        console.log('email:', email);
        console.log('Password:', password);

        const insert = async ()=>{
            let payload ={
                email,
                password,
            }
            const response = await fetch("../../../auth/signin.php",{
                method: "POST",
                body: {
                    email,
                    password
                }
            })
            console.log(payload);
            console.log(await response.text());
            // let data = await response.json()
            // console.log(data);
        }
        insert()

    });
    document.getElementById('logo').addEventListener('click', function() {
        window.location.href = '../index.html'; 
    });
});
