const User = require('../models/user.model');
const Sub = require('../models/sub.model');
const { validationResult } = require('express-validator');

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
    }
    catch (err) {
        res.status(422).json(err.array());
    }

    const userQuery = req.params.username;
    const newSub = new Sub({
        name: req.body.name,
        url: req.body.url,
        price: req.body.price,
        nextPayment: new Date(Date.UTC(
            req.body.nextPayment.year,
            req.body.nextPayment.month,
            req.body.nextPayment.day
        )),
        lastUsed: new Date(Date.UTC(
            req.body.lastUsed.year,
            req.body.lastUsed.month,
            req.body.lastUsed.day
        ))
    });
    User.findOne({ username: userQuery })
        .exec((err, user) => {
            if (err) res.status(404).json({ error: err,  msg: "User not found." });
            else {
                newSub.user = user
                newSub.save();
                user.subs.map((oldSub) => {
                    if (oldSub === null || oldSub === undefined)
                        user.subs.remove(oldSub);
                })
                user.subs.push(newSub);
                user.save();
                res.status(201).json({ msg: "New sub created and added to User!" })
            }
        });
}