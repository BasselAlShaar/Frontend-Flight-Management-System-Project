document.addEventListener('DOMContentLoaded', function () {
    // Star Rating Functionality
    const stars = document.querySelectorAll('.star');
    
    stars.forEach(star => {
        star.addEventListener('click', function () {
            const rating = parseInt(this.getAttribute('data-value'));
            updateStarRating(rating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach(star => {
            if (parseInt(star.getAttribute('data-value')) <= rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

    // Form Validation Functionality
    const form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        const destination = document.getElementById('destination').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;

        if (!destination || !checkin || !checkout || !guests) {
            alert('Please fill out all fields.');
            event.preventDefault();
        }
    });
});

document.getElementById('book-hotel-btn').addEventListener('click', function() {
    window.location.href = 'book_a_hotel_index.html';
});

document.getElementById('book-transportation-btn').addEventListener('click', function(){
    window.location.href = 'book_a_transportation.html';
});

//search button 
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    // Select the search button
    const searchButton = document.querySelector('.search-btn');

    // Add a click event listener to the search button
    searchButton.addEventListener('click', (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get the form values
        const destination = document.getElementById('destination').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        const freeCancellation = document.getElementById('free-cancellation').checked;
        const rating = Array.from(document.querySelectorAll('.star.selected')).map(star => star.dataset.value);
        
        // Display an alert with the form values (for demonstration purposes)
        alert(`Destination: ${destination}\nCheck In: ${checkin}\nCheck Out: ${checkout}\nGuests: ${guests}\nFree Cancellation: ${freeCancellation}\nRating: ${rating.join(', ')}`);

        // Here you can add the code to handle the form submission, such as sending the data to a server or redirecting to another page with query parameters
    });

    // Add click event listeners to the stars for rating selection
    document.querySelectorAll('.star').forEach(star => {
        star.addEventListener('click', () => {
            // Remove 'selected' class from all stars
            document.querySelectorAll('.star').forEach(star => star.classList.remove('selected'));
            // Add 'selected' class to the clicked star and all previous stars
            star.classList.add('selected');
            let previousSibling = star.previousElementSibling;
            while (previousSibling) {
                previousSibling.classList.add('selected');
                previousSibling = previousSibling.previousElementSibling;
            }
        });
    });
});
