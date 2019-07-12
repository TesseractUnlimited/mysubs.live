const express = require('express');
const { body } = require('express-validator');
const apiController = require('../controllers/api');
const User = require('../models/user.model');
const router = express.Router();

router.put('/signup', [ //done
    body('email')
        .trim()
        .not().isEmpty().withMessage('Email cannot be empty.')
        .isEmail().withMessage('Please enter valid email.')
        .normalizeEmail()
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) return Promise.reject('Email already in use.');
            })
        }),
    body('username')
        .trim()
        .not().isEmpty().withMessage('Username cannot be empty.')
        .custom((value) => {
            return User.findOne({ username: value }).then(userDoc => {
                if (userDoc) return Promise.reject('Username already in use.');
            })
        })
        .isLength({min: 3}).withMessage('Username cannot be less that 3 characters.'),
    body('name')
        .not().isEmpty().withMessage('Name cannot be empty.'),
    body('password')
        .not().isEmpty().withMessage('Password cannot be empty.')
        .isLength({min: 8}).withMessage('Password cannot be less that 8 characters.')
],
    apiController.signup);

router.post('/login', [ //done
    body('username')
        .trim()
        .isLength({min: 3}).withMessage('Username cannot be less that 3 characters.')
        .not().isEmpty().withMessage('Username cannot be empty.'),
    body('password')
        .trim()
        .not().isEmpty().withMessage('Password cannot be empty.')
        .isLength({min: 8}).withMessage('Password cannot be less that 8 characters.')
], apiController.login);

module.exports = router;