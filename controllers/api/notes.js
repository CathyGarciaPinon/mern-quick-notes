const Note = require('../../models/note');

module.exports = {
    index,
    show,
    create,
    delete: deleteNote
};

async function index(req, res) {
    const notes = await Note.find({});
    // re-sort based upon the sortOrder of the populated categories
    res.json(notes);
  }
  
  async function show(req, res) {
    const note = await Note.findById(req.params.id);
    res.json(note);
  }

  async function create(req, res) {
    req.body.user = req.user._id;
    const note = await Note.create(req.body);
    res.json(note);
  }
  
  async function deleteNote(req, res) {
    req.body.user = req.user._id;
    const note = await Note.findByIdAndDelete(req.params.id);
    res.json(note);
  }