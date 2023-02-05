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
export const NotificationItem =(props)=>{
    const { NotificationData, FetchNotificationApi, OpenNotificationPop,IsOpen,NotificationId,BackGroundNotification } = props;
    return (
        <List
        sx={{
          backgroundColor: FetchNotificationApi?.data?.isRead ||BackGroundNotification ? "white" : "#e9ecef" ,
          mt: -1,
        }}
      >
        <ListItem>
          <ListItemText
            onClick={() => {
                NotificationData(FetchNotificationApi?.data);
              OpenNotificationPop(false);
              IsOpen(true);
              NotificationId(FetchNotificationApi?.id);
            }}
            sx={{
              textAlign: "right",
              cursor: "pointer",
            }}
            primary={FetchNotificationApi?.data?.title}
            primaryTypographyProps={{
              fontWeight: "bold",
            }}
            secondary={<>{FetchNotificationApi?.data?.body?.slice(0, 100)}</>}
            secondaryTypographyProps={{
              fontSize: 13,
              color: "gray",
            }}
          />
        </ListItem>
        <Typography
          sx={{
            display: "inline",
            color: "gray",
            mr: 2,
            textAlign: "right",
          }}
          component="span"
          variant="body2"
        >
         {FetchNotificationApi?.data?.createdAt}
        </Typography>
        <Divider />
      </List>
    );
}