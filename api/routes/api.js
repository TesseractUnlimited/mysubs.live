const express = require('express');
const { body } = require('express-validator');
const apiController = require('../controllers/api');
const User = require('../models/user.model');
const router = express.Router();
const isAuth = require('../middleware/is-auth');

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

router.route('/:username')
    .get(isAuth, apiController.getUserData) //done
    .patch([ //done
        isAuth,
        body('email')
            .optional({ checkFalsy: true }).isEmail().withMessage('Please enter valid email.')
            .optional({ checkFalsy: true }).custom((value, { req }) => {
                return User.findOne({ email: value }).then(userDoc => {
                    if (userDoc) return Promise.reject('Email already in use.');
                })
            }),
        body('username')
            .optional({ checkFalsy: true }).isLength({min: 3}).withMessage('Username cannot be less that 3 characters.')
            .optional({ checkFalsy: true }).custom((value) => {
                return User.findOne({ username: value }).then(userDoc => {
                    if (userDoc) return Promise.reject('Username already in use.');
                })
            }),
        body('password')
            .optional({ checkFalsy: true }).isLength({min: 8}).withMessage('Password cannot be less that 8 characters.')
    ], apiController.updateUserData)
    .delete(isAuth, apiController.deleteUserData); //done

router.route('/:username/subs')
    .get(isAuth, apiController.getUserSubs) //done
    .put([ //done
        isAuth,
        body('name')
            .trim()
            .not().isEmpty().withMessage('Name of Subscription Service cannot be empty.'),
        body('url')
            .trim()
            .not().isEmpty().withMessage('URL cannot be empty.')
            .isURL().withMessage('Must be a valid URL.'),
        body('price')
            .trim()
            .not().isEmpty().withMessage('Price cannot be empty.'),
        body('nextPayment')
            .trim()
            .not().isEmpty().withMessage('Next Payment cannot be empty.'),
        body('lastUsed')
            .trim()
            .not().isEmpty().withMessage('Last Used cannot be empty.'),
    ], apiController.addUserSub);

router.route('/:username/subs/:subId')
    .get(isAuth, apiController.getUserSubData) //done
    .patch([
        isAuth,
        body('subName')
            .trim()
            .optional({ checkFalsy: true }),
        body('url')
            .trim()
            .optional({ checkFalsy: true })
            .isURL().withMessage('Must be a valid URL.')
    ], apiController.updateUserSubData)  
    .delete(isAuth, apiController.deleteUserSubData);

module.exports = router;