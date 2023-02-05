import { Snackbar, Alert } from "@mui/material";
export const AlertSnackBar = (props) => {
  const { open, handleClose, message, type } = props;
  return (
    <Snackbar
      open={open}
      autoHideDuration={2000}
      anchorOrigin={{
        vertical: "top",
        horizontal: "right",
      }}
      onClose={() => handleClose()}
    >
      <Alert
        onClose={() => handleClose()}
        severity={type}
        sx={{ width: "100%", direction: "rtl", textAlign: "right" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
};
