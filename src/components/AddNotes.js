import { useState } from "react";
// mui
import { Container } from "@mui/system";
import {
  TextField,
  Grid,
  Button,
  InputAdornment,
  IconButton,
} from "@mui/material";
import Typography from "@mui/material/Typography";
// icons
import SaveIcon from "@mui/icons-material/Save";

const AddNotes = ({ handleAddNote }) => {
  const [noteText, setNoteText] = useState("");
  const charLength = 500;
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
    <Container>
      <Grid
        container
        mb={5}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Grid item>
          <Typography variant="h5" component="h3" color="text.secondary">
            Add your new note...
          </Typography>
        </Grid>
        <Grid item mt={5}>
          <TextField
            label="Add your new note..."
            placeholder="Add your new note..."
            size="small"
            fullWidth
            value={noteText}
            onChange={handleChange}
            helperText={`${charLength - noteText.length} Remaining`}
            InputProps={{
              endAdornment: (
                <IconButton onClick={saveHandler} sx={{ color: "#3f813d" }}>
                  <SaveIcon />
                </IconButton>
              ),
            }}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default AddNotes;
