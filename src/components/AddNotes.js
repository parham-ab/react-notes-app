import React from "react";
import { Button, Form } from "react-bootstrap";
import { FaSave } from "react-icons/fa";

const AddNotes = () => {
  return (
    <div className="container col-9 col-sm-5 mb-5">
      <h3 className="text-center">Add your new note...</h3>
      <Form.Group className="mb-3">
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Add your new note..."
        />
        <div className="text-center mt-1">
          <Button variant="success" size="sm">
            Save <FaSave />
          </Button>
        </div>
      </Form.Group>
    </div>
  );
};

export default AddNotes;
