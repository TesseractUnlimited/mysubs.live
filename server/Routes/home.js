const path = require('path');
const express = require('express');

const rootDir = require('../Helpers/path');
const router = express.Router();

//Routing Middleware
router.get('/', function (req, res, next) {
    res.render('Index');
});

module.exports = router;
