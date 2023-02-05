import { Grid } from "@mui/material";
export const GridContainer = ({ children, ...rest }) => {
  return (
    <Grid container {...rest}>
      {children}
    </Grid>
  );
};
