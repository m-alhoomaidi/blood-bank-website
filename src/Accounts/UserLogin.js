import React  from "react";
import {
    Typography,
    TextField,
    Button,
    Stepper,
    Step,
    StepLabel,
    Box,
    Dialog,
    withStyles,
  } from "@material-ui/core";
  import BloodtypeIcon from '@mui/icons-material/Bloodtype';
  import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
  import KeyIcon from '@mui/icons-material/Key';
  import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import { Chip, Grid, IconButton, InputAdornment } from '@mui/material';
  import {
    useForm,
    Controller,
    FormProvider,
    useFormContext,
  } from "react-hook-form";
  import { makeStyles, styled } from "@material-ui/core/styles";
  import SvgIcon from '@mui/material/SvgIcon';
  import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme
} from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import { Login } from "@mui/icons-material";
const useStyles = makeStyles((theme) => ({
    button: {
      marginRight: theme.spacing(5),
    },
    buttonlogin :{
      marginTop:"20px",
      borderColor :"rgb(35, 228, 35)",
      color :"rgb(35, 228, 35)",
      fontWeight:"bold",
      fontSize :"1.2em",
      borderRadius :"10px",
      width :200,

    },
    textField: {
     [ `& fieldset`] : {
        borderRadius: '20px',
        color :'black',
       
      },
      marginBottom :theme.spacing(1),
      background :'rgb(251, 142, 99,0.6)',
      borderRadius: '20px',
      color :'black',
      fontWeight: 'bold',
      '& .MuiSvgIcon-root' :{
        fill :"black",
          },
  },
  
  IconSvging : {
   '& .MuiStepIcon-active' :
   {
    fill :"red",
   },
   '& .MuiStepIcon-completed' :{
  fill :"green",
   },
  },
  labels :{
    color :'black',
  fontWeight :'bold',
  fontSize :'1.2em',
  marginLeft :'20px',
  
  },
  SvgLogin :{
fill :'red',
width :400,
  },
  
  }));
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const rtlTheme = createTheme({ direction: "rtl" });
const UserLogin =()=>{
  const classes =useStyles()
return (
  <>
  <ThemeProvider theme={rtlTheme}>
  <CssBaseline />
  <Box m={4} container justifyContent="center">
    <Grid container justifyContent="center" marginBottom="10px" >
      
      {/* <ImageSvging 
    width="40px" margin="10px"></ImageSvging> */}
    <BloodtypeIcon
    style={{
      fill :"red",
      fontSize : "60px",
      marginTop :"-25px",
    }}
    className={classes.SvgLogin}
    />
    
    </Grid>
    
      
        <TextField
          id="first-name"
          type="number"
          className={classes.textField}
          inputProps={{
            className :classes.labels}}
         InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            < PhoneAndroidIcon style={{marginRight: '15px',}}/>
          </InputAdornment>
        ),
      }}
          
          variant="outlined"
          placeholder="أدخل رقم هاتفك"
          fullWidth
         margin="normal"
          
         
        />
        <TextField
          id="Phone-Number"
          variant="outlined"
          required="phone"
          style={{marginBottom:"10px",}}
          className={classes.textField}
          placeholder="أدخل رقم تلفونك "
          fullWidth
          type ="password"
          inputProps={{
            className :classes.labels}}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <  KeyIcon  style={{marginRight: '15px',}}/>
              </InputAdornment>
            ),
          }}
          margin="normal"
        />
        <span style={{color :"dodgerblue",fontSize :"1.2em" ,fontWeight:'bold',marginRight :"20px"}}>نسيت كلمة المرور ؟</span>
        <br/>
        <span style={{color :"black",fontSize :"1.2em" ,fontWeight:'bold',marginRight :"20px"}}>ليس لديك حساب ؟</span>
        <a href="" style={{color :"dodgerblue",fontSize :"1.2em" ,fontWeight:'bold',marginRight :"5px"}}>إنشاء حساب</a>
        <br/>
        <Grid container justifyContent="center">
        <Button
        id="Phone-Number"
          variant="outlined"
          className={classes.buttonlogin}
          required="phone"
          value ="تسجيل حساب"
          fullWidth
        >تسجيل الدخول</Button>
        </Grid>
   
     </Box>
</ThemeProvider>
   </>
);

}
export default UserLogin;
