const express = require('express');
const storeRouter = express.Router();


let StoreDB = require('../model/store');


// Get all Store
storeRouter.route('/get-store').get(async (req, res, next) => {
    try {
        const data = await StoreDB.find();
        res.json(data);
    } catch (err) {
        next(err);
    }
});

// Get StoreById
storeRouter.route('/get-store/:id').get(async (req, res, next) => {
    try {
        const data = await StoreDB.findById(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Store not found' });
        }
        res.json(data);
    } catch (err) {
        next(err);
    }
});


// Post create Store
storeRouter.route('/create-store').post(async (req, res, next) => {
    try {
        const data = await StoreDB.create(req.body);
        res.json(data);
    } catch (err) {
        next(err);
    }
});


// Put  update StoreById
storeRouter.route('/update-store/:id').put((req, res, next) => {
    StoreDB.findByIdAndUpdate(req.params.id, {
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
storeRouter.route('/delete-store/:id').delete(async (req, res, next) => {
    try {
        const data = await StoreDB.findByIdAndRemove(req.params.id);
        if (!data) {
            return res.status(404).json({ message: 'Store not found' });
        }
        res.status(200).json({ msg: 'Store deleted successfully' });
    } catch (err) {
        next(err);
    }
});

module.exports = storeRouter;
