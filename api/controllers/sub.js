const User = require('../models/user.model');
const Sub = require('../models/sub.model');
const { validationResult } = require('express-validator');

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