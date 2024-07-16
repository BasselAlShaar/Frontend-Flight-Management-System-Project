document.getElementById('book-hotel-btn').addEventListener('click', function() {
    window.location.href = 'book_a_hotel_index.html';
});

document.getElementById('book-transportation-btn').addEventListener('click', function(){
    window.location.href = 'book_a_transportation.html';
});

document.addEventListener('DOMContentLoaded', () => {
    const searchButton = document.querySelector('.search-btn');

    searchButton.addEventListener('click', (event) => {
        event.preventDefault();

        // Collect form data
        const pickupLocation = document.getElementById('pickup-location').value;
        const pickupDate = document.getElementById('pickup-date').value;
        const pickupTime = document.getElementById('pickup-time').value;
        const dropoffDate = document.getElementById('dropoff-date').value;
        const dropoffTime = document.getElementById('dropoff-time').value;
        const driverAge = document.getElementById('driver-age').checked;

        // Create an object with the form data
        const searchParams = {
            pickupLocation,
            pickupDate,
            pickupTime,
            dropoffDate,
            dropoffTime,
            driverAge
        };

        // Send the data to the backend
        fetch('http://localhost:3000/search-transportation', { // Update the URL to your backend endpoint
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(searchParams),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Search Results:', data);
            // Display search results on the page
            displaySearchResults(data);
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
});

function displaySearchResults(results) {
    // Implement this function to display the search results on your page
    const resultsContainer = document.querySelector('.results-container');
    resultsContainer.innerHTML = ''; // Clear previous results if any
    results.forEach(result => {
        const resultItem = document.createElement('div');
        resultItem.classList.add('result-item');
        resultItem.innerText = `Transportation from ${result.pickupLocation} on ${result.pickupDate}`;
        resultsContainer.appendChild(resultItem);
    });
}
