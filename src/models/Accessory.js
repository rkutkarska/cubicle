const mongoose = require('mongoose');

const accessorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true,
        validate: {
            validator: /^https?/g,
            message: 'Image URL should be link'
        }
    },
    description: {
        type: String,
        maxlength: 120,
        required: true
    }
});

const Accessory = mongoose.model('Accessory', accessorySchema);
module.exports = Accessory;