import {
  Box,
  Button,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SECONDARY_COLOR } from "../../../constant/color";
import { useAuthContext } from "../../../context/auth-context";
export const AccountPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;
  const { user, signOut, authType } = useAuthContext();
  const navigate = useNavigate();
  return (
    <Popover
      anchorEl={anchorEl}
      anchorOrigin={{
        horizontal: "left",
        vertical: "bottom",
      }}
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: { width: "250px" },
      }}
      {...other}
      sx={{
        borderRadius: 0,
      }}
    >
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">حسابك الشخصي</Typography>

        <Typography
          color="text.secondary"
          variant="body2"
          sx={{ cursor: "pointer" }}
          onClick={() => {
            const type = localStorage.getItem("type");
            if (type === "user") {
              navigate("/profile");
            } else if (type === "center") {
              navigate("/centerprofile");
            }
          }}
        >
          {user?.name}
        </Typography>
      </Box>
      <MenuList
        disablePadding
        sx={{
          "& > *": {
            "&:first-of-type": {
              borderTopColor: "divider",
              borderTopStyle: "solid",
              borderTopWidth: "1px",
            },
            padding: "12px 16px",
          },
        }}
      >
        <MenuItem>
          <Button
            onClick={() => {
              signOut();
              navigate("/");
            }}
            fullWidth
            variant="contained"
            sx={{
              backgroundColor: SECONDARY_COLOR,

              "&:hover": {
                backgroundColor: SECONDARY_COLOR,
              },
            }}
          >
            تسجيل الخروج
          </Button>
        </MenuItem>
      </MenuList>
    </Popover>
  );
};
