import React from "react";
// components
import Note from "./Note";

const NotesList = ({ notes }) => {
  return (
    <div className="d-flex rounded justify-content-center">
      {notes.map((item) => (
        <Note key={item.id} id={item.id} text={item.text} date={item.date} />
      ))}
    </div>
  );
};

export default NotesList;
