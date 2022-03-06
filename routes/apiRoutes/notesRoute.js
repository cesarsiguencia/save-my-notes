const router = require('express').Router();

const { newNote } = require('../../lib/notes')

const { notes } = require('../../db/db.json');

console.log("notesRoute going through")


router.get('/notes', (req, res) => {
    // if(req.query){
    //     console.log("TEST 1")
    //     notes = getNotes(req.query, notes)
    // }

    console.log(req.query);

    res.json(notes)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();

    const addNote = newNote(req.body, notes)
    res.json(addNote)
})

module.exports = router;