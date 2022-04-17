import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
// icons
import { FaSave } from "react-icons/fa";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLength = 200;
  // saveHandler
  const saveHandler = () => {
    if (noteText.trim().length > 0) {
      handleAddNote(noteText);
      setNoteText("");
    }
  };
  // handleChange
  const handleChange = (e) => {
    if (charLength - e.target.value.length >= 0) setNoteText(e.target.value);
  };

  return (
    <div className="container col-9 col-sm-5 mb-5">
      <h3 className="text-center">Add your new note...</h3>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Add your new note..."
          value={noteText}
          onChange={handleChange}
        />
        <div className="mt-1">
          <small>{charLength - noteText.length} Remaining</small>
          <Button onClick={saveHandler} variant="success" size="sm">
            Save <FaSave />
          </Button>
        </div>
      </Form.Group>
    </div>
  );
};

export default AddNotes;
