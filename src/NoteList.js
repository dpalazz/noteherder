import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = [
    {
    id: 'note-4',
    title: 'My fancy note',
    body: 'Oh so fancy, I do declare!'
    },
    {
      id: 'note-5',
      title: 'Another one',
      body: 'Also very fancy'
      },
  ]

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
      {
        notes.map(note => <Note note={note}/>)
      }
      </ul>
    </div>
  )
}

export default NoteList