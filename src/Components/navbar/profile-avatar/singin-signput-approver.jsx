import {
  Avatar,
  Box,
  Button,
  CardMedia,
  MenuItem,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { SECONDARY_COLOR } from "../../../constant/color";
import { useAuthContext } from "../../../context/auth-context";
export const SingInSingOutPopover = (props) => {
  const { anchorEl, onClose, open, ...other } = props;

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
          display: "flex",
          alignItems: "center",
          gap: 3,
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "40px",
            height: "40px",
          }}
          src="/logo.png"
        />
        <Typography
          color="primary"
          sx={{
            fontSize: "20px",
          }}
        >
          نبض
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
            onClick={() => navigate("/signup")}
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              fontFamily: "fsalberarabic",
            }}
          >
            انشاء حساب
          </Button>
        </MenuItem>
        <MenuItem>
          <Button
            onClick={() => navigate("/login")}
            fullWidth
            variant="contained"
            color="primary"
            sx={{
              fontFamily: "fsalberarabic",
            }}
          >
            تسجيل الدخول
          </Button>
        </MenuItem>
      </MenuList>
    </Popover>
  );
};
