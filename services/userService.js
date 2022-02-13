/**
 * called by controllers/userControllers.js
 * user service - is called by controllers, manipulates data and calls repository functions
 * calls repositories/userRepository.js
 */

userRepository = require('../repositories/userRepository');
userModel = require('../models/User').userModel;

/**
 * creates the user with data in the request
 * returns:
 *     the user if successful
 *     null otherwise
 */
 exports.create = async function(req) {
    console.log("service: create function");

    // turn the request body into a userModel object
    const user = new userModel({ ...req.body });

    // send it to the repository for saving to the database
    const newUser = await userRepository.create(user);

    // return the created user to the controller or null if failure
    console.log("service: returning user");
    return newUser;
}

/**
 * returns an array of userModels from the database
 */
exports.readAll = async function(req) {
    // request is not used

    console.log("service: readAll function");

    // ask the repository for an array of User model objects
    const users = await userRepository.readAll();

    // send it back to the controller
    console.log("service: returning users");
    return users;
}

/**
 * returns the user specified in the user_id parameter of the request or null if not found
 */
exports.readById = async function(req) {
    console.log("service: readById function");

    // get the user from the repository
    const user = await userRepository.readById(req.params.user_id);

    // send it to the controller
    console.log("service: returning user");
    return user;
}

/**
 * updates the user with the specified ID with the information provided
 * returns: the updated user
 */
exports.updateById = async function(req) {
    console.log("service: updateById function");

    // ask the repository to update the user
    const updatedUser = await userRepository.updateById(req.params.user_id, req.body);

    // return it to the controller
    console.log("service: returning user");
    return updatedUser;
}

/**
 * deletes the user with id req.params.user_id
 * returns: the user
 */
exports.deleteById = async function(req) {
    console.log("service: deleteById function");

    // ask the repository to delete the user
    const deletedUser = await userRepository.deleteById(req.params.user_id);

    // return the user
    console.log("service: returning user");
    return deletedUser;
}