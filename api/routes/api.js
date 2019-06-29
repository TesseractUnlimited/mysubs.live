const express = require('express');
const { body } = require('express-validator');
const apiController = require('../controllers/api');
const User = require('../models/user.model');
const router = express.Router();

router.get('/:username', apiController.getUser);
router.post('/addUser', apiController.addUser);
router.put('/:username/edit', apiController.editUser);
router.delete('/:username/delete', apiController.deleteUser);
router.get('*', apiController.getData);

router.put('/signup', [
    body('email')
        .isEmail()
        .withMessage('Please enter a valid email.')
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) return Promise.reject();
            })
        })
    .normalizeEmail()
]);

module.exports = router;