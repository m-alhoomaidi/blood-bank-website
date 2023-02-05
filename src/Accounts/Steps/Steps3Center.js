import {Controller,useFormContext } from "react-hook-form";
  import { makeStyles} from "@material-ui/core/styles";
  import {
    Button,
    Checkbox,
    Box,
    Grid,
    Link,
    FormControlLabel
  } from "@material-ui/core";
  import { FormGroup } from '@mui/material';
  import {ThemeProvider,createTheme} from "@material-ui/core/styles";
  import CssBaseline from "@material-ui/core/CssBaseline";
const rtlTheme = createTheme({ direction: "rtl" });
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
  labels :{
    color :'black',
  fontWeight :'bold',
  fontSize :'1.2em',
  marginLeft :'20px',
  }, 
  }));
const Steps3Center = () => {
    const { control } = useFormContext();
    const classes = useStyles()
    return (
      <>
      <ThemeProvider theme={rtlTheme}>
      <CssBaseline />
      <Box m={4} 
      >
        <Controller
          control={control}
          name="firstName"
          render={({ field }) => (
            <div>
               <Grid container justifyContent="center">
              <div style={{fontSize:"1.0em",fontWeight:"bold",marginTop:"-20px" }}>حرصا على سلامة البيانات يرجى منكم إرفاق وثيقة تثبت هوية المركز كالترخيص على سبيل المثال إنقر على المربع أدناه للإرفاق </div>
              <br/>
          <Button
          id="Phone-Number"
            variant="outlined"
            required="phone"
            style={{marginTop :"30px"}}
            value ="صورة إثبات هوية المركز"
            fullWidth
          >صورة إثبات هوية المركز</Button>
          <br/>
          <FormGroup sx={{marginTop :"30px"}}>
            <FormControlLabel control={<Checkbox
         color="primary" required
          />} label={
            <Box component="div" fontSize="1.2em">أوافق على <Link style={{color :"dodgerblue",fontWeight:'bold',}}>سياسية الخصوصية</Link></Box>
          }
           />
            </FormGroup>
            </Grid>
             </div>
            
          )}
        />       
         </Box>
  </ThemeProvider>
       </>
    );
  };
  export default Steps3Center;