const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    name: {
        index: true,
        type: String,
        required: true,
        trim: true,
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
    nextPayment: {
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
    },
    renewal: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

const Sub = mongoose.model('Sub', subSchema);

module.exports = Sub;