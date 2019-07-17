const express = require('express');
const { body } = require('express-validator');
const userController = require('../controllers/user');
const User = require('../models/user.model');
const userRouter = express.Router();
const isAuth = require('../middleware/is-auth');

userRouter.put('/signup', [ //done
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
    userController.signup);

userRouter.post('/login', [ //done
    body('username')
        .trim()
        .isLength({min: 3}).withMessage('Username cannot be less that 3 characters.')
        .not().isEmpty().withMessage('Username cannot be empty.'),
    body('password')
        .trim()
        .not().isEmpty().withMessage('Password cannot be empty.')
        .isLength({min: 8}).withMessage('Password cannot be less that 8 characters.')
], userController.login);

userRouter.route('/:username')
    .get(isAuth, userController.getUserData) //done
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
    ], userController.updateUserData)
    .delete(isAuth, userController.deleteUserData); //done

module.exports = userRouter;