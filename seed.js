require('dotenv').config;
require('./config/database');

const Note = require('./models/note');


(async function() {
  await Note.deleteMany({});
  const notes = await Note.create([
    {name: '', user:[]},
    
  ]);


  console.log(note)

  process.exit();

})();
