import React from "react";
import { Autocomplete, Box, Button, CardContent, TextField } from "@mui/material";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import { useForm, FormProvider } from "react-hook-form";
import LottieApp from "../Components/lottie";
import { HEALTH_LOTTIE } from "../constant/media";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
const bloodTypes = [
   'A+' ,
   'B+' ,
   'AB+' ,
   'O+' ,
   'A-' ,
   'B-' ,
   'AB-',
   'O-' ,
];
const cities = [
   'Ibb' ,
   'Taiz' ,
   'Aden' ,
   'Sana`a' ,
   'Theamar' ,
   'Marib' ,
   'Hudidah' ,
   'Al-Mokala' ,
];
const governers = [
  'Ibb' ,
  'Taiz' ,
  'Aden' ,
  'Sana`a' ,
  'Theamar' ,
  'Marib' ,
  'Hudidah' ,
  'Al-Mokala' ,
];
const Try = (props) => {
  const phoneRegExp = /7(1|7|3|8|0)([0-9]){7}/;
  const [bloodtype,setBloodtype]= useState("");
  const [citiess,setCitiess]= useState("");
  const [governerss,setGoverners]= useState("");
  console.log({bloodtype});
  console.log({citiess});
  console.log({governerss});
  return (
    <CardContent>
      <Formik
        initialValues={{
          name: '', email: '', phone: '', password: '',
          bloodType:'',cities:'',governer:'', address: '',
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string().required("مطلوب إدخال اسم"),
          email: Yup.string().email().required("مطلوب إدخال ايميل"),
          phone: Yup.string().matches(phoneRegExp, "مطلوب إدخال رقم هاتف").max(9),
          //phone: Yup.string().required( "مطلوب إدخال رقم هاتف"),
          password: Yup.string().required("مطلوب  إدخال كلمة سر"),
          bloodType: Yup.string().required("اختر فصيلة دم"),
          cities: Yup.string().required("اختر مدينتك الحالية"),
          governer: Yup.string().required("اختر مديريتك الحالية"),
          address: Yup.string().required("ادخل عنوانك"),
        })
        }
        onSubmit={(values, { setSubmitting }) => {
      
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          validateField,
          setFieldValue
          /* and other goodies */
        }) => (
          <Form onSubmit={handleSubmit}>
            <FormSteps
              isSubmitting={isSubmitting}
              validateField={validateField}
              errors={errors}
              touched={touched}
            >
              <Box>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                  component={TextField}
                  error={errors.name ? true : false}
                  helperText={errors.name && errors.name}
                  margin="normal"
                  autoFocus
                  label="  الاسم الرباعي "
                  variant="outlined"
                />
                <Field
                  type="email"
                  name="email"
                  id="email"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  component={TextField}
                  error={errors.email ? true : false}
                  helperText={errors.email && errors.email}
                  margin="normal"
                  label=" البريد الاكتروني  "
                  variant="outlined"
                />

                <Field
                  type="text"
                  name="phone"
                  id="phone"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.phone}
                  component={TextField}
                  error={errors.phone ? true : false}
                  helperText={errors.phone && errors.phone}
                  margin="normal"
                  label=" رقم الهاتف  "
                  variant="outlined"
                />
                <Field
                  type="password"
                  name="password"
                  id="password"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  component={TextField}
                  error={errors.password ? true : false}
                  helperText={errors.password && errors.password}
                  margin="normal"
                  label=" كلمة السر "
                  variant="outlined"
                />
              </Box>
              <Box>
                <Autocomplete
                  id="bloodType"
                  sx={{
                    marginBottom: "15px",
                  }}
                  name="bloodType"
                  margin="normal"
                  options={bloodTypes}
                  //onChange={handleChange}
                  value={values.bloodType}
                  // disableCloseOnSelect
                  // disableClearable
                   variant="outlined"
                  renderInput={(params) => <TextField
                    {...params} label="فصيلة دمك ؟"
                     error={errors.bloodType ? true : false}
                     helperText={errors.bloodType && errors.bloodType}
                     
                  />}
                  //value={bloodtype}
                  onChange={(event,newBloodtype)=> setFieldValue("bloodType",newBloodtype) }
                />
                <Autocomplete
                  id="cities"
                  name="cities"
                  margin="normal"
                  sx={{
                    marginBottom: "15px",
                  }}
                  options={cities}
                  value={values.cities}
                  // disableCloseOnSelect
                  // disableClearable
                  variant="outlined"
                  renderInput={(params) => <TextField
                    {...params} label="المحافظة"
                     error={errors.cities ? true : false}
                     helperText={errors.cities && errors.cities}
                  />}
                  // value={citiess}
                  onChange={(event,newCitiess)=> setFieldValue("cities",newCitiess) }
                />
                <Autocomplete
                  id="governer"
                  name="governer"
                  margin="normal"
                  options={governers}
                   value={values.governer}
                  // disableCloseOnSelect
                  // disableClearable
                   variant="outlined"
                  renderInput={(params) => <TextField
                    {...params} label="المديرية"
                     error={errors.governer ? true : false}
                     helperText={errors.governer && errors.governer}
                  />}
                  //value={governerss}
                  onChange={(event,newGoverners)=> setFieldValue("governer",newGoverners) }
                />
                <Field
                  type="text"
                  name="address"
                  id="address"
                  fullWidth
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.address}
                  component={TextField}
                  error={errors.address ? true : false}
                  helperText={errors.address && errors.address}
                  margin="normal"
                  label="عنوان الحي"
                  variant="outlined"
                />
              </Box>
            </FormSteps>
          </Form>
        )}
      </Formik>
    </CardContent>
  );
};
const FormSteps = (props) => {
  const childernArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["حسابك", "بياناتك",];
  const name = childernArr[step - 1].props.children.map((item) => item.props.name);
  const goBack = () => {
    setStep(step - 1)
  }
  const goNext = () => {
     for(var a=0;a<name.length;a++){
      if(props.errors[name[a]])
      {
        props.validateField(name);
        return;
      }
     }
      setStep(step + 1);
      setActiveStep((prevActiveStep) => prevActiveStep + 1);

  }
  return (
    <>
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
                  '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ':
                  {
                    color: "red",
                  },
                  '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                    color: "green",
                  },
                }}
              >
                {steps.map((label, index) => {
                  const stepProps = {};
                  const labelProps = {};
                  return (
                    <Step key={label} {...stepProps} sx={{mb:"20px",}}>
                      <StepLabel
                        {...labelProps}
                        sx={{
                          '& .css-1gdzht-MuiStepLabel-label':
                          {
                            mr: "9px",
                          },
                          '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ':
                          {
                            color: "red",
                          },
                          '& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed': {
                            color: "green",
                          },
                        }}
                      >
                        {label}
                      </StepLabel>
                    </Step>
                  );
                })}
              </Stepper>
              <Box>
                <FormProvider>
                 
                    {childernArr[step - 1]}
                    <React.Fragment>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "row",
                          pt: 2,
                        }}
                      >
                        {step > 1 && (
                          <Button
                            onClick={goBack}
                            disabled={props.isSubmitting}
                            variant="contained"
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
                            <ArrowForwardIcon />
                            السابق
                          </Button>
                        )}
                        {step < childernArr.length && (
                          <Button
                            onClick={goNext}
                            disabled={props.isSubmitting}
                            variant="contained"
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
                            <ArrowBackIcon />
                            التالي
                          </Button>
                        )}
                      <Box sx={{ flex: "1 1 auto" }} />
                        {step === childernArr.length && (
                          <Button
                            type="submit"
                            onClick={props.handleSubmit}
                            disabled={props.isSubmitting}
                            variant="contained"
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
                            تسجيل
                          </Button>
                        )}
                      </Box>
                    </React.Fragment>
                 
                </FormProvider>
              </Box>

            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Try;