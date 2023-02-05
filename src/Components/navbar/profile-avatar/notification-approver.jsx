import { async } from "@firebase/util";
import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemText,
  MenuList,
  Popover,
  Typography,
} from "@mui/material";
import { getToken } from "firebase/messaging";
import { useState ,useEffect} from "react";
import { useNotificationContext } from "../../../context/notification-context";
import { NotificationItem } from "../../../context/notificationItem";
import { messaging } from "../../../utils/firebase";
import { ModalViewNotification } from "../../notifications/modal-notifications";

export const NotificationPopover = (props) => {
  const { anchorEl, onClose, open, setOpenNotificationPopover, ...other } =
    props;
  const [isOpen, setIsOpen] = useState(false);
  const {notificationDonors}=useNotificationContext();
  const [notificationData, setNotificationData] = useState([]);
  const [notiId, setNotiId] = useState([]);
  const [BackgroundNot,setBackgroundNot]=useState();
  const handleClose = () => setIsOpen(false);
  return (
    <>
      {isOpen && notificationData && (
        <ModalViewNotification
          notification={notificationData}
          open={isOpen}
          Id={notiId}
          BackNotification={setBackgroundNot}
          handleClose={handleClose}
        />
      )}
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        onClose={onClose}
        open={open}
        PaperProps={{
          sx: { width: "400px" },
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
          <Typography variant="overline">الإشعارات</Typography>
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
         {notificationDonors.map((notification, index) => (
           <NotificationItem
           NotificationData={setNotificationData}
           FetchNotificationApi={notification}
           OpenNotificationPop={setOpenNotificationPopover}
           IsOpen={setIsOpen}
           NotificationId={setNotiId}
           key={index}
           BackGroundNotification={BackgroundNot}/>
          ))}
        </MenuList>
      </Popover>
    </>
  );
};