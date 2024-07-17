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

        // Display the search results
        let resultsHtml = '<h2>Search Results</h2>';
        if (results.length > 0) {
            results.forEach(result => {
                resultsHtml += `
                    <div>
                        <p>Destination: ${result.destination}</p>
                        <p>Budget: $${result.budget}</p>
                        <p>Available From: ${result.availableFrom}</p>
                        <p>Available To: ${result.availableTo}</p>
                    </div>
                    <hr>
                `;
            });
        } else {
            resultsHtml += '<p>No results found.</p>';
        }
        document.getElementById('results').innerHTML = resultsHtml;
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred while searching. Please try again.');
    }
});
