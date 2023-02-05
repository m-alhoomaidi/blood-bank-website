import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import '../App.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import {ThemeProvider,createTheme} from "@material-ui/core/styles";
  import Main from './HomePageCss';
  import ListDrawer from './ListDrawer';
const drawerWidth = 240;
const rtlTheme = createTheme({ direction: "rtl" });
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,   
  }),
  background : "white",color:"black",
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
   marginRight: drawerWidth,
   background : "white",color:"black",
  }),
}));
const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

 const HomePage =()=> {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
    <ThemeProvider theme={rtlTheme}>
    {/* <CssBaseline /> */}
    <Box sx={{ display: 'flex' }} m={4}>
      {/* <CssBaseline /> */}
      <AppBar position="fixed" open={open} dir="ltr">
        <Toolbar >
          <Typography variant="h6" noWrap sx={{ flexGrow: 1,alignItems:"center",justifyContent:"center",fontSize:"35px"}} component="div"  >
            بنك الدم
          </Typography>
         {/* // ...(open && { display: 'none' }), */}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            sx={{...(open && { display: 'none' })
         }}
          >
            <MenuIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
      {/* <Main open={open}>
        <DrawerHeader />
      </Main> */}
      <Drawer
        sx={{
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        variant="persistent"
        anchor="right"
        open={open}
      >
        <DrawerHeader style={{background : "white"}}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <ListDrawer/>
      </Drawer>
    </Box>
    </ThemeProvider>
    </div>
  );
}
export default HomePage;