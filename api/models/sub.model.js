const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const subSchema = new Schema({
    subName: {
        index: true,
        type: String,
        required: true,
        trim: true,
    },
    url: {
        type: String,
        required: true,
        trim: true,
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