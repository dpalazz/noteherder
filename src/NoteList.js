import React from 'react'

import './NoteList.css'
import Note from './Note'

const NoteList = () => {
  const notes = {
    'note-4': {
    id: 'note-4',
    title: 'Note from obj',
    body: 'Even fancier!'
    },
    'note-5': {
      id: 'note-5',
      title: 'Another one',
      body: 'Also very fancy'
    },
  }

  // ['note-4', 'note-5']
  const noteIds = Object.keys(notes)

  return (
    <div className="NoteList">
      <h3>Notes</h3>
      <ul id="notes">
      {
        noteIds.map(noteId => <Note note={notes[noteId]}/>)
      }
      </ul>
    </div>
  )
}

export default NoteList