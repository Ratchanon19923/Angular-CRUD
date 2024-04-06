const mongoose = required('mongoose');
const Schema = mongoose.Schema;

let Store = new Schema({
    name: {
        type: String,
    },
    price: {
        type: String,
    },
    description: {
        type: String,
    }
}, {
    collection: 'store'
})

module.exports = mongoose.module('Store', Store);