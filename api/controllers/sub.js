const User = require('../models/user.model');
const Sub = require('../models/sub.model');
const { validationResult } = require('express-validator');

exports.getUserSubData = (req, res, next) => {
    const userQuery = req.params.username;
    const idQuery = req.params.subId;

    Sub.findById(idQuery)
        .exec((err, sub) => {
            if (err) res.status(404).json({ msg: "Sub not found." });
            else {
                User.findOne({ username: userQuery })
                    .exec((err, user) => {
                        if (err) res.status(404).json({ msg: "Sub user id doesnt not match id for provided username." })
                        else if (user._id.toString() === sub.user.toString()) res.status(200).json({ sub: sub });
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
    const newDesc = req.body.desc;
    const newURL = req.body.url;
    const newPrice = req.body.price;
    const newBillingCycle = req.body.billingCycle;
    const newBillingDate = req.body.billingDate;
    const newLastUsed = req.body.lastUsed;
    
    Sub.findById(idQuery)
        .exec(sub => {
            if (!sub) res.status(404).json({ msg: "Sub not found." });
            else {
                if (newSubName && newSubName != sub.subName) sub.subName = newSubName;
                if (newDesc && newDesc != sub.desc) sub.desc = newDesc;
                if (newURL && newURL != sub.url) sub.url = newURL;
                if (newPrice && newPrice != sub.price) sub.price = newPrice;
                if (newBillingCycle && newBillingCycle != sub.billingCycle) sub.billingCycle = newBillingCycle;
                if (newBillingDate && newBillingDate != sub.BillingDate) sub.BillingDate = newBillingDate;
                if (newLastUsed && newLastUsed != sub.lastUsed) sub.lastUsed = newLastUsed;
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