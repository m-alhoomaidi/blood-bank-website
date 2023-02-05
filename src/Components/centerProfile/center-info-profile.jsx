import React, { useState, useEffect } from 'react'
import {
    Card, Alert, AlertTitle, Typography,
    Box, Avatar, Button, Divider, Grid, CardMedia, Autocomplete, TextField, CircularProgress,
} from "@mui/material"
import { useFormik } from "formik";
import Countryes from '../../Local/Data.json';
import * as Yup from "yup";
import { storage, db, auth } from '../../utils/firebase';
import { AlertSnackBar } from '../common/alert-snackbar';
import { addDoc, collection, getDocs, query, where, doc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";
import { v4 } from "uuid";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { useAuthContext } from '../../context/auth-context';
export const PersonalInfoProfile = () => {
    const [open, setOpen] = useState(false);
    const HandleOpen = () => { setOpen(true); }
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
    const id=localStorage.getItem("uid");
    const { user, updateUser,checkIfAuthenticated } = useAuthContext();
    const UploadAndDownImage = (event) => {
        const ImgeProfiles = event.target.files[0];
        setProgress(true);
        const imageRef = ref(storage, `ImageTest/${ImgeProfiles.name + v4()}`);
        uploadBytes(imageRef, ImgeProfiles).then((snapshot) => {
            getDownloadURL(snapshot.ref).then((url) => {
                setImages(url);
                updateDoc(doc(db, "centers", id), { image: url }).then((response) => {
                    console.log(response);
                    setProgress(false);
                    updateUser({ ...user, image: url });
                });
            });
        })
    }
    const ClickOpenFile = () => {
        document.getElementById('uploadImage').click();
    }
    const formik = useFormik({
        initialValues: {
            username: "",
            neighborhood: user?.neighborhood,
            phone: user?.phone,
            state: { name: "", id: "" },
            district: { name: "", id: "" },
            email: user?.email,
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(255)
                .required("اسم المستخدم مطلوب"),
            neighborhood: Yup.string().max(255).required("اسم المنطقة مطلوب"),
            phone: Yup.string().max(255).required("رقم التلفون مطلوب"),
        }),
        onSubmit: (values) => {
            console.log(values);
            if (values.username === ' ') {
                console.log("error upload data");
            }
            const newProfile = {
                name: values.username,
                neighborhood: values.neighborhood,
                district: values.district.name,
                state: values.state.name,
                phone: values.phone,
                email: values.email,
            }
            const userDoc = doc(db, "centers", id );
            updateDoc(userDoc, newProfile).then((response) => {
                setShowTost(true);
                setTost({
                    tostMsg: "لقد تم تحديث البيانات بنجاح",
                    tostType: "success",
                });
            });
           // updateUser({ ...values, image: imagess });
           checkIfAuthenticated();
        },
    });
    const [City, setCity] = useState([]);

    useEffect(() => {
        const GetState = Countryes?.filter((country) => country?.name === user?.state);
        const GetDistricts = GetState[0]?.city
        const GetDistrict = GetDistricts?.filter((district) => district?.name === user?.district) || null;
        formik.setFieldValue('username', user?.name)
        formik.setFieldValue('state', GetState[0])
        formik.setFieldValue('neighborhood', user?.neighborhood)
        formik.setFieldValue('phone', user?.phone)
        formik.setFieldValue('email', user?.email)
        formik.setFieldValue('district', GetDistrict ? GetDistrict[0] : null)
        setImages(user?.image);
    }, [user]);


    const HandleCity = (event, e) => {
        const getStateid = e?.id;
        const getCitydata = Countryes?.find(
            (country) => country.id === getStateid
        ).city;
        setCity(getCitydata);
        formik.setFieldValue('state', e);
        formik.setFieldValue('district', getCitydata[0]);
    };
    const HandleState = (event, e) => {
        formik.setFieldValue('district', e);
    };

    return (
        <>
            <Box flexDirection="column" sx={{ display: "flex" }}>
                <Card sx={{ px: { md: 3, xs: 0 }, mt: { xs: -5, md: 0 }, mx: { md: -2, xs: 0 }, width: "100%" }}>
                    <Grid container spacing={2}>
                        <Grid item md={12} xs={12}>
                            <Box sx={{ my: 3, display: { md: 'flex', xs: 'none' } }}>
                                <Typography
                                    sx={{
                                        color: '#191919',
                                        fontWeight: 700,
                                        fontSize: '20px'
                                    }}>معلومات الحساب</Typography>
                            </Box>
                            <Box>
                                <Box sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexWrap: 'wrap',
                                    gap: 1,
                                    flexDirection: { md: 'row', xs: 'column' }
                                }}>
                                    <Box sx={{
                                        flex: 0.5, m: 1
                                    }}>
                                        {progress ? <CircularProgress /> :
                                            <Avatar src={imagess}
                                                sx={{
                                                    width: { md: '133px', xs: '59px' },
                                                    height: { md: '133px', xs: '59px' }
                                                }}
                                            />}
                                    </Box>
                                    <Box sx={{
                                        flex: '2',
                                    }}>
                                        <Box sx={{
                                            display: 'flex',
                                            gap: 1
                                        }}><TextField fullWidth type='file' onChange={UploadAndDownImage}
                                            sx={{ display: "none" }} id="uploadImage" />
                                            <Button variant="contained" onClick={ClickOpenFile} sx={{
                                                fontSize: { md: 16, xs: 11 },
                                                maxWidth: { md: '274px', xs: '200px' },
                                                '&:hover': {
                                                    backgroundColor: "#4c4c4c"
                                                }
                                            }}>
                                                تحديث صورة الملف الشخصي
                                            </Button>
                                        </Box>
                                        <Typography sx={{
                                            fontSize: '10px',
                                            mt: 1,
                                            color: '#191919',
                                            wordWrap: 'break-word'
                                        }}>
                                            مسموح بـ jpg أو png أو GIF
                                        </Typography>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>

                    <Divider sx={{ mt: 2, mb: 4 }} />
                    <Box sx={{ my: 1, px: 2 }}>
                        <Grid container spacing={2}>
                            <Grid item md={5.6} xs={12} >
                                <TextField
                                    error={Boolean(
                                        formik.touched.username && formik.errors.username
                                    )}
                                    name="username"
                                    fullWidth
                                    helperText={formik.touched.username && formik.errors.username}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.username || ""}
                                    id="outlined-basic"
                                    label="الاسم الكامل"
                                    variant="outlined"
                                />
                            </Grid>
                            <Grid item md={5.6} xs={12}>
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
                                    error={Boolean(
                                        formik.touched.email && formik.errors.email
                                    )}
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mt: 1 }}>
                            <Grid item md={5.6} xs={12}>
                                <TextField
                                    error={Boolean(
                                        formik.touched.phone && formik.errors.phone
                                    )}
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
                            <Grid item xs={12} md={5.6}>
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
                                        <TextField {...params} variant="outlined" label="المحافظة" />
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12} md={5.6}>
                                <Autocomplete
                                    fullWidth
                                    disablePortal
                                    id="City"
                                    value={formik.values.district || null}
                                    onChange={HandleState}
                                    options={City}
                                    getOptionLabel={(City) => City.name || ""}
                                    renderInput={(params) => (
                                        <TextField {...params} variant="outlined" label="المديرية" />)} />
                            </Grid>
                            <Grid item xs={12} md={5.6}>
                                <TextField
                                    name="neighborhood"
                                    fullWidth
                                    helperText={formik.touched.neighborhood && formik.errors.neighborhood}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.neighborhood || ""}
                                    id="outlined-basic"
                                    label="المنطقة"
                                    variant="outlined"
                                />
                            </Grid>
                        </Grid>
                        <Grid container spacing={2} sx={{ mb: 5 }}>
                            <Grid item xs={12} md={11.2}>
                                <Button variant="contained"
                                    fullWidth
                                    onClick={formik.handleSubmit}
                                    color="primary"
                                    sx={{
                                        mt: 4,
                                        '&:hover': {
                                            backgroundColor: "#4c4c4c"
                                        }
                                    }}>
                                    حفظ التعديلات
                                </Button>
                            </Grid>
                        </Grid>
                    </Box>
                </Card>
                <AlertSnackBar
                    open={showTost}
                    handleClose={() => setShowTost(false)}
                    message={tost.tostMsg}
                    type={tost.tostType} />
            </Box >
        </>
    )
}