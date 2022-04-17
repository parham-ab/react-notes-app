import React from "react";
// icons
import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date }) => {
  return (
    <div className="bg-warning shadow">
      <span>{text}</span>
      <div>
        <small>{date}</small>
        <MdDelete className="text-danger" />
      </div>
    </div>
  );
};

export default Note;
