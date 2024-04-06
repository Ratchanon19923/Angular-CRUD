const { error } = require('console');
let express = require('express'),
    path = require('path'),
    mongoose = require('mongoose'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    mongodb = require('./database/db')


mongoose.Promise = global.Promise;
mongoose.connect(mongodb.db, {
    uesNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}).then(() => {
    console.log('Database connected successfully');
}, error => {
    console.log('Database error:' + error);
})

const storeRoute = require('./routes/store.routes');
const { create } = require('domain');

const add = express();
add.use(bodyParser.json());
add.use(bodyParser.urlencoded({
    extended: false,
}));
add.use(cors());


// Static directory path
add.use(express.static(path.join(__dirname, 'dist/')));
// Base route 
add.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/index.html'))
});


// API root
add.use('/api', storeRoute);

// Post
const port = process.env.PORT || 8000;

add.listen(port, () => {
    console.log("Listening on port:" + port);
})

// 404 Handler
add.use((req, res, next) => {
    next(createError(404));
})

// Error Handler
add.use((err, req, res, next) => {
    console.error(err.message);
    if (!err.statusCode) {
        err.statusCode = 500;
        res.status(err.statusCode).send(err.message)
    }
})

