import { Box } from "@mui/material";

export const FlexCenter = ({ children, ...rest }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        ...rest,
      }}
    >
      {children}
    </Box>
  );
};
