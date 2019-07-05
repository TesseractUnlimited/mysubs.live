const User = require('../models/user.model');
const Sub = require('../models/sub.model');
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
    
    bcrypt.hash(newPass, 12)
        .then(hashedPass => {
            const newUser = new User({
                username: newUsername,
                email: newEmail,
                password: hashedPass,
                name: newName
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
};

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
        .then(user => {
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
        })
        .catch(err => res.status(404).json(err));
}

exports.deleteUserData = (req, res, next) => {
    const userParam = req.params.username;
    User.findOneAndDelete({ username: userParam })
        .then(() => res.status(200).json({ msg: "Success, User was deleted." }))
        .catch(err => res.status(404).json(err));
}

exports.getUserSubs = (req, res, next) => {
    const userParam = req.params.username;
    // Check if the user logged in is this user
    User.findOne({ username: userParam })
        .then(user => {
            res.status(200).json({
                subs: user.subs
            });
        })
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.addUserSub  = (req, res, next) => {
    
}

exports.removeUserSub = (req, res, next) => {

}

exports.getSubData = (req, res, next) => {

}

exports.updateSubData = (req, res, next) => {

}