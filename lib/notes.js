const fs = require("fs");
const path = require("path");
const { arrayBuffer } = require("stream/consumers");

// function getNotes(){
    
// }

function newNote(addNote, notesArray){
    console.log("adding new note");
    notesArray.push(addNote);

    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ notes: notesArray }, null , 2)
    );

    return addNote
    
}

// function deleteNote(deleteNote, notesArray){
//     console.log(notesArray);
//     const removeNote = notesArray.indexOf




// }


function findById(id, notesArray){
    const result = notesArray.filter(note => note.id === id)[0]
    return result
  }

function deleteNote(id, notesArray){
    console.log(id);
    const index = notesArray.indexOf(id)

    if(index){
        notesArray.splice(index, 1)
        console.log(notesArray)

        fs.writeFileSync(
            path.join(__dirname, '../db/db.json'),
            JSON.stringify({ notes: notesArray }, null , 2)
        );
    }
    return notesArray
}


module.exports = {
    newNote,
    findById,
    deleteNote  
}

// function findById(id, notesArray){
//     const result = notesArray.filter(note => note.id === id)[0]
//     return result
//   }



