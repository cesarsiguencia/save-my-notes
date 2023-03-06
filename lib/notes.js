const fs = require("fs");
const path = require("path");

function newNote(addNote, notesArray) {
    notesArray.push(addNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );
    return addNote
}


function findById(id, notesArray) {
    const result = notesArray.filter(note => note.id === id)[0]
    return result
}

function deleteNote(id, notesArray) {
    const index = notesArray.findIndex(function (element) {
        return element.id === id;
    })

    if (index >= 0) {
        notesArray.splice(index, 1)
        console.log(notesArray)

        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({ notes: notesArray }, null, 2)
        );
    }
    return notesArray
}


module.exports = {
    newNote,
    findById,
    deleteNote
}