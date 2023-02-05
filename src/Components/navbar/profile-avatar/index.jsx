import { Avatar, Badge, IconButton, Tooltip } from "@mui/material";
import { Box } from "@mui/system";
import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { UserCircleIcon } from "../../../icons/user-circle";
import { AccountPopover } from "./account-approver";
import { NotificationPopover } from "./notification-approver";
import { useAuthContext } from "../../../context/auth-context";
import { SingInSingOutPopover } from "./singin-signput-approver";
export const ProfileAvatar = ({ props, ...rest }) => {
  const [toggle, setToggle] = useState(false);
  const [openAccountPopover, setOpenAccountPopover] = useState(false);
  const [openNotificationPopover, setOpenNotificationPopover] = useState(false);
  const [openSingInSingOutPopover, setOpenSingInSignOutPopover] =
    useState(false);
  const settingsRef = useRef(null);
  const notificationRef = useRef(null);
  const singInSingOutRef = useRef();
  const navigate = useNavigate();

  const { user, signIn, checkAuthenticated, isAuthenticated } =
    useAuthContext();

  return (
    <>
      {isAuthenticated ? (
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "space-between",
              m: 0.5,
              p: 1,
            }}
          >
            <Tooltip title="الملف الشخصي">
              <Avatar
                onClick={() => setOpenAccountPopover(true)}
                ref={settingsRef}
                sx={{
                  height: "34px",
                  width: "34px",
                }}
                src={user?.image}
              >
                <UserCircleIcon />
              </Avatar>
            </Tooltip>
          </Box>
          <Box>
            <Tooltip title="الإشعارات">
              <IconButton
                ref={notificationRef}
                onClick={() => setOpenNotificationPopover(true)}
              >
                <Badge badgeContent={4} color="error">
                  <NotificationsIcon
                    sx={{
                      fontSize: 30,
                    }}
                  />
                </Badge>
              </IconButton>
            </Tooltip>
          </Box>
          <AccountPopover
            anchorEl={settingsRef.current}
            open={openAccountPopover}
            onClose={() => setOpenAccountPopover(false)}
          />
          <NotificationPopover
            anchorEl={notificationRef.current}
            open={openNotificationPopover}
            onClose={() => setOpenNotificationPopover(false)}
            setOpenNotificationPopover={setOpenNotificationPopover}
          />
        </Box>
      ) : (
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              cursor: "pointer",
              justifyContent: "space-between",
              m: 0.5,
              p: 1,
            }}
          >
            <Tooltip title="الملف الشخصي">
              <Avatar
                onClick={() => setOpenSingInSignOutPopover(true)}
                ref={singInSingOutRef}
                sx={{
                  height: "34px",
                  width: "34px",
                }}
                src=""
              >
                <UserCircleIcon />
              </Avatar>
            </Tooltip>
          </Box>
          <SingInSingOutPopover
            anchorEl={singInSingOutRef.current}
            open={openSingInSingOutPopover}
            onClose={() => setOpenSingInSignOutPopover(false)}
          />
        </>
      )}
    </>
  );
};
