const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// a collection of data about each user
const User = new Schema({
    name: String,
    year: String,
    picture: String,
    gender: String,

    "American Indian or Alaska Native": String,
    Asian: String,
    "Black or African American": String,
    "Hispanic or Latino": String,
    "Middle Eastern": String,
    "Native Hawaiian or Other Pacific Islander": String,
    White: String,
    Other: String,

    major: String,
    minor: String,
    modification: String,
    birthday: Date,
    role: String,
    home: String,

    quote: String,
    favoriteShoe: String,
    favoriteArtist: String,
    favoriteColor: String,
    phoneType: String
});

// convert schema into model and export it
exports.userModel = mongoose.model('User', User);  
