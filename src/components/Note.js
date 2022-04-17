import React from "react";
// icons
import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="p-3 rounded m-3 bg-warning shadow">
      <span>{text}</span>
      <div>
        <small>{date}</small>
        <MdDelete
          className="text-danger m-2"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
