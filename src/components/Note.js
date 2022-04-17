import React from "react";
// icons
import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="bg-warning shadow">
      <span>{text}</span>
      <div>
        <small>{date}</small>
        <MdDelete
          className="text-danger"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
