import { Box } from "@mui/material";
export const FlexVertical = ({ children, ...rest }) => {
  return (
    <Box
      sx={{ display: "flex", flexDirection: "column", gap: 1, p: 1, ...rest }}
    >
      {children}
    </Box>
  );
};
