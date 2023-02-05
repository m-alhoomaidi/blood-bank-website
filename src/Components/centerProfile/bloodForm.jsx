import BloodTypeAmount from "./bloodtypecenteroption";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import { useState } from "react";
import ProfileNavigation from "./list-profile";
const data = {
    "A+": 15,
    "A-": 10,
    "AB+": 1,
    "AB-": 1,
    "B+": 10,
    "B-": 1,
    "O+": 20,
    "O-": 1,
}
const BloodForm = () => {
    const [bloodTypes, setbloodTypes] = useState(data);
    const onChange = (key, value) => {
        setbloodTypes({ ...bloodTypes, [key]: value })
    }
    return (
        <>
            <Card sx={{p:2}}>
                    <Box >
                        <Grid container >
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="A+" value={bloodTypes["A+"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="A-" value={bloodTypes["A-"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="AB+" value={bloodTypes["AB+"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="AB-" value={bloodTypes["AB-"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="B+" value={bloodTypes["B+"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="B-" value={bloodTypes["B-"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="O+" value={bloodTypes["O+"]} onChange={onChange} />
                            </Grid>
                            <Grid item md={6} xs={12} sx={{ my: 2 }} >
                                <BloodTypeAmount title="O-" value={bloodTypes["O-"]} onChange={onChange} />
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
              >
                حفظ البيانات
              </Button>
        </>
    );
};

export default BloodForm;
