const fs = require("fs");
const path = require("path");

// function getNotes(){
    
// }

function newNote(addNote, notesArray){
    console.log("adding new note");
    notesArray.push(addNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ addNotes: notesArray }, null , 2)
    );

    return addNote
    
}

module.exports = {
    // getNotes,
    newNote
}



