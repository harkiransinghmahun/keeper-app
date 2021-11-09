import React, {useState} from "react"
import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Note from "./Note.jsx"
import notes from "../notes"
import CreateArea from "./CreateArea.jsx"
var uuid = require('uuid')

console.log(notes)

function App(){
    const [notesList, setNotesList] = useState([])


    function publishNote(title, content){
        const note = {
            id: uuid.v1(), 
            noteTitle: title, 
            noteContent: content
        }
        setNotesList([...notesList, note])
    }

    function deleteNote(deleteNoteId){
        setNotesList(notesList.filter((note)=>{
            return note.id != deleteNoteId
        }))
    }


    return (
    <div>
        <Header /> 
        <CreateArea publishNote={publishNote} />
        {notesList.length!==0 && notesList.map( (note, index) => {
            return <Note 
            key={index}
            id={note.id}
            title={note.noteTitle}
            content={note.noteContent}
            onDelete={deleteNote} />
        })}
        <Footer />
    </div>)
  
}

export default App