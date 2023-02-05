import React from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useForm, FormProvider } from "react-hook-form";
import Steps1 from "../Components/stepper/Step1";
import Step2 from "../Components/stepper/Step2";
import LottieApp from "../Components/lottie";
import { HEALTH_LOTTIE } from "../constant/media";
const steps = ["حسابك", "بياناتك", "تأكيد"];
function getStepContent(step) {
  switch (step) {
    case 0:
      return <Steps1 />;
    case 1:
      return <Step2 />;
    default:
      return;
  }
}
const SignUp = () => {
  const methods = useForm({
    defaultValues: {
      firstName: "",
      phoneNumber: "",
      TheNeighborhood: "",
    },
  });

  const [activeStep, setActiveStep] = React.useState(0);
  const [skipped, setSkipped] = React.useState(new Set());

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  const handleNext = () => {
    let newSkipped = skipped;
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values());
      newSkipped.delete(activeStep);
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  return (
    <Grid container component="main" sx={{ height: "100vh", dir: "ltr" }}>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
          }}
        >
          <LottieApp animationpath={HEALTH_LOTTIE} />
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "92%",
            justifyContent: "center",
            alignItems: "center",
            pb: 8,
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              justifyItems: "center",
              flexDirection: "column",
              width: { xs: "90%", md: "70%" },
            }}
          >
                <Stepper activeStep={activeStep} 
                  sx={{
                    '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ' :
                    {
                     color :"red",
                    },
                    '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed' :{
                   color :"green",
                    },
                  }}
                >
                  {steps.map((label, index) => {
                    const stepProps = {};
                    const labelProps = {};
                    if (isStepSkipped(index)) {
                      stepProps.completed = false;
                    }
                    return (
                      <Step key={label} {...stepProps}>
                        <StepLabel
                          {...labelProps}
                          sx={{
                            '& .css-1gdzht-MuiStepLabel-label' :
                            {
                              mr:"9px",
                            },
                            '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ' :
                            {
                             color :"red",
                            },
                            '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed' :{
                           color :"green",
                            },
                          }}
                        >
                          {label}
                        </StepLabel>
                      </Step>
                    );
                  })}
                </Stepper>
                {activeStep === steps.length ? (
                  <Typography variant="h1" align="center">
                    Thank You
                  </Typography>
                ) : (
                  <Box>
                    <FormProvider {...methods}>
                      <form>
                        {getStepContent(activeStep)}
                        <React.Fragment>
                          <Box
                            sx={{
                              display: "flex",
                              flexDirection: "row",
                              pt: 2,
                            }}
                          >
                            <Button
                              color="inherit"
                              disabled={activeStep === 0}
                              onClick={handleBack}
                              sx={{
                                 mr: 1,
                                 mt: 3,
                                 mb: 2,
                                 bgcolor: "#e22c34",
                                 color: "white",
                                 borderRadius: "10px",
                                 "&:hover": {
                                   backgroundColor: "red",
                                   textDecoration: "none",
                                 },
                                }}
                            >
                              <ArrowForwardIcon /> السابق
                            </Button>
                            <Box sx={{ flex: "1 1 auto" }} />
                            <Button
                              onClick={handleNext}
                              sx={{
                                mr: 1,
                                mt: 3,
                                mb: 2,
                                bgcolor: "#e22c34",
                                color: "white",
                                borderRadius: "10px",
                                "&:hover": {
                                  backgroundColor: "red",
                                  textDecoration: "none",
                                },
                               }}
                            >
                              {activeStep === steps.length - 1 ? (
                                " التأكيد"
                              ) : (
                                <>
                                  التالي
                                  <ArrowBackIcon />
                                </>
                              )}
                            </Button>
                          </Box>
                        </React.Fragment>
                      </form>
                    </FormProvider>
                  </Box>
                )}
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default SignUp;
