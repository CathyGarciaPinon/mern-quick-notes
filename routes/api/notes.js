const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// GET /api/notes
router.get('/', notesCtrl.index);
// GET /api/notes/:id
router.get('/:id', notesCtrl.show);
// POST /api/notes
router.post('/', ensureLoggedIn, notesCtrl.create);
// DELETE /api/notes/:id
router.delete('/:id', ensureLoggedIn, notesCtrl.delete);

module.exports = router;