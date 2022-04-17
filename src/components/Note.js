import React from "react";
import { Badge } from "react-bootstrap";
// icons
import { MdDelete } from "react-icons/md";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="p-3 rounded m-3 shadow note">
      <span>{text}</span>
      <div>
        <hr />
        <Badge pill bg="dark">
          {date}
        </Badge>
        <MdDelete
          className="text-danger m-2 deleteIcon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
