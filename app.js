// Import required modules
const express = require('express');
const bodyParser = require('body-parser');

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static('public')); // Serving static files from the 'public' directory

// Define routes
app.post('/book', (req, res) => {
    // Logic to handle booking
    const { time, name, email } = req.body;
    // Implement your booking logic here
    console.log(`Booking request received for ${time} by ${name} (${email})`);
    res.send(`Booking confirmed for ${time}`);
});

app.post('/cancel', (req, res) => {
    // Logic to handle cancellation
    const { time } = req.body;
    // Implement your cancellation logic here
    console.log(`Cancellation request received for ${time}`);
    res.send(`Booking cancelled for ${time}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
