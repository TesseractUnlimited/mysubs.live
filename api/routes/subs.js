const express = require('express');
const { body } = require('express-validator');
const subsController = require('../controllers/subs');
const subsRouter = express.Router();
const isAuth = require('../middleware/is-auth');

subsRouter.route('/:username')
    .get(isAuth, subsController.getUserSubs) //done
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
            .not().isEmpty().withMessage('Price cannot be empty.')
    ], subsController.addUserSub);

module.exports = subsRouter;