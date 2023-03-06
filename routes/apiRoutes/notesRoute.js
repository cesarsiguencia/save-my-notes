const router = require('express').Router();

const { newNote, findById, deleteNote } = require('../../lib/notes')

const { notes } = require('../../db/db.json');


router.get('/', (req, res) => {
    let notesArray = notes
    res.json(notesArray)
})

router.delete('/:id', (req, res) => {
    const result = findById(req.params.id, notes);
    if (result) {
        res.json(result);
    } else {
        res.sendStatus(404);
    }
    deleteNote(req.params.id, notes)
})



router.post('/', (req, res) => {
    if (notes.length == 0) {
        req.body.id = 1
    } else {
        var lastIndexId = notes[notes.length - 1].id
        //change to numberic value! or number will add a digit, not value!
        lastIndexId = parseInt(lastIndexId)
        req.body.id = lastIndexId + 1
    }

    req.body.id = req.body.id.toString()
    const addNote = newNote(req.body, notes)
    console.log(addNote)
    res.json(addNote)
})

module.exports = router;