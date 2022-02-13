/**
 * called by services/userService.js
 * repository - handles all the database operations
 */

const userModel = require('../models/User').userModel;

/**
 * tries to save a user to the database
 * returns: the created user or null if error
 */
 exports.create = async function(user) {
    console.log("repository: create function");

    // try to save the user
    var newUser;
    try { newUser = await user.save(); }
    catch (MongooseError) { return null; }

    console.log("repository: returning");
    return newUser;
}

/**
 * returns: an array of userModels from the database
 */
exports.readAll = async function() {
    console.log("repository: readAll function");

    // get the array of Users from the database
    const users = await userModel.find({});  // gets all

    console.log("repository: returning users");
    return users;
}

/**
 * returns: the User with the specified ID or null if error
 */
exports.readById = async function(id) {
    console.log("repository: readById function");
    
    var user;
    try { user = await userModel.findById(id); }
    catch (CastError) { return null; }  // id is not a valid id

    console.log("repository: returning user");
    return user;
}

/**
 * updates the user with the specified ID with the information provided
 * params:
 *     id - the ID of the user to be updated
 *     user - object containing information about the user
 * returns: the updated user or null if not found
 */
exports.updateById = async function(id, user) {
    console.log("repository: updateById function");
    
    var updatedUser;
    try { updatedUser = await userModel.findByIdAndUpdate(id, user, { new: true }); }
    catch (CastError) { return null; }  // id is not a valid id

    console.log("repository: returning user");
    return updatedUser;
}

/**
 * deletes the user with the specified ID.
 * returns: the deleted user or null if not found
 */
exports.deleteById = async function(id) {
    console.log("repository: deleteById function");
    
    var deletedUser;
    try { deletedUser = await userModel.findByIdAndDelete(id); }
    catch (CastError) { return null; }  // id is not a valid id

    console.log("repository: returning");
    return deletedUser;
}