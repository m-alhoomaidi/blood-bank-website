import React, { useEffect } from "react";
import { Field, Formik, Form } from "formik";
import * as Yup from "yup";
import { Box, Button, TextField } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import LottieApp from "../Components/lottie";
import { HEALTH_LOTTIE } from "../constant/media";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { db, messaging } from "../utils/firebase";
import { useState } from "react";
import { AlertSnackBar } from "../Components/common/alert-snackbar";
import { useNavigate } from "react-router-dom";
import { getMessaging, getToken } from "firebase/messaging";
import { useAuthContext } from "../context/auth-context";
const phoneRegExp = /7(1|7|3|8|0)([0-9]){7}/;
const SignUpcenter = () => {
  const { checkIfAuthenticated } = useAuthContext();
  const [token, setToken] = useState("");
  const [showTost, setShowTost] = useState(false);
  const [tost, setTost] = useState({
    tostMsg: " البريد الإلكتروني موجود مسبقًا",
    tostType: "error",
  });
  const navigate = useNavigate();
  async function requestPermissions() {
    await Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        getToken(messaging, {
          vapidKey:
            "BBn3zGcKMynrgirvOIsFXTHoTHKNW-iX3FWefaw9zUVbRygfIzYSQqHqJabWsNcg5v-oYG2E1tDBsh42WR7RNzQ",
        }).then((token) => {
          setToken(token);
        });
      } else if (permission === "denied") {
      }
    });
  }
  useEffect(() => {
    requestPermissions();
  }, []);

  return (
    <>
      <Grid container component="main" sx={{ mt: 8, dir: "ltr" }}>
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
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  flexDirection: "column",
                }}
              >
                <Avatar sx={{ m: 1, bgcolor: "#e12c34" }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography>إنشاء حساب كبنك دم </Typography>
              </Box>
              <Formik
                initialValues={{
                  centerName: "",
                  centerEmail: "",
                  centerPhoneNumber: "",
                  centerPassword: "",
                }}
                validationSchema={Yup.object().shape({
                  centerName: Yup.string().max(255).required("مطلوب إدخال اسم"),
                  centerEmail: Yup.string()
                    .email()
                    .required("مطلوب إدخال ايميل"),
                  centerPhoneNumber: Yup.string()
                    .max(9, "يجب إدخال رقم صالح")
                    .min(9, "يجب إدخال رقم صالح")
                    .matches(phoneRegExp, "مطلوب إدخال رقم هاتف")
                    .required("مطلوب إدخال رقم هاتف"),
                  centerPassword: Yup.string()
                    .min(6, "لا يقل عن 6 أرقام ")
                    .required("مطلوب  إدخال كلمة سر"),
                })}
                onSubmit={(values, { setSubmitting }) => {
                  setSubmitting(false);
                  const auth = getAuth();
                  createUserWithEmailAndPassword(
                    auth,
                    values.centerEmail,
                    values.centerPassword
                  )
                    .then((userCredential) => {
                      localStorage.setItem("uid", auth?.currentUser?.uid);
                      const uid = userCredential?.user?.uid;
                      console.log(uid);
                      setDoc(
                        doc(db, "centers", uid),
                        {
                          name: values.centerName,
                          email: values.centerEmail,
                          phone: values.centerPhoneNumber,
                          password: values.centerPassword,
                          "A+": 0,
                          "A-": 0,
                          "AB+": 0,
                          "AB-": 0,
                          "B+": 0,
                          "B-": 0,
                          "O+": 0,
                          "O-": 0,
                          state: "",
                          district: "",
                          neighborhood: "",
                          last_update: "",
                          lon: "",
                          lat: "",
                          is_shown_phone: "1",
                          is_shown: "1",
                          is_gps_on: "1",
                          image: "",
                          token: token,
                          status: "ACTIVE",
                        }
                      );
                      checkIfAuthenticated();
                    })
                    .catch((error) => {
                      if (
                        error.message ===
                        "Firebase: Error (auth/email-already-in-use)."
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
                }) => (
                  <Form onSubmit={handleSubmit}>
                    <Field
                      type="text"
                      name="centerName"
                      id="centerName"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.centerName}
                      component={TextField}
                      error={errors.centerName ? true : false}
                      helperText={errors.centerName && errors.centerName}
                      margin="normal"
                      autoFocus
                      label="   اسم بنك الدم "
                      variant="outlined"
                    />
                    <Field
                      type="email"
                      name="centerEmail"
                      id="centerEmail"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.centerEmail}
                      component={TextField}
                      error={errors.centerEmail ? true : false}
                      helperText={errors.centerEmail && errors.centerEmail}
                      margin="normal"
                      label=" البريد الاكتروني  "
                      variant="outlined"
                    />
                    <Field
                      type="text"
                      name="centerPhoneNumber"
                      id="centerPhoneNumber"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.centerPhoneNumber}
                      component={TextField}
                      error={errors.centerPhoneNumber ? true : false}
                      helperText={
                        errors.centerPhoneNumber && errors.centerPhoneNumber
                      }
                      margin="normal"
                      label=" رقم الهاتف  "
                      variant="outlined"
                    />
                    <Field
                      type="password"
                      name="centerPassword"
                      id="centerPassword"
                      fullWidth
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.centerPassword}
                      component={TextField}
                      error={errors.centerPassword ? true : false}
                      helperText={
                        errors.centerPassword && errors.centerPassword
                      }
                      margin="normal"
                      label=" كلمة السر "
                      variant="outlined"
                    />
                    <Button
                      type="submit"
                      fullWidth
                      onClick={() => {
                        handleSubmit();
                        navigate("/centerprofile");
                      }}
                      disabled={isSubmitting}
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
                      الانتقال إلى الصفحة الشخصية لإكمال البيانات
                    </Button>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Grid>
      </Grid>
      <AlertSnackBar
        open={showTost}
        handleClose={() => setShowTost(false)}
        message={tost.tostMsg}
        type={tost.tostType}
      />
    </>
  );
};

export default SignUpcenter;
