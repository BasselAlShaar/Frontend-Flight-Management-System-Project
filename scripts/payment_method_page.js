document.addEventListener("DOMContentLoaded", function() {

    document.getElementById("payment_method_form").addEventListener("submit", function(event) {
        event.preventDefault(); 

        console.log('Form submitted');

        const card_no = document.getElementById("card_no").value;
        const expiration_date = document.getElementById("expiration_date").value;
        const cvv = document.getElementById("cvv").value;
        const card_holder_name = document.getElementById("card_holder_name").value;

        console.log('Card No:', card_no);
        console.log('Expiratio Date:', expiration_date);
        console.log('Cvv:', cvv);
        console.log("Card Holder's Name:", card_holder_name);

    });
});