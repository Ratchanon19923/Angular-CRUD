const express = require('express');
const app = express();

const storeRouter = express.Router();
let Store = require('../model/store');

// Create Store
storeRouter.route('/create-store').post((req, res, next) => {
    Store.create(req.body, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }

    })
})

// Get all Store
storeRouter.route('/').get((req, res) => {
    Store.find((err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }

    })
})

// Get StoreById
storeRouter.route('/get-store/:id').get((req, res) => {
    Store.findById(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.json(data);
        }

    })
})

// Update StoreById
storeRouter.route('/update-store/:id').put((req, res, next) => {
    Store.findByIdAndUpdate(req.params.id, {
        $set: req.body
    }, (err, data) => {
        if (err) {
            console.log("err", err);
            return next(err);
        } else {
            res.json(data);
            console.log("Update Successfully", data);
        }

    })
})

//Delete StoreById
storeRouter.route('/delete-store/:id').delete((req, res) => {
    Store.findByIdAndRemove(req.params.id, (err, data) => {
        if (err) {
            return next(err);
        } else {
            res.status(200).json({
                msg: data
            });
        }

    })
})

module.exports = storeRouter;
