import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = (props) => {

  // ['note-4', 'note-5']
  const noteIds = Object.keys(props.notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
        {noteIds.map(noteId => (
          <Note 
            key={noteId}
            note={props.notes[noteId]}/>
        ))}
      </ul>
    </div>
  )
}

export default NoteList