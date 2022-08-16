// MUI
import { Box, Chip, Divider, IconButton, Typography } from "@mui/material";
// icons
import DeleteIcon from "@mui/icons-material/Delete";
import AccessTimeIcon from "@mui/icons-material/AccessTime";

const Note = ({ id, text, date, handleDeleteNote }) => {
  return (
    <Box
      className="p-3 rounded m-3 note"
      sx={{
        boxShadow: "0 0.5rem 1rem rgb(0 0 0 / 15%)",
        borderRadius: "0.25rem",
      }}
      p={3}
      m={3}
    >
      <Box component="div">
        <Typography variant="" color="initial">
          {text}
        </Typography>
      </Box>
      <Divider />
      <Box
        component="div"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mt={2}
      >
        <Chip
          icon={<AccessTimeIcon sx={{ fontSize: "20px" }} />}
          label={date}
          sx={{ fontSize: "11px" }}
        />
        <IconButton
          onClick={() => handleDeleteNote(id)}
          color="error"
          size="small"
        >
          <DeleteIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Note;
