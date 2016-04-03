import React from 'react'
import AddNote from './AddNote'

export const Notes = ({
  username,
  notes,
  addNote
}) => {
  return (
    <div>
      <h2>Notes</h2>
      <AddNote username={username} addNote={addNote} />
      <ul className="list-group">
        {notes.map((note, i) => {
          return <li className="list-group-item" key={i}>{note}</li>
        })}
      </ul>
    </div>
  );
}

Notes.propTypes = {
  username: React.PropTypes.string.isRequired,
  notes: React.PropTypes.array.isRequired,
  addNote: React.PropTypes.func.isRequired
}