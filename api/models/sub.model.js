const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    name: {
        index: true,
        type: String,
        required: true,
        trim: true,
    },
    desc: {
        type: String,
        trim: true
    },
    url: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true,
        trim: true,
    },
    billingCycle: {
        type: String,
        required: true
    },
    billingDate: {
        type: Date,
        required: true
    },
    lastUsed: {
        type: Date,
        required: true
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
},
{
    timestamps: true
});

const Sub = mongoose.model('Sub', subSchema);

module.exports = Sub;