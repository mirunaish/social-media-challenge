/**
 * api route handler functions
 * executes a request and/or responds with requested information
 * calls service in services/userService.js
 */

userService = require('../services/userService');

// export handler functions as keys

/**
 * req: user information
 * effect: creates a new user with the given information
 * res: the posted user
 */
 exports.create = async function(req, res) {
    console.log("controller: got POST /users request");
    const user = await userService.create(req);
    console.log("controller: sending response");
    res.status(user ? 201 : 400).json(user);
}

/**
 * req: nothing
 * res: all users as an array of objects
 */
exports.readAll = async function(req, res) {
    console.log("controller: got GET /users request");
    const users = await userService.readAll(req);
    console.log("controller: sending response");
    res.json(users);
}

/**
 * req: user_id
 * res: the specified user
 */
exports.readById = async function(req, res) {
    console.log("controller: got GET /users/" + req.params.user_id + " request");
    const user = await userService.readById(req);
    console.log("controller: sending response");
    res.status(user ? 200 : 404).json(user);
}

/**
 * req: user_id, user information
 * effect: updates the specified user with the given information
 * res: the updated user
 */
exports.updateById = async function(req, res) {
    console.log("controller: got PUT /users/" + req.params.user_id + " request");
    const updatedUser = await userService.updateById(req);
    console.log("controller: sending response");
    res.status(updatedUser ? 200 : 400).json(updatedUser);
}

/**
 * req: user_id
 * effect: deletes the specified user
 * res: the user
 */
exports.deleteById = async function(req, res) {
    console.log("controller: got DELETE /users/" + req.params.user_id + " request");
    const user = await userService.deleteById(req);
    console.log("controller: sending response");
    res.status(user ? 200 : 404).json(user);
}