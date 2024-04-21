// script.js

document.getElementById('reservation-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Gather form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    // Display reservation status (for demo purposes)
    const status = document.getElementById('reservation-status');
    status.innerHTML = `
        <p>Thank you for your reservation, ${name}!</p>
        <p>Reservation Details:</p>
        <ul>
            <li>Date: ${date}</li>
            <li>Time: ${time}</li>
            <li>Guests: ${guests}</li>
        </ul>
        <p>We'll send a confirmation email to ${email} shortly.</p>
    `;

    // You can add additional code here to handle reservation form data,
    // such as sending it to a server or displaying an alert.
});
