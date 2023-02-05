  import {Controller,useFormContext,} from "react-hook-form";
  import {TextField} from "@material-ui/core";
  import {  InputAdornment } from '@mui/material';
  import EmailIcon from '@mui/icons-material/Email';
  import PasswordOutlinedIcon from '@mui/icons-material/PasswordOutlined';
  import { makeStyles} from "@material-ui/core/styles";
  import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
  import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
  const useStyles = makeStyles((theme) => ({
    button: {
      marginRight: theme.spacing(5),
    },
    textField: {
     [ `& fieldset`] : {
        borderRadius: '7px',
        color :'black',  
      },
      marginBottom :theme.spacing(1),
      borderRadius: '7px',
      color :'black',
      fontWeight: 'bold',
      '& .MuiSvgIcon-root' :{
        fill :"black",
          },
  },
  labels :{
    color :'black',
  fontWeight :'bold',
  fontSize :'1.2em',
  marginLeft :'20px',
  
  },
  }));
const Steps1 = () => {
    const { control } = useFormContext();
    const classes = useStyles()
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
                < PermIdentityOutlinedIcon style={{marginRight: '15px',}}/>
              </InputAdornment>
            ),
          }}
              variant="outlined"
              placeholder="أدخل اسمك الرباعي"
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
          name="phoneNumber"
          render={({ field }) => (
            <TextField
              id="Phone-Number"
              variant="outlined"
              required="phone"
              style={{marginBottom:"20px",}}
              className={classes.textField}
              placeholder="أدخل رقم تلفونك "
              fullWidth
              inputProps={{
                className :classes.labels}}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start" style={{marginLeft:"-10px"}}>
                    <  LocalPhoneIcon style={{marginRight: '15px',}}/>
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
  export default Steps1;