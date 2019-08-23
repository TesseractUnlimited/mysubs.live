const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

// Route Imports 
const subRoutes = require('./api/routes/sub');
const subsRoutes = require('./api/routes/subs');
const userRoutes = require('./api/routes/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/dist')));

// Send index.html when new route appears
app.get('*',  (req, res, next) => {
    res.sendFile(path.resolve(__dirname, 'dist', 'index.html'))
});

// Database Connection
const uri = 'mongodb+srv://ssalcedo00:nalgonio1@cluster0-vtosk.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(uri, {useNewUrlParser: true, useCreateIndex: true })
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully.");
})

// Header Settings
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// '/api' GET route
app.use('/sub', subRoutes);
app.use('/subs', subsRoutes);
app.use('/user', userRoutes);

app.use((error, req, res, next) => {
    //console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ error: error, message: message});
});

// console.log that your server is up and running
app.listen(port, () => console.log(` > Listening on port ${port}`));