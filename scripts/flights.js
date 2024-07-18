
document.getElementById('form').addEventListener('submit', async function(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const request = await fetch('../../Backend-Flight-Management-System-Project/flights/search.php', {
        method: 'POST',
        body: formData
    })
    console.log(formData);
    let result = await request.json();
    console.log(result)
    const list = document.querySelector(".flight-list")
    result.flights.forEach(flight=>{
        list.innerHTML += `
        <div class="flight-item">
            <div class="flight-details">
                <div class="airline-logo"><img src="./Middle_East_Airlines-Logo.wine.png" alt="" height="60px">
                </div>
                <div class="time-airline">
                    <div class="airline">${flight.name}</div>
                </div>
                <div class="flight-number">${flight.flight_number}</div>
                <div class="departure-time">${flight.departure_time} - <span>${flight.arrival_time}</span></div>
            </div>
            <div class="right-section">
                <div class="price">$${flight.price}</div>
                <button class="book-button">Book Now</button>
            </div>
        </div>
        `
    })
});