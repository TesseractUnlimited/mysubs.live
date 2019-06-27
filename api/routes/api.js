const express = require('express');
const apiController = require('../controllers/api');
const router = express.Router();

// '/' GET
router.get('*', apiController.getData);

module.exports = router;