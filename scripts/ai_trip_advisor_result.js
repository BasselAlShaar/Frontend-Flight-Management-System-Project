 // Retrieve the search results from localStorage
 const results = JSON.parse(localStorage.getItem('searchResults'));

 // Function to display search results
 function displaySearchResults(results) {
     let resultsHtml = '';
     if (results && results.length > 0) {
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
         resultsHtml = '<p>No results found.</p>';
     }
     document.getElementById('results').innerHTML = resultsHtml;
 }

 // Display the search results
 displaySearchResults(results);