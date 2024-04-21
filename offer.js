// script.js

// Handle button clicks for special offers
document.querySelectorAll('.offer-btn').forEach(button => {
    button.addEventListener('click', function() {
        // Add code to handle the offer button action, e.g., redirect to the specific offer page
        // You can use `window.location.href` with the URL of the offer page
        window.location.href = '/offer-page-url';
    });
});
