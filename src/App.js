import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import AddNotes from "./components/AddNotes";
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [searchedTxt, setSearchedTxt] = useState("");
  const [notes, setNotes] = useState([
    { id: uuidv4(), text: "aa", date: "15/04/2022" },
    { id: uuidv4(), text: "bb", date: "15/04/2022" },
    { id: uuidv4(), text: "cc", date: "15/04/2022" },
  ]);

  return (
    <div>
      <Search handleSearchText={setSearchedTxt} />
      <AddNotes />
      <NotesList notes={notes} />
    </div>
  );
};

export default App;
