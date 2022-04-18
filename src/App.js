import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [searchedTxt, setSearchedTxt] = useState("");
  const [notes, setNotes] = useState([]);
  // save to localeStorage
  useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem("notes-data"));
    if (notes.length) {
      setNotes(savedNotes);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("notes-data", JSON.stringify(notes));
  }, [notes]);

  // add new notes
  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: uuidv4(),
      text: text,
      date: date.toLocaleString(),
    };
    const newNotes = [...notes, newNote];
    setNotes(newNotes);
  };
  // delete notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
  };

  return (
    <div>
      <Search handleSearchText={setSearchedTxt} />
      <NotesList
        notes={notes.filter((item) =>
          item.text.toLowerCase().includes(searchedTxt)
        )}
        handleAddNote={addNote}
        handleDeleteNote={deleteNote}
      />
    </div>
  );
};

export default App;
