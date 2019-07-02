const User = require('../models/user.model');
const { validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.getData = (req, res, next) => {
    res.status(200).json({
        express: "Hi Bitch"
    });
};

exports.getUser = (req, res, next) => {
    const userQuery = req.params.username;
    // Check if the user logged in is this user
    User.find({ username: userQuery })
        .then(user => res.status(200).json(user))
        .catch(err => res.status(400).json('Error: ' + err));
}

exports.editUser = (req, res, next) => {
    const userQuery = req.params.username;
    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;
    User.find({ username: userQuery })
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            // Check if the user logged in is this user
            else {
                user[0].username = userQuery;
                user[0].email = email;
                user[0].password = password;
                user[0].name = name;
                return user[0].save();
            }
        })
        .then(result => {
            res.status(200).json({ message: "User updated!", post: result });
        })
        .catch(err => console.log("Error: " + err))
}

exports.deleteUser = (req, res, next) => {
    const userQuery = req.params.username;
    User.find({ username: userQuery })
        .then(user => {
            if (!user) {
                const error = new Error('Could not find user.');
                error.statusCode = 404;
                throw error;
            }
            else return User.findByIdAndRemove(user[0]._id);
            // Check if the user logged in is this user
        })
        .then(result => {
            console.log(result);
            res.status(200).json({ message: "Deleted User." });
        })
        .catch(err => console.log("Error: " + err));
}

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
            res.status(201).json({ message: 'User created!' });
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
                res.status(200).json({ token: token, userId: loadedUser._id.toString() });
            }
        })
        .catch(err => {
            if (!err.statusCode) err.statusCode = 500;
            next(err);
        })
}