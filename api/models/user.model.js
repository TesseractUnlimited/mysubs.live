const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        index: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: true
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 8
    },
    name: {
        type: String,
        required: true,
        trim: true,
    },
    subs: [{
        type: Schema.Types.ObjectId,
        ref: 'Sub'
    }]
},
{
    timestamps: true
});

const User = mongoose.model('User', userSchema);

module.exports = User;