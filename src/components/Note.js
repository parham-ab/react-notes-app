import React from "react";
import { Badge } from "react-bootstrap";
// icons
import DeleteIcon from "@mui/icons-material/Delete";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <div className="p-3 rounded m-3 shadow note">
      <span>{text}</span>
      <div>
        <hr />
        <Badge pill bg="dark">
          {date}
        </Badge>
        <DeleteIcon
          className="text-danger m-2 deleteIcon"
          onClick={() => handleDeleteNote(id)}
        />
      </div>
    </div>
  );
};

export default Note;
