// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Note = require('./models/note');

// Local variables will come in handy for holding retrieved documents
let user, note;
let users, notes;
