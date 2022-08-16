// components
import Note from "./Note";
import AddNotes from "./AddNotes";
import { Box } from "@mui/material";
import { Container } from "@mui/system";

const NotesList = ({ notes, handleAddNote, handleDeleteNote }) => {
  return (
    <Container>
      <Box
        component="div"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <AddNotes handleAddNote={handleAddNote} />
        {notes.map((item) => (
          <Note
            key={item.id}
            id={item.id}
            text={item.text}
            date={item.date}
            handleDeleteNote={handleDeleteNote}
          />
        ))}
      </Box>
    </Container>
  );
};

export default NotesList;