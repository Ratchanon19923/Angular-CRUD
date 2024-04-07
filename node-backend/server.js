
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const bodyParser = require('body-parser');

// Post
const port = process.env.PORT || 8080;
const url = "mongodb+srv://admin:1234@cluster0.ilwjhrn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

mongoose.Promise = global.Promise;

// Conncet to MongoDB
mongoose.connect(url, {
    // uesNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}, error => {
    console.log('Database error:' + error);
})

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(cors())

const storeRoute = require('./routes/store.routes');

// Static directory path
app.use(express.static(path.join(__dirname, 'dist/')));
// Base route 
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});

// API root
app.use('/api', storeRoute);

app.listen(port, () => {
    console.log("Server is running on port " + port);
});

// 404 Handler
app.use((req, res, next) => {
    next(createError(404));
})

// Error Handler
app.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) {
        err.statusCode = 500;
        res.status(err.statusCode).send(err.message)
    }
})







