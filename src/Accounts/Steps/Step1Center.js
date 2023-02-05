import React, { useState } from "react";
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
import EmailIcon from '@mui/icons-material/Email';
import {InputAdornment } from '@mui/material';
import {
  TextField
} from "@material-ui/core";
import {
  Controller,
  useFormContext
} from "react-hook-form";
import {
    createTheme
  } from "@material-ui/core/styles";
import { makeStyles} from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
    button: {
      marginRight: theme.spacing(5),
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
  buttonlogin :{
      marginTop:"5px",
      borderColor :"dodgerblue",
      color :"dodgerblue",
      fontWeight:"bold",
      fontSize :"1.2em",
      borderRadius :"10px",
      width :200,
  
    },
  }));
  const rtlTheme = createTheme({ direction: "rtl" });
const Step1Center = () => {
    const classes = useStyles()
    const { control } = useFormContext();    
    return (
      <>
     <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <TextField
              id="first-name"
              className={classes.textField}
              inputProps={{
                className :classes.labels}}
             InputProps={{
            startAdornment: (
              <InputAdornment position="start" style={{marginLeft:"-10px"}}>
                < PermIdentityOutlinedIcon />
              </InputAdornment>
            ),
          }}
              
              variant="outlined"
              placeholder="إسم المركز"
              fullWidth
             margin="normal"
              {...field}
             
            />
          )}
        />
  
      <Controller
          control={control}
          name="userEmail"
          render={({ field }) => (
         
        <TextField  id="userEmail"  variant="outlined" fullWidth
           type='email'
           required
           className={classes.textField}
           placeholder='أدخل بريدك الالكتروني'
           inputProps={{
        className :classes.labels}}
           InputProps={{
             startAdornment: (
               <InputAdornment position="start">
                 <  EmailIcon/>
               </InputAdornment>
             ),
           }}
           margin="normal"
           {...field}
           />
         
     
        )}
        
        />
        
        <Controller
          control={control}
          name="password"
          render={({ field }) => (
            <TextField
              id="password"
              required
              className={classes.textField}
              inputProps={{
                className :classes.labels}}
             InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                < PasswordOutlinedIcon/>
              </InputAdornment>
            ),
          }}
          type="password"
          variant="outlined"
          placeholder=' إدخل كلمة السر'
          fullWidth
         margin="normal"
          {...field}
         
        />
      )}
    />
            
      </>
    );
  };
  export default Step1Center;