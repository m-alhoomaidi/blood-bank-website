import BloodTypeAmount from "./bloodtypecenteroption";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import { useState } from "react";
import ProfileNavigation from "./list-profile";
import { useEffect } from "react";
import { useAuthContext } from "../../context/auth-context";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { AlertSnackBar } from "../common/alert-snackbar";
const data = {
  "A+": 15,
  "A-": 10,
  "AB+": 1,
  "AB-": 1,
  "B+": 10,
  "B-": 1,
  "O+": 20,
  "O-": 1,
};
const BloodForm = () => {
  const { user, updateUser, checkIfAuthenticated } = useAuthContext();
  const id = localStorage.getItem("uid");
  const [bloodTypes, setbloodTypes] = useState();
  const [showTost, setShowTost] = useState(false);
  const [tost, setTost] = useState({
    tostMsg: "لم يتم تحديث البيانات",
    tostType: "error",
  });
  const BloodTypes = async () => {
    const docRef = doc(db, "centers", id);
    const BloodType = await getDoc(docRef);
    setbloodTypes(BloodType?.data());
  };
  useEffect(() => {
    BloodTypes();
    // const fn = async () => {
    //   await BloodTypes();
    // };
    // fn();
  }, []);
  const HandleClick = () => {
    const docRef = doc(db, "centers", id);
    updateDoc(docRef, { ...bloodTypes }).then((response) => {
      setShowTost(true);
      setTost({
        tostMsg: "لقد تم تحديث البيانات بنجاح",
        tostType: "success",
      });
    });
    checkIfAuthenticated();
  };
  const onChange = (key, value) => {
    setbloodTypes({ ...bloodTypes, [key]: value });
  };
  return (
    <>
      {bloodTypes && (
        <>
          <Card sx={{ p: 2 }}>
            <Box>
              <Grid container>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="A+"
                    value={bloodTypes["A+"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="A-"
                    value={bloodTypes["A-"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="AB+"
                    value={bloodTypes["AB+"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="AB-"
                    value={bloodTypes["AB-"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="B+"
                    value={bloodTypes["B+"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="B-"
                    value={bloodTypes["B-"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="O+"
                    value={bloodTypes["O+"] || 0}
                    onChange={onChange}
                  />
                </Grid>
                <Grid item md={6} xs={12} sx={{ my: 2 }}>
                  <BloodTypeAmount
                    title="O-"
                    value={bloodTypes["O-"] || 0}
                    onChange={onChange}
                  />
                </Grid>
              </Grid>
            </Box>
          </Card>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              mt: 3,
              mb: 2,
            }}
            onClick={HandleClick}
          >
            حفظ البيانات
          </Button>
          <AlertSnackBar
            open={showTost}
            handleClose={() => setShowTost(false)}
            message={tost.tostMsg}
            type={tost.tostType}
          />
        </>
      )}
    </>
  );
};

export default BloodForm;
