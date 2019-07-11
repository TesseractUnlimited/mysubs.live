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

exports.getUserSubs = (req, res, next) => {
    const userParam = req.params.username;
    User.findOne({ username: userParam }).populate('subs')
        .exec((err, user) => {
            if (err) res.status(400).json(err);
            else res.status(200).json(user.subs);
        });
}

exports.addUserSub = (req, res, next) => {
    try {
        validationResult(req).throw();
    } catch (err) {
        return res.status(422).json(err.array());
    }

    const userQuery = req.params.username;
    const newSub = new Sub({
        name: req.body.name,
        url: req.body.url,
        price: req.body.price,
        nextPayment: req.body.nextPayment,
        lastUsed: req.body.lastUsed
    });
    User.findOne({ username: userQuery })
        .exec((err, user) => {
            console.log(user);
            if (err) res.status(404).json({ error: err,  msg: "User not found." });
            else {
                newSub.user = user
                newSub.save();
                user.subs.push(newSub);
                user.save();
                res.status(201).json({ msg: "New sub created and added to User!" })
            }
        });
}

exports.getUserSubData = (req, res, next) => {
    const userQuery = req.params.username;
    const idQuery = req.params.subId;

    Sub.findById(idQuery)
        .exec(sub => {
            if (!sub) res.status(404).json({ msg: "Sub not found." });
            else {
                User.findOne({ username: userQuery })
                    .exec(user => {
                        if (user._id.toString() === sub.user.toString()) res.status(200).json(sub);
                        else res.status(404).json({ msg: "Sub user id doesnt not match id for provided username." });
                    });
            } 
        });
}

exports.updateUserSubData = (req, res, next) => {
    try {
        validationResult(req).throw();
    } catch (err) {
        return res.status(422).json(err.array());
    }

    const idQuery = req.params.subId;
    const newSubName = req.body.subName;
    const newURL = req.body.url;
    Sub.findById(idQuery)
        .exec(sub => {
            if (!sub) res.status(404).json({ msg: "Sub not found." });
            else {
                if (newSubName && newSubName != sub.subName) sub.subName = newSubName;
                if (newURL && newURL != sub.url) sub.url = newURL;
                sub.save();
                res.status(200).json({ updatedSub: sub, msg: "Sub succesfully updated!" });
            } 
        });
}

exports.deleteUserSubData = (req, res, next) => {
    const userQuery = req.params.username;
    const idQuery = req.params.subId;

    User.findOne({ username: userQuery })
        .exec((err, user) => {
            if (err) res.status(400).json({ error: err, msg: "Couldn't find user by username." });
            else {
                user.subs.remove(idQuery);
                user.save();
            }
        })

    Sub.deleteOne({ _id: idQuery }, (err) => {
        if (err) res.status(404).json({ error: err, msg: "Sub not found." });
        else res.status(200).json({ msg: "Sub successfully deleted." });
    });
}