const express = require('express');
const passport = require('passport');
require('./config/passport'); // or wherever you set up passport

const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes'); 
const cors = require('cors'); // Import the cors package

const session = require('express-session');

const app = express();

app.use(session({
    secret: '7eefdc274d0c24c2ae3af303d7a099888449da8fcd368efa7bd82c2859813a68',
    resave: false,
    saveUninitialized: false,
}));

const PORT = process.env.PORT || 5000;

app.use(cors()); // Use the cors middleware to allow all origins. Place this line before other middlewares and routes.

app.use(express.json());

app.use(passport.initialize());
app.use(passport.session()); // If you're using sessions

// Build the MONGO_URI from the separate environment variables
const MONGO_HOST = process.env.MONGO_HOST;
const MONGO_PORT = process.env.MONGO_PORT;
const MONGO_USER = process.env.MONGO_USER;
const MONGO_PASS = process.env.MONGO_PASS;

if (!MONGO_HOST || !MONGO_PORT || !MONGO_USER || !MONGO_PASS) {
    console.error('Some MongoDB environment variables are missing. Ensure you have them set up in docker-compose.yml.');
    process.exit(1);
}

// Updated MONGO_URI to include the username and password
const MONGO_URI = `mongodb://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}:${MONGO_PORT}/admin`;


mongoose.connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB successfully'))
.catch(err => {
    console.error('Failed to connect to MongoDB:', err);
    process.exit(1);
});

app.use('/api', authRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error('Error:', err.message, '\nStack:', err.stack);
    res.status(500).send('Something went wrong!');
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
