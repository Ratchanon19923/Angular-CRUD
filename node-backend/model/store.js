const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Store = new Schema({
    name: {
        type: String,
        require: true
    },
    price: {
        type: String,
        require: true
    },
    description: {
        type: String,
    }
}, {
    collection: 'store'
})

module.exports = mongoose.model('Store', Store);