import { Box, CircularProgress } from "@mui/material";

export const LoadingCircular = () => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <CircularProgress />
  </Box>
);
