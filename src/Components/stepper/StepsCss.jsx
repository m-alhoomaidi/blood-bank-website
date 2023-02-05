import { makeStyles} from "@material-ui/core/styles";
const StepsCss = makeStyles((theme) => ({


    textField: {
     [ `& fieldset`] : {
        borderRadius: '7px',
        color :'black',
      },
      marginTop :theme.spacing(5),
      background :'rgb(251, 142, 99,0.6)',
      borderRadius: '7px',
      color :'black',
      fontWeight: 'bold',
      '& .MuiSvgIcon-root' :{
        fill :"golden",
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
  
  }));
  export default StepsCss;