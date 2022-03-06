const router = require('express').Router();

const { newNote } = require('../../lib/notes')

const { notes } = require('../../db/db.json');

console.log("notesRoute going through")


router.get('/notes', (req, res) => {
    // if(req.query){
    //     console.log("TEST 1")
    //     notes = getNotes(req.query, notes)
    // }
    console.log(notes, "notes should be here from notesRoute")
    let notesArray = notes
    console.log(req.query, "this tooo");
    console.log(notesArray, "notes should bee heere")
    console.log("notesRoute working")
    res.json(notesArray)
})

router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();

    const addNote = newNote(req.body, notes)
    console.log(addNote)
    res.json(addNote)
})

module.exports = router;