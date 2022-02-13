# Social Media Challenge
## A social media REST CRUD API

### API routes
* POST http://localhost:5000/users - saves the user in the request body to the database, returns the user or `null` if not found
* GET http://localhost:5000/users - returns an array of all users
* GET http://localhost:5000/users/user_id - returns the specified user, or `null` if not found
* PUT http://localhost:5000/users/user_id - updates the user with id with information from the request body, returns the updated user or `null` if error
* DELETE http://localhost:5000/users/user_id - deletes the specified user, returns the user if successful and `null` if user not found

### Data flow
[index.js](index.js) creates an app and adds the routes defined in [routers](routers/userRouter.js).
The routes receive HTTP requests from the user and call functions defined in [controllers](controllers/users/index.js) which call functions in the [service](services/users/index.js) which then call functions in the [repository](repositories/users/index.js) which uses the database defined in index.js to execute a task (post, get, put, or delete).

### Error handling and recovery
If an ID parameter does not exist in the database, 404/400 is returned.
Setting the _id field in the request body in a POST or PUT results in a 400 response unless the id is valid and unused.
Extraneous fields in POST and PUT request bodies are ignored.
If the POST request body contains a string in a field that is supposed to be something else (for example, date in the case of birthday), 400 is returned.

### Dependencies
* built using the Express framework to handle routing
* uses a MongoDB database with Mongoose
* see other dependencies in [package.json](package.json)

### Sources
* Main source was an [example](https://github.com/expressjs/express/tree/master/examples/mvc) linked in the Express documentation.
* [Express documentation](https://expressjs.com/en/5x/api.html)
* Mongoose [documentation](https://mongoosejs.com/docs/api.html) and [github](https://github.com/Automattic/mongoose)
* Stack Overflow
    * https://stackoverflow.com/a/27333799
    * https://stackoverflow.com/questions/38296667/getting-unexpected-token-export#40021867
* DALI help sessions

### Running
1. install dependencies with `npm install`
2. create the MongoDB `social-media-challenge-db` database
3. `npm run start`, or run with nodemon `npm run nodemon`