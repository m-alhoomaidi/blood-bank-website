import React, { useState } from "react";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { create } from "jss";
import rtl from "jss-rtl";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme
} from "@material-ui/core/styles";
import {
  Typography,
  Button,
  Stepper,
  Step,
  StepLabel,
} from "@material-ui/core";
import { makeStyles, styled } from "@material-ui/core/styles";
import {
  useForm,
  FormProvider
} from "react-hook-form";
import Step1Center from "./Steps/Step1Center";
import Steps3Center from "./Steps/Steps3Center";
import Step3 from './Steps/Step3';
const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(5),
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
function getSteps() {
  return [
    "حسابك ",
    "عنوانك",
    "تأكيد"
  ];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Step1Center />;
    case 1:
      return <Step3 />;
     case 2:
      return <Steps3Center/>;
    default:
      return  ;
  }
}
const CreateCenterAccount = () => {
  const classes = useStyles();
  const methods = useForm({
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      TheNeighborhood: "",
    },
  });
  const [activeStep, setActiveStep] = useState(0);
  const [DataStep, setDataStep] = useState(0);
  const [skippedSteps, setSkippedSteps] = useState([]);
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 1 || step === 2 ;
  };

  const isStepSkipped = (step) => {
    return skippedSteps.includes(step);
  };

  const handleNext = (data) => {
    console.log(data);
    if(window.navigator.onLine){
    if (activeStep == steps.length -1) {
      fetch("https://jsonplaceholder.typicode.com/comments")
        .then((data) => data.json())
        .then((res) => {
          console.log(res);
        setDataStep(data);
          setActiveStep(activeStep + 1);
         
        });
    } else {
      setActiveStep(activeStep + 1);
    }
  }
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


const rtlTheme = createTheme({ direction: "rtl" });
  return (
    <div style={{marginTop:"-30px"}} >
      <ThemeProvider theme={rtlTheme}>
      <StylesProvider jss={jss}>
      <Stepper alternativeLabel activeStep={activeStep} className={classes.IconSvging} >
        {steps.map((step, index) => {
         const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}
              >
              </Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step {...stepProps} key={index}  >
              <StepLabel {...labelProps}  className={classes.IconSvging2}>{step}</StepLabel>
            </Step>
          );
        })}
      </Stepper> 
      {activeStep === steps.length  ? (
        <Typography variant="h1" align="center">
       Thank You
        </Typography>
      ) : (
        <div>
          <FormProvider {...methods} >
            <form onSubmit={methods.handleSubmit(handleNext)} >
              {getStepContent(activeStep)}
               <Button
                 className={classes.button}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  style={{marginTop:"10px",border :"1px solid orange",color :'orange',fontSize: 'large',fontStyle:'oblique',borderRadius: '10px',}}
                 
                >
                <ArrowForwardIcon/>السابق  
                </Button>
                  <Button
                  className={classes.button}
                   //onClick={handleNext}
                  type="submit"
                  style={{marginTop:"10px",border :"1px solid aqua",color :'aqua',fontSize: 'large',fontWeight:'bold',fontStyle:'oblique',borderRadius: '10px',}}
                > {activeStep && activeStep === steps.length -1 ? (
                  
                  <div style={{width :"100px"}}>إنشاء</div>
                ) :(<div>التالي <ArrowBackIcon/></div>)}                
               </Button>
            </form>
          </FormProvider>
      </div>)}
      </StylesProvider>
      </ThemeProvider>
      </div>
  );
};

export default CreateCenterAccount;
