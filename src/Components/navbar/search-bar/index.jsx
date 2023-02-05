import { TextField } from "@mui/material";

export const SearchBar = () => {
  return (
    <>
      <TextField
        placeholder="البحث عن متبرع بالدم"
        fullWidth
        inputProps={{}}
        autoComplete="off"
      />
    </>
  );
};
