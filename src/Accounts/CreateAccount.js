import React, { useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import {Link} from "react-router-dom";
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
  Box,
  Dialog,
} from "@material-ui/core";
import Autocomplete from '@mui/material/Autocomplete';
import {
  useForm,
  Controller,
  FormProvider,
  useFormContext,
} from "react-hook-form";
import StepsCss from './Steps/StepsCss';
import Steps1 from "./Steps/Step1";
import Step2 from './Steps/Step2';
import Step3 from './Steps/Step3';
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
const rtlTheme = createTheme({ direction: "rtl" });
function getSteps() {
  return [
    "حسابك ",
    "بياناتك",
    "عنوانك",
    "تأكيد"
  ];
}
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Steps1 />;
    case 1:
      return <Step2 />;
     case 2:
      return <Step3 />;
    default:
      return  ;
  }
}
const CreateAccount = () => {
  const classes = StepsCss();
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
    <div  sx={{marginTop:"60px"}} >
      <ThemeProvider theme={rtlTheme}>
      <StylesProvider jss={jss}>
      <Stepper alternativeLabel activeStep={activeStep} className={classes.IconSvging}>
        {steps.map((step, index) => {
         const labelProps = {};
          const stepProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography
                variant="caption"
                align="center"
                style={{ display: "block" }}>
              </Typography>);}
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
      {activeStep === steps.length ? (
        <Typography variant="h1" align="center">
       Thank You
        </Typography>
      ) : (
        <div>
          <FormProvider {...methods} >
            <form  >
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
                   onClick={handleNext}
                  //type="submit"
                  style={{marginTop:"10px",border :"1px solid aqua",color :'aqua',fontSize: 'large',fontWeight:'bold',fontStyle:'oblique',borderRadius: '10px',}}
                > {activeStep && activeStep === steps.length ? (
                  
                  <div><CircularProgress/></div>
                ) :(<div>التالي <ArrowBackIcon/></div>)}
                </Button>
                {activeStep === 0 ? (<div style={{marginTop :"30px",marginRight:"40px" ,fontSize :"30px"}}><Link to="/CreateCenterAccount" style={{textDecoration: 'none'}}>إنشاء حساب كمركز صحي ؟</Link></div>) : null}
            </form>
          </FormProvider>
      </div>
      )}
      </StylesProvider>
      </ThemeProvider>
      </div>
  );
};

export default CreateAccount;