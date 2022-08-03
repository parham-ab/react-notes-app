import React, { useEffect, useState } from "react";
import { MdNorthEast } from "react-icons/md";
import { v4 as uuidv4 } from "uuid";
// components
import NotesList from "./components/NotesList";
import Search from "./components/Search";

const App = () => {
  const [searchedTxt, setSearchedTxt] = useState("");
  const [notes, setNotes] = useState([]);
  // get saved data from localStorage & display it
  useEffect(() => {
    const savedData = localStorage.getItem("react-notes-list");
    const parsedData = JSON.parse(savedData);
    setNotes(parsedData);
  }, []);
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
    // save to localStorage
    localStorage.setItem(
      "react-notes-list",
      JSON.stringify([...notes, newNote])
    );
    console.log(newNote);
  };
  // load from localStorage
  // delete notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    // remove from localStorage
    localStorage.setItem("react-notes-list", JSON.stringify(newNotes));
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
