const path = require('path');
const express = require('./node_modules/express');

const rootDir = require('../helpers/path');
const router = express.Router();

//Routing Middleware
router.get('/', function (req, res, next) {
    res.render('Index');
});

module.exports = router;
