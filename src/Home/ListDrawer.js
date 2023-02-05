import * as React from 'react';
import {Link} from "react-router-dom";
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import '../App.css';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
const ListDrawer =()=>{
    return (
        <div>

<List direction="ltr"
        sx={{
          '& .css-tlelie-MuiListItemText-root':{
            marginLeft :"60px",
            marginRight :"18px",
            textAlign: 'right',
            width :"200px",
          },
          '& .css-cveggr-MuiListItemIcon-root' :{
            width : "20px",
            minWidth :"26px",

          },
          '& .css-10hburv-MuiTypography-root':{
            fontSize:"20px",

          },
        }}
        >
              <Link to='/' className='link'  >
              <ListItemButton >
                <ListItemIcon alignItems='right' >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="الرئيسية" />
              </ListItemButton>
              </Link>
              <Link to='/UserLogin' className='link'  >
              <ListItemButton >
                <ListItemIcon alignItems='right' >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="تسجيل الدخول" />
              </ListItemButton>
              </Link>
              <Link to='/CreateAccount' className='link'  >
              <ListItemButton >
                <ListItemIcon alignItems='right' >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="إنشاء حساب" />
              </ListItemButton>
              </Link>
              <Link to='/EditUser' className='link'  >
              <ListItemButton >
                <ListItemIcon alignItems='right' >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="إعدادات" />
              </ListItemButton>
              </Link>
              <Divider />
              <Link to='/' className='link'  >
              <ListItemButton >
                <ListItemIcon alignItems='right' >
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="حول الموقع" />
              </ListItemButton>
              </Link>
        </List>
        </div>

    );
};
export default ListDrawer;