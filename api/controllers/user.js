const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');

exports.getUserData = (req, res, next) => {
    const userParam = req.params.username;
    // Check if the user logged in is this user
    User.findOne({ username: userParam })
        .then(user => {
            res.status(200).json({
                user: user
                });
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.updateUserData = (req, res, next) => {
    try {
        validationResult(req).throw();
    } catch (err) {
        return res.status(422).json(err.array());
    }

    const userParam = req.params.username;
    const newUsername = req.body.username;
    const newEmail = req.body.email;
    const newPassword = req.body.password;

    User.findOne({ username: userParam })
        .exec((err, user) => {
            if (user) {
                if (newUsername && user.username !== newUsername)
                    user.username = newUsername;
                if (newEmail && user.email !== newEmail) user.email = newEmail;
                if (newPassword) {
                    bcrypt.hash(newPassword, 12)
                        .then(hashedPass => user.password = hashedPass)
                        .catch(err => res.status(500).json(err));
                }
                user.save();
                res.status(200).json(user);
            }
            else res.status(404).json({ error: err, msg: "User was not found." });
        });
}

exports.deleteUserData = (req, res, next) => {
    const userParam = req.params.username;
    User.findOneAndDelete({ username: userParam })
        .exec((err, user) => {
            if (err) res.status(400).json({ error: err, msg: "The user was not found." });
            else res.status(200).json({ msg: "Success, User was deleted." });
        });
}
