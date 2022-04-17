import React from "react";
// components
import Note from "./Note";
import AddNotes from "./AddNotes";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <div className="container d-flex flex-column rounded justify-content-center">
      <AddNotes handleAddNote={handleAddNote} />
      {notes.map((item) => (
        <Note
          key={item.id}
          id={item.id}
          text={item.text}
          date={item.date}
          handleDeleteNote={handleDeleteNote}
        />
      ))}
    </div>
  );
};

export default NotesList;
