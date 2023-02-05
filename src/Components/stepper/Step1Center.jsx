import {TextField} from "@material-ui/core";
import { makeStyles} from "@material-ui/core/styles";
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
  const classes = useStyles()
  return (
    <>
          
     <TextField
       name="firstName"
       id="first-name"
       variant="outlined"
       label="إسم المركز"
       fullWidth
       margin="normal"
     />
     <TextField 
       name="userEmail"
       id="userEmail" 
       variant="outlined" 
       fullWidth
       type='email'
       required
       label='البريد الالكتروني'
       margin="normal"
     />
     <TextField
       name="password"
       id="password"
       required
       type="password"
       variant="outlined"
       label=' كلمة السر'
       fullWidth
       margin="normal"
    /> 
</>
  );
};
export default Steps1;