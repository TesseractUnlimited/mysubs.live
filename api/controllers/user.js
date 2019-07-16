const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.signup = (req, res, next) => {
    try {
        validationResult(req).throw();
    }
    catch(err) {
        return res.status(422).json(err.array());
    }
    
    const newEmail = req.body.email;
    const newUsername = req.body.username;
    const newPass = req.body.password;
    const newName = req.body.name;
    const newIsAdmin = req.body.isAdmin;
    const newIsPartner = req.body.isPartner;
    
    bcrypt.hash(newPass, 12)
        .then(hashedPass => {
            const newUser = new User({
                username: newUsername,
                email: newEmail,
                password: hashedPass,
                name: newName,
                isAdmin: newIsAdmin,
                isPartner: newIsPartner
            });
            newUser.save()
        })
        .then(() => {
            res.status(201).json({ msg: 'User created!' });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
}

exports.login = (req, res, next) => {
    try {
        validationResult(req).throw();
    }
    catch (err) {
        return res.status(422).json(err.array());
    }

    const username = req.body.username;
    const password = req.body.password;
    let loadedUser;
    User.findOne({ username: username })
        .then(user => {
            if (!user) {
                const error = new Error('A user with this username was not found.');
                error.statusCode = 401;
                throw error;
            }
            else {
                loadedUser = user;
                return bcrypt.compare(password, loadedUser.password);
            }
        })
        .then(isEqual => {
            if (!isEqual) {
                const error = new Error('Wrong password.');
                error.statusCode = 401;
                throw error;
            }
            else {
                const token = jwt.sign(
                {
                    username: loadedUser.username,
                    userId: loadedUser._id.toString()
                },
                'ultrAsup3rduperSecr3t',
                { expiresIn: '2h' }
                );
                res.status(200).json({ token: token, userId: loadedUser._id.toString(), username: loadedUser.username });
            }
        })
        .catch(err => {
            if (!err.statusCode) err.statusCode = 500;
            next(err);
        })
}

exports.getData = (req, res, next) => {
    res.status(200).json({
        express: "Hi Bitch"
    });
}

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
    const newIsAdmin = req.body.isAdmin;
    const newIsPartner = req.body.isPartner;

    User.findOne({ username: userParam })
        .exec((err, user) => {
            if (user) {
                if (newUsername && user.username !== newUsername)
                    user.username = newUsername;
                if (newEmail && user.email !== newEmail)
                    user.email = newEmail;
                if (newPassword) {
                    bcrypt.hash(newPassword, 12)
                        .then(hashedPass => user.password = hashedPass)
                        .catch(err => res.status(500).json(err));
                }
                if (newIsAdmin)
                    user.isAdmin = newIsAdmin;
                if (newIsPartner)
                    user.isPartner = newIsPartner;
                
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
