const express = require('express');
const { body } = require('express-validator');
const subController = require('../controllers/sub');
const router = express.Router();
const isAuth = require('../middleware/is-auth');

router.route('/:username/subs/:subId')
    .get(isAuth, subController.getUserSubData) //done
    .patch([
        isAuth,
        body('subName')
            .trim()
            .optional({ checkFalsy: true }),
        body('url')
            .trim()
            .optional({ checkFalsy: true })
            .isURL().withMessage('Must be a valid URL.')
    ], subController.updateUserSubData)
    .delete(isAuth, subController.deleteUserSubData);

module.exports = router;