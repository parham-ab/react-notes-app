import React from "react";
// components
import Note from "./Note";
import AddNotes from "./AddNotes";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="d-flex rounded justify-content-center">
      {notes.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.text}
          date={item.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
      <AddNotes handleAddNote={handleAddNote} />
    </div>
  );
};

export default NotesList;
