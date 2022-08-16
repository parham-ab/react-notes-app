import React, { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
// components
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: ["Quicksand", "Rubik"].join(","),
    fontSize: 15,
    fontWeightLight: 400,
    fontWeightMedium: 500,
    fontWeightRegular: 600,
    fontWeightBold: 700,
  },
});

const App = () => {
  const [searchedTxt, setSearchedTxt] = useState("");
  const [notes, setNotes] = useState([]);
  // load saved data from localStorage & display it in the ui
  useEffect(() => {
    const savedData = localStorage.getItem("react-notes-list");
    const parsedData = JSON.parse(savedData);
    // setNotes to parsedData only when saved data does exist --(handling cant read properties of null error)--
    !!savedData && setNotes(parsedData);
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
  };
  // delete notes
  const deleteNote = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);
    setNotes(newNotes);
    // remove from localStorage
    localStorage.setItem("react-notes-list", JSON.stringify(newNotes));
  };

  return (
    <div theme={theme}>
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
