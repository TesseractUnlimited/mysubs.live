const express = require('express');
const { body } = require('express-validator');
const apiController = require('../controllers/api');
const router = express.Router();

router.get('/:username', apiController.getUser);
router.post('/addUser', apiController.addUser);
router.put('/:username/edit', apiController.editUser);
router.delete('/:username/delete', apiController.deleteUser);
router.get('*', apiController.getData);

module.exports = router;