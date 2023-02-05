import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import LottieApp from "../Components/lottie";
import { HEALTH_LOTTIE, LOGIN, SETTINGS1 } from "../constant/media";
import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IconButton, InputAdornment } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { SECONDARY_COLOR } from "../constant/color";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";
import { auth } from "../utils/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { AlertSnackBar } from "../Components/common/alert-snackbar";
export default function SignInSide() {
  const [passwordShow, setPasswordShow] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [showTost, setShowTost] = useState(false);
  const [tost, setTost] = useState({
    tostMsg: "",
    tostType: "success",
  });

  const navigate = useNavigate();
  const { checkIfAuthenticated } = useAuthContext();
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(255)
        .required("اسم المستخدم أو معرف البريد الإلكتروني مطلوب"),
      password: Yup.string().max(255).required("كلمة السر مطلوبة"),
    }),
    onSubmit: ({ username, password }) => {
      signInWithEmailAndPassword(auth, username, password)
        .then((userCredential) => {
          localStorage.setItem("uid", auth?.currentUser?.uid);
          navigate("/");
        })
        .catch((error) => {
          setShowTost(true);
          setTost({
            tostMsg: "عنوان البريد أو كلمة السر غير صحيحة",
            tostType: "error",
          });
        });
    },
  });

  const handleChangeRemembeMe = (event) => {
    setIsRememberMe(event.target.checked);
  };
  return (
    <>
      <AlertSnackBar
        open={showTost}
        handleClose={() => setShowTost(false)}
        message={tost.tostMsg}
        type={tost.tostType}
      />
      <Grid container component="main" sx={{ dir: "ltr" }}>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "100%",
            }}
          >
            <LottieApp animationpath={LOGIN} />
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
                <Avatar bgcolor="primary" sx={{ m: 1 }}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography>تسجيل الدخول</Typography>
              </Box>
              <TextField
                error={Boolean(
                  formik.touched.username && formik.errors.username
                )}
                fullWidth
                helperText={formik.touched.username && formik.errors.username}
                label="البريد الإلكتروني"
                margin="normal"
                name="username"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                type="email"
                value={formik.values.username}
                variant="outlined"
                autoComplete="off"
                autoFocus
                dir="ltr"
                align="right"
              />

              <TextField
                error={Boolean(
                  formik.touched.password && formik.errors.password
                )}
                fullWidth
                helperText={formik.touched.password && formik.errors.password}
                label="كلمة السر"
                margin="normal"
                type={passwordShow ? "text" : "password"}
                name="password"
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                value={formik.values.password}
                variant="outlined"
                autoComplete="password"
                autoFocus
                dir="ltr"
                align="right"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="start">
                      <IconButton
                        onClick={() => {
                          setPasswordShow((prev) => !prev);
                        }}
                      >
                        {!passwordShow ? (
                          <VisibilityIcon />
                        ) : (
                          <VisibilityOffIcon />
                        )}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    checked={isRememberMe}
                    onChange={handleChangeRemembeMe}
                  />
                }
                label="تذكرني"
                sx={{
                  color: "gray",
                }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  mt: 3,
                  mb: 2,
                  // bgcolor: "#e12c34",
                  "&:hover": {
                    // backgroundColor: "red",
                    textDecoration: "none",
                  },
                }}
                onClick={formik.handleSubmit}
              >
                تسجيل الدخول
              </Button>
              <Box
                sx={{
                  display: "flex",
                  mt: 3,
                  justifyContent: "space-between",
                }}
              >
                <Link
                  href="#"
                  variant="body2"
                  sx={{
                    color: "blue",
                  }}
                >
                  هل نسيت كلمة السر ؟
                </Link>
                <Link href="#" variant="body2">
                  {" لا تمتلك حساب ؟ انشىء حساب ."}
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </>
  );
}
