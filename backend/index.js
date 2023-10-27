require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');

const username = process.env.MONGO_INITDB_ROOT_USERNAME;
const password = process.env.MONGO_INITDB_ROOT_PASSWORD;

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(`mongodb://${username}:${password}@localhost:27017/devgree_db`, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Start the express server after connecting to MongoDB
    app.listen(PORT, () => {
        console.log(`Server is running on http://localhost:${PORT}`);
    });
}).catch(err => {
    console.error('Database connection error', err);
});
