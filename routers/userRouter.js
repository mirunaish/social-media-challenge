/**
 * define this application's routes.
 * the handlers for routes are in controllers/userControllers.js
 * read more about routes in README.md
 */

const express = require('express');
const {create, readAll, readById, updateById, deleteById} = require('../controllers/userControllers.js');

// create a new express app
const router = express();


// add routes
router.route('/')
    .post(create)
    .get(readAll);

// with parameter user_id
router.route('/:user_id')
    .get(readById)
    .put(updateById)
    .delete(deleteById);

// export the router app for use by index.js later
exports.userRouter = router;