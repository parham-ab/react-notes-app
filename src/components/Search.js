import React from "react";
import { Form } from "react-bootstrap";

const Search = ({ handleSearchText }) => {
  return (
    <div className="container my-5">
      <Form.Group className="mb-3">
        <Form.Control
          type="search"
          placeholder="Search...."
          onChange={(e) => handleSearchText(e.target.value)}
        />
      </Form.Group>
    </div>
  );
};

export default Search;
