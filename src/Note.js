import React from 'react'

const Note = (props) => {
  const handleClick = (ev) => {
    console.log(this)
    console.log(ev)
  }
  return (
    <a onClick={handleClick}>
      <li>
        <div className="note">
          <div className="note-title">
            {props.note.title}
          </div>
          <div className="note-body">
            <p>
              {props.note.body}
            </p>
          </div>
        </div>
      </li>
    </a>
  )
}

export default Note