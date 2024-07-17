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
        const insert = async ()=>{
            
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
document.addEventListener('DOMContentLoaded', () => {
    // Select the search button
    const searchButton = document.querySelector('.search-btn');

    // Add a click event listener to the search button
    searchButton.addEventListener('click', async (event) => {
        event.preventDefault(); // Prevent the form from submitting the default way
        
        // Get the form values
        const destination = document.getElementById('destination').value;
        const checkin = document.getElementById('checkin').value;
        const checkout = document.getElementById('checkout').value;
        const guests = document.getElementById('guests').value;
        const freeCancellation = document.getElementById('free-cancellation').checked;
        const rating = Array.from(document.querySelectorAll('.star.selected')).map(star => star.dataset.value);
        
        // Construct the request URL with query parameters
        const url = `../../../locations/readall.php`;
        
        try {
            // Fetch data from backend
            const response = await fetch(url);
            // Parse JSON response
            const data = await response.json();
            
            // Handle the data (update DOM, show results, etc.)
            console.log('Received data from backend:', data);
            // Example: Update DOM with search results
            displaySearchResults(data); // Implement this function to display results
            console.log(data);
        } catch (error) {
            console.error('Error fetching data:', error);
            // Handle errors (show error message, retry options, etc.)
        }
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


    const dest = async ()=>{
        const request = await fetch('../../../locations/readall.php',{
            method:"POST"
        })
        let results = await request.json()
        const resultsContainer = document.getElementById('destination');
        console.log(results);
        results.locations.forEach(result => {
            let option = `<option value="${result.id_location}">${result.name}</option>`;
            resultsContainer.innerHTML += option;
        })
    }
    dest()
    // document.getElementById('registration-form').addEventListener('submit', async function(event) {
    //     event.preventDefault();
    //     const formData = new FormData(event.target);
    //         const request = await fetch('signup.php', {
    //             method: 'POST',
    //             body: formData
    //         })
    //         // console.log( await request.text())
    //         let result = await request.json();
    //         console.log(result)
    // });
    
});
