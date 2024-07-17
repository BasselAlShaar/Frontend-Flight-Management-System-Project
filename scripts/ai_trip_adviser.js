document.querySelector('form').addEventListener('submit', async function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the form values
    const destination = document.getElementById('destination').value;
    const budgetAmount = document.getElementById('budgetAmount').value;
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate').value;

    // Validate the input dates
    if (new Date(startDate) > new Date(endDate)) {
        alert("End date must be later than start date.");
        return;
    }

    // Prepare the request payload
    const requestData = {
        destination: destination,
        days: days,
        budget: budget

    };

    try {
        // Make an AJAX request to the backend API
        const response = await fetch('http://localhost/Backend-Flight-Management-System-Project/AI/suggest.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(requestData)
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.statusText}`);
        }

        // Parse the JSON response
        const results = await response.json();

        // Save the results to localStorage
        localStorage.setItem('searchResults', JSON.stringify(results));

        // Redirect to the results page
        window.location.href = 'ai_trip_advisor_result.html';
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while searching. Please try again.');
    }
});
document.getElementById('logo').addEventListener('click', function() {
    window.location.href = '../index.html'; 
});