const express = require('express');
const app = express();  // create an express app

// prepare database
// https://stackoverflow.com/a/27333799
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/social-media-challenge-db', function(err) {
    if (err) console.err(err);
    else console.log('connected');
});

// set up body parser
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

// set up morgan logger
const morgan = require('morgan');
app.use(morgan("dev"));

// set up routers
const userRouter = require('./routers/userRouter.js').userRouter;
app.use('/users', userRouter);

// tell the app to start listening for requests
const port = 5000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});