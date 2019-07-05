const express = require('express');
const { body } = require('express-validator');
const apiController = require('../controllers/api');
const User = require('../models/user.model');
const router = express.Router();
const isAuth = require('../middleware/is-auth');

router.put('/signup', [
    body('email')
        .not().isEmpty().withMessage('Email cannot be empty.')
        .isEmail().withMessage('Please enter valid email.')
        .normalizeEmail()
        .custom((value, { req }) => {
            return User.findOne({ email: value }).then(userDoc => {
                if (userDoc) return Promise.reject('Email already in use.');
            })
        }),
    body('username')
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

router.post('/login', [
    body('username')
        .isLength({min: 3}).withMessage('Username cannot be less that 3 characters.')
        .not().isEmpty().withMessage('Username cannot be empty.'),
    body('password')
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
    .get(isAuth, apiController.getUserSubs)
    .put([
        isAuth,
        body('name')
            .not().isEmpty().withMessage('Name of Subscription Service cannot be empty.'),
        body('url')
            .not().isEmpty().withMessage('URL cannot be empty.')
            .not().isURL().withMessage('Must be a valid URL.')
    ], apiController.addUserSub)
    .delete(isAuth, apiController.removeUserSub);

router.route(':/username/subs/:sub')
    .get(isAuth, apiController.getSubData)
    .patch(isAuth, apiController.updateSubData);

module.exports = router;