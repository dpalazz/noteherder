import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = ({ notes, setCurrentNote }) => {

  // ['note-4', 'note-5']
  const noteIds = Object.keys(notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => (
          <Note 
            key={noteId}
            note={notes[noteId]}
            setCurrentNote={setCurrentNote}/>
        ))}
      </ul>
    </div>
  )
}

export default NoteList