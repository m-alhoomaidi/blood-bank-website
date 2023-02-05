import { Typography } from "@mui/material";

export const SectionTitle = ({ title, ...rest }) => {
  return (
    <Typography sx={{ fontWeight: "bold", fontSize: 22, ...rest }}>
      {title}
    </Typography>
  );
};
