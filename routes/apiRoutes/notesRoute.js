const router = require('express').Router();

const { newNote, findById, deleteNote } = require('../../lib/notes')

const { notes } = require('../../db/db.json');

console.log("notesRoute going through")


router.get('/notes', (req, res) => {
    // if(req.query){
    //     console.log("TEST 1")
    //     notes = getNotes(req.query, notes)
    // }
    // console.log(notes, "notes should be here from notesRoute")
    let notesArray = notes
    // console.log(req.query, "this tooo");
    // console.log(notesArray, "notes should bee heere")
    // console.log("notesRoute working")
    res.json(notesArray)
})

router.delete('/notes/:id',(req, res) => {
    const result = findById(req.params.id, notes);
    console.log(result)
    if(result){
        res.json(result);
    } else {
        console.log('HERE, 404 LINE')
        res.sendStatus(404);
    }
    deleteNote(req.params.id , notes)
})



router.post('/notes', (req,res) => {
    req.body.id = notes.length.toString();

    const addNote = newNote(req.body, notes)
    console.log(addNote)
    res.json(addNote)
})

module.exports = router;