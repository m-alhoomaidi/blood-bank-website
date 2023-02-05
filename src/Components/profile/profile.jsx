import React, { useState, useEffect } from "react";
import {
  Card,
  Box,
  Avatar,
  Grid,
  Typography,
  Button,
  Divider,
  Alert,
  CardHeader,
  TextField,
  Autocomplete,
  CircularProgress,
} from "@mui/material";
import Grow from "@mui/material/Grow";
import Countryes from "../../Local/Data.json";
import { ModelCancle, CardSucces } from "./model-cancle";
import { CardHeaderXs } from "./card-Hearder-xs";
import { storage, db, auth } from "../../utils/firebase";
import { AlertSnackBar } from "../common/alert-snackbar";
import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  doc,
  updateDoc,
  getDoc,
  onSnapshot,
} from "firebase/firestore";
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useAuthContext } from "../../context/auth-context";
import { useFormik } from "formik";
import * as Yup from "yup";
const TypeBlood = ["A+", "B+", "AB+", "O+", "A-", "B-", "AB-", "O-"];

const Profile = () => {
  const [open, setOpen] = useState(false);
  const HandleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => setOpen(false);
  const [imagess, setImages] = useState("");
  const [progress, setProgress] = useState(false);
  const [showTost, setShowTost] = useState(false);
  const [displayNone, setDisplayNone] = useState(true);
  const [IsShown, setIsShown] = useState("");
  const [tost, setTost] = useState({
    tostMsg: "لم يتم تحديث البيانات",
    tostType: "error",
  });
  const id = localStorage.getItem("uid");
  const { user, updateUser, checkIfAuthenticated } = useAuthContext();
  const UploadAndDownImage = (event) => {
    const ImgeProfiles = event.target.files[0];
    setProgress(true);
    const imageRef = ref(storage, `ImageTest/${ImgeProfiles.name + v4()}`);
    uploadBytes(imageRef, ImgeProfiles).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setImages(url);
        updateDoc(doc(db, "donors", id), { image: url }).then((response) => {
          console.log(response);
          setProgress(false);
          updateUser({ ...user, image: url });
        });
      });
    });
  };
  const ClickOpenFile = () => {
    document.getElementById("uploadImage").click();
  };
  const formik = useFormik({
    initialValues: {
      username: user.name,
      neighborhood: user.neighborhood,
      phone: user.phone,
      state: { name: "", id: "" },
      district: { name: "", id: "" },
      email: user.email,
      typeBlood: user.blood_type,
    },
    validationSchema: Yup.object({
      username: Yup.string().max(255).required("اسم المستخدم مطلوب"),
      neighborhood: Yup.string().max(255).required("اسم المنطقة مطلوب"),
      phone: Yup.string().max(255).required("رقم التلفون مطلوب"),
      typeBlood: Yup.string().max(255).required("فصيلة الدم مطلوبة"),
    }),
    onSubmit: (values) => {
      console.log(values);
      if (values.username === " ") {
        console.log("error upload data");
      }
      const newProfile = {
        name: values.username,
        neighborhood: values.neighborhood,
        district: values.district.name,
        blood_type: values.typeBlood,
        state: values.state.name,
        phone: values.phone,
        email: values.email,
      };
      const userDoc = doc(db, "donors", id);
      updateDoc(userDoc, newProfile).then((response) => {
        setShowTost(true);
        setTost({
          tostMsg: "لقد تم تحديث البيانات بنجاح",
          tostType: "success",
        });
      });
      checkIfAuthenticated();
    },
    enableReinitialize: true,
  });
  const [City, setCity] = useState([]);
  useEffect(() => {
    const GetState = Countryes?.filter(
      (country) => country?.name === user?.state
    );
    const GetDistricts = GetState[0]?.city;
    const GetDistrict =
      GetDistricts?.filter((district) => district?.name === user?.district) ||
      null;
    formik.setFieldValue("username", user.name);
    formik.setFieldValue("state", GetState[0]);
    formik.setFieldValue("neighborhood", user.neighborhood);
    formik.setFieldValue("phone", user.phone);
    formik.setFieldValue("email", user.email);
    formik.setFieldValue("typeBlood", user.blood_type);
    formik.setFieldValue("district", GetDistrict ? GetDistrict[0] : null);
    setImages(user.image);
    setIsShown(user.is_shown);
    // GetDataApi();
  }, [user]);

  const HandleCity = (event, e) => {
    const getStateid = e.id;
    const getCitydata = Countryes.find(
      (country) => country.id === getStateid
    ).city;
    setCity(getCitydata);
    formik.setFieldValue("state", e);
    formik.setFieldValue("district", getCitydata[0]);
  };
  const HandleState = (event, e) => {
    formik.setFieldValue("district", e);
  };
  return (
    <Box
      sx={{
        marginTop: "70px",
      }}
    >
      <Grid container justifyContent="center">
        <Grid item md={10} xs={12}>
          <CardHeaderXs />
          <Card sx={{ p: 2 }}>
            <Box sx={{ display: "flex", mr: 18 }}>
              <Typography
                sx={{
                  fontSize: "25px",
                  display: { xs: "none", md: "flex" },
                  justifyContent: "center",
                  marginBottom: "10px",
                }}
              >
                معلومات الحساب
              </Typography>
            </Box>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
              flexDirection="row"
            >
              <Grid item md={3} xs={4}>
                {progress ? (
                  <CircularProgress />
                ) : (
                  <Avatar
                    sx={{
                      height: { xs: "100px", md: "150px" },
                      width: { xs: "100px", md: "150px" },
                    }}
                    src={imagess}
                  ></Avatar>
                )}
              </Grid>
              <Grid item md={5} xs={8} marginTop="30px">
                <TextField
                  fullWidth
                  type="file"
                  onChange={UploadAndDownImage}
                  sx={{ display: "none" }}
                  id="uploadImage"
                />
                <Button
                  fullWidth
                  variant="contained"
                  onClick={ClickOpenFile}
                  sx={{
                    fontSize: { xs: "-0.125rem", md: "1.0rem" },
                    padding: { xs: "5px" },
                  }}
                >
                  تحديث صورة الملف الشخصي
                </Button>
                <Typography
                  color="darkgray"
                  sx={{
                    fontSize: "12px",
                    marginRight: "20px",
                  }}
                >
                  مسموح بتنسيق jpg أو png أو GIF
                </Typography>
              </Grid>
            </Grid>
            <Divider sx={{ marginTop: "30px" }} />

            <Grid
              container
              spacing={3}
              sx={{ marginTop: "10px" }}
              justifyContent="center"
            >
              <Grid item md={5} xs={10.5}>
                <TextField
                  error={Boolean(
                    formik.touched.username && formik.errors.username
                  )}
                  name="username"
                  fullWidth
                  helperText={formik.touched.username && formik.errors.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.username || ""}
                  id="outlined-basic"
                  label="الاسم"
                  variant="outlined"
                  type="text"
                />
              </Grid>
              <Grid item md={5} xs={10.5}>
                <TextField
                  fullWidth
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.email || ""}
                  id="outlined-basic"
                  name="email"
                  label="البريد الالكتروني"
                  variant="outlined"
                  type="email"
                  error={Boolean(formik.touched.email && formik.errors.email)}
                />
              </Grid>
              <Grid item md={5} xs={10.5}>
                <TextField
                  error={Boolean(formik.touched.phone && formik.errors.phone)}
                  name="phone"
                  fullWidth
                  helperText={formik.touched.phone && formik.errors.phone}
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.phone || ""}
                  id="outlined-basic"
                  label="رقم الهاتف"
                  variant="outlined"
                  type="number"
                />
              </Grid>
              <Grid item md={5} xs={10.5}>
                <Autocomplete
                  fullWidth
                  name="typeBlood"
                  value={formik.values.typeBlood || ""}
                  options={TypeBlood}
                  onChange={(e, event) => {
                    formik.setFieldValue("typeBlood", event);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label="فصيلة الدم"
                      error={Boolean(
                        formik.touched.typeBlood && formik.errors.typeBlood
                      )}
                    />
                  )}
                />
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={10} xs={12}>
          <Card sx={{ marginTop: "15px", paddingBottom: "20px" }}>
            <Grid
              container
              spacing={3}
              sx={{ marginTop: "10px" }}
              justifyContent="center"
            >
              <Grid item xs={10} md={3.3}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  name="state"
                  value={formik.values.state || null}
                  id="Country"
                  onChange={HandleCity}
                  options={Countryes}
                  getOptionLabel={(Countryes) => Countryes.name || ""}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="المحافظة"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={10} md={3.3}>
                <Autocomplete
                  fullWidth
                  disablePortal
                  id="City"
                  name="district"
                  value={formik.values.district || null}
                  onChange={HandleState}
                  options={City}
                  getOptionLabel={(City) => City.name || ""}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      variant="outlined"
                      label="المديرية"
                    />
                  )}
                />
              </Grid>
              <Grid item xs={10} md={3.3}>
                <TextField
                  error={Boolean(
                    formik.touched.neighborhood && formik.errors.neighborhood
                  )}
                  name="neighborhood"
                  fullWidth
                  helperText={
                    formik.touched.neighborhood && formik.errors.neighborhood
                  }
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  value={formik.values.neighborhood || ""}
                  id="outlined-basic"
                  label="المنطقة"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={10} md={10}>
                <Button
                  fullWidth
                  type="submit"
                  variant="contained"
                  onClick={formik.handleSubmit}
                >
                  حفظ التعديلات
                </Button>
              </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid item md={10} xs={12}>
          {displayNone || IsShown === "1" ? (
            <Card sx={{ marginTop: "10px", p: 1 }}>
              <CardHeader
                title="إلغاء تنشيط عملية التبرع"
                sx={{ marginRight: "70px" }}
              />
              <Grid container spacing={2} justifyContent="center">
                <Grid item xs={10} md={10}>
                  <Alert
                    icon={false}
                    severity="error"
                    sx={{
                      "& .css-1pxa9xg-MuiAlert-message": { color: "red" },
                    }}
                  >
                    هل أنت متأكد من عملية الإلغاء؟ <br />
                    سيتم تعطيل حسابك ولن تظهر بياناتك عندما يتم البحث عن متبرع
                  </Alert>
                </Grid>
                <Grid item xs={10} md={10}>
                  <Button
                    fullWidth
                    variant="contained"
                    color="error"
                    onClick={HandleOpen}
                  >
                    إلغاء تنشيط عملية التبرع
                  </Button>
                </Grid>
                <Grid item xs={10} md={10}>
                  <ModelCancle
                    opens={open}
                    Hand={handleClose}
                    displayed={setDisplayNone}
                    IsShowning={setIsShown}
                  />
                </Grid>
              </Grid>
            </Card>
          ) : (
            <CardSucces
              Hand={handleClose}
              displayed={setDisplayNone}
              IsShowning={setIsShown}
            />
          )}
        </Grid>

        <AlertSnackBar
          open={showTost}
          handleClose={() => setShowTost(false)}
          message={tost.tostMsg}
          type={tost.tostType}
        />
      </Grid>
    </Box>
  );
};
export default Profile;
