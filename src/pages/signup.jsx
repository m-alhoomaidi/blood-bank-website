import React, { useEffect } from "react";
import { create } from "jss";
import rtl from "jss-rtl";
import {
  Autocomplete,
  Box,
  Button,
  CardContent,
  TextField,
} from "@mui/material";
import {
  StylesProvider,
  jssPreset,
  ThemeProvider,
  createTheme,
} from "@material-ui/core/styles";
import { Field, Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useState } from "react";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Grid from "@mui/material/Grid";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { useForm, FormProvider } from "react-hook-form";
import LottieApp from "../Components/lottie";
import { HEALTH_LOTTIE, SETTINGS } from "../constant/media";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, messaging } from "../utils/firebase";
import { AlertSnackBar } from "../Components/common/alert-snackbar";
import Link from "@mui/material/Link";
import { useNavigate } from "react-router-dom";
import Countryes from "../Local/Data.json";
import { getMessaging, getToken } from "firebase/messaging";
import { app } from "../utils/firebase";
import { useAuthContext } from "../context/auth-context";
const bloodTypes = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];
const data = JSON.parse(JSON.stringify(Countryes));
const Try = (props) => {
  const { checkIfAuthenticated } = useAuthContext();
  const [token, setToken] = useState("");
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLatitude(position.coords.latitude);
      setLongitude(position.coords.longitude);
    })
  }, [])
  const [city, setCity] = useState(
    data?.map((item) => {
      return {
        id: item?.id,
        name: item?.name,
      };
    })
  );
  const [governer, setGoverner] = useState(data[0]?.city);
  const handleChangeGovernorate = (newVal) => {
    const id = newVal?.id;
    console.log(id);
    if (id) {
      const cityData = data?.filter((item) => item?.id == id)[0]?.city;
      setGoverner(cityData);
    }
  };
  async function requestPermissions() {
    await Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        getToken(messaging, { vapidKey: 'BBn3zGcKMynrgirvOIsFXTHoTHKNW-iX3FWefaw9zUVbRygfIzYSQqHqJabWsNcg5v-oYG2E1tDBsh42WR7RNzQ' }).then((token) => {

          setToken(token);
        });
      } else if (permission === 'denied') {
        alert("rrrrrrrrrrrrr")

      }


    });
  }
  useEffect(() => {
    requestPermissions();

  }, []);



  const phoneRegExp = /7(1|7|3|8|0)([0-9]){7}/;
  const [showTost, setShowTost] = useState(false);
  const [tost, setTost] = useState({
    tostMsg: " البريد الإلكتروني موجود مسبقًا",
    tostType: "error",
  });
  const navigate = useNavigate();
  return (
    <CardContent>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          password: "",
          bloodType: "",
          cities: "",
          governer: "",
          address: "",
        }}
        validationSchema={Yup.object().shape({
          name: Yup.string()
            .max(255)
            .required("مطلوب إدخال اسم"),
          email: Yup.string()
            .email("يجب إدخال إيميل صالح")
            .required("مطلوب إدخال ايميل"),
          phone: Yup.string()
            .max(9, "يجب إدخال رقم صالح")
            .min(9, "يجب إدخال رقم صالح")
            .matches(phoneRegExp, "مطلوب إدخال رقم هاتف")
            .required("مطلوب إدخال رقم هاتف"),
          password: Yup.string()
            .min(6, "لا يقل عن 6 أرقام ")
            .required("مطلوب  إدخال كلمة سر"),
          bloodType: Yup.string()
            .required("اختر فصيلة دم"),
          cities: Yup.object()
            .required("اختر مدينتك الحالية"),
          governer: Yup.object()
            .required("اختر مديريتك الحالية"),
          address: Yup.string()
            .required("ادخل عنوانك"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          const auth = getAuth();
          createUserWithEmailAndPassword(auth, values.email, values.password)
            .then((userCredential) => {
              localStorage.setItem("uid", auth?.currentUser?.uid);
              const uid = userCredential.user.uid;
              setDoc(doc(db, "donors", uid), {
                name: values.name,
                email: values.email,
                phone: values.phone,
                blood_type: values.bloodType,
                state: values.cities.name,
                district: values.governer.name,
                neighborhood: values.address,
                lon: longitude.toString(),
                lat: latitude.toString(),
                is_shown_phone: "1",
                is_shown: "1",
                is_gps_on: "1",
                image: "",
                token: token,
                status: "ACTIVE",
              });
              checkIfAuthenticated();
              navigate("/");
            })
            .catch((error) => {
              if (
                error.message === "Firebase: Error (auth/email-already-in-use)."
              ) {
                console.log(error.message);
                setShowTost(true);
              }
            });
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
          setFieldValue,
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
                  error={touched.name && Boolean(errors.name)}
                  helperText={touched.name && errors.name}
                  margin="normal"
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
                  error={touched.email && Boolean(errors.email)}
                  helperText={touched.email && errors.email}
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
                  error={touched.phone && Boolean(errors.phone)}
                  helperText={touched.phone && errors.phone}
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
                  error={touched.password && Boolean(errors.password)}
                  helperText={touched.password && errors.password}
                  margin="normal"
                  label=" كلمة السر "
                  variant="outlined"
                />
                <Link
                  href="/SignUpCenter"
                  variant="body2"
                  sx={{
                    color: "blue",
                  }}
                >
                  تسجيل الدخول كبنك دم
                </Link>
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
                  getOptionLabel={(option) => option || ""}
                  value={values.bloodType}
                  variant="outlined"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="فصيلة دمك ؟"
                      error={touched.bloodType && Boolean(errors.bloodType)}
                      helperText={touched.bloodType && errors.bloodType}
                    />
                  )}
                  onChange={(event, newBloodtype) =>
                    setFieldValue("bloodType", newBloodtype)
                  }
                />
                <Autocomplete
                  id="cities"
                  name="cities"
                  margin="normal"
                  sx={{
                    marginBottom: "15px",
                  }}
                  options={city}
                  getOptionLabel={(option) => option?.name || ""}
                  value={values.cities}
                  onChange={(event, newVal) => {
                    setFieldValue("cities", newVal);
                    handleChangeGovernorate(newVal);
                  }}
                  variant="outlined"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="المحافظة"
                      error={touched.cities && Boolean(errors.cities)}
                      helperText={touched.cities && errors.cities}
                    />
                  )}
                />
                <Autocomplete
                  id="governer"
                  name="governer"
                  margin="normal"
                  options={governer}
                  onChange={(event, newVal) => {
                    setFieldValue("governer", newVal);
                  }}
                  getOptionLabel={(option) => option?.name || ""}
                  value={values.governer}
                  variant="outlined"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="المديرية"
                      error={touched.governer && Boolean(errors.governer)}
                      helperText={touched.governer && errors.governer}
                    />
                  )}
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
                  error={touched.address && Boolean(errors.address)}
                  helperText={touched.address && errors.address}
                  margin="normal"
                  label="عنوان الحي"
                  variant="outlined"
                />
              </Box>
            </FormSteps>
          </Form>
        )}
      </Formik>
      <AlertSnackBar
        open={showTost}
        handleClose={() => setShowTost(false)}
        message={tost.tostMsg}
        type={tost.tostType}
      />
    </CardContent>
  );
};
const FormSteps = (props) => {
  const childernArr = React.Children.toArray(props.children);
  const [step, setStep] = useState(1);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = ["حسابك", "بياناتك"];
  const name = childernArr[step - 1].props.children.map(
    (item) => item.props.name
  );
  const goBack = () => {
    setStep(step - 1);
  };
  const goNext = () => {
    for (var a = 0; a < name.length; a++) {
      if (props.errors[name[a]]) {
        props.validateField(name);
        return;
      }
    }
    setStep(step + 1);
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const rtlTheme = createTheme({ direction: "rtl" });
  return (
    <>
      <Grid container component="main" sx={{ dir: "ltr", marginTop: "20px" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <LottieApp animationpath={SETTINGS} />
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
              <ThemeProvider theme={rtlTheme}>
                <StylesProvider jss={jss}>
                  <Stepper
                    activeStep={activeStep}
                    sx={{
                      "& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ":
                      {
                        color: "red",
                      },
                      "& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                      {
                        color: "green",
                      },
                    }}
                  >
                    {steps.map((label, index) => {
                      const stepProps = {};
                      const labelProps = {};
                      return (
                        <Step key={label} {...stepProps} sx={{ mb: "20px" }}>
                          <StepLabel
                            {...labelProps}
                            sx={{
                              "& .css-1gdzht-MuiStepLabel-label": {
                                mr: "9px",
                              },
                              "& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-active ":
                              {
                                color: "red",
                              },
                              "& .css-gz0zcn-MuiSvgIcon-root-MuiStepIcon-root.Mui-completed":
                              {
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
                </StylesProvider>
              </ThemeProvider>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};
export default Try;
