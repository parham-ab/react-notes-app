// mui
import { Container, InputAdornment, TextField } from "@mui/material";
// icons
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchText }) => {
  return (
    <Container sx={{ my: 5 }}>
      <TextField
        placeholder="Search..."
        fullWidth
        type="search"
        onChange={(e) => handleSearchText(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        variant="standard"
      />
    </Container>
  );
};

export default Search;