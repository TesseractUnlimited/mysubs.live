const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const homeRoute = require('./Routes/home');

//Creates express obj
const app = express();
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, './Views'));

app.use(express.static(path.join(__dirname, 'Public')));
app.use(bodyParser.urlencoded({extended: false}));

//Send the home page html
app.use(homeRoute);

// Starts the server
app.listen(8081);
