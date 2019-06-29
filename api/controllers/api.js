const User = require('../models/user.model');

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

exports.addUser = (req, res, next) => {
    const newUsername = req.body.username;
    const newEmail = req.body.email;
    const newPassword = req.body.password;

    const newUser = new User({
            username: newUsername,
            email: newEmail,
            password: newPassword
        });

    newUser.save()
        .then(() => res.status(201).json('User Added!'))
        .catch(err => err.status(400).json('Error: ' + err));
}

exports.editUser = (req, res, next) => {
    const userQuery = req.params.username;
    const email = req.body.email;
    const password = req.body.password;
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
    const email = req.body.email;
    const username = req.body.username;
    const password = req.body.password;
}