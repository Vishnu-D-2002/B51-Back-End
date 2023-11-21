// require express
const express = require('express');
// import cors
const cors = require('cors');
// import userRouter
const usersRouter = require('./controllers/users');
const loginRouter = require('./controllers/login');
const notesRouter = require('./controllers/notes');

// create a new express app
const app = express();

// use the cors middleware
app.use(cors());
// use the express.json middleware
app.use(express.json());

// define the endpoints here
app.use('/api/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/notes', notesRouter);

// export the app
module.exports = app;