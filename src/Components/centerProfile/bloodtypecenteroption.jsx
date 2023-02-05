import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
const maincolor = "#e22c34";
const BloodTypeAmount = (props) => {
    const {
        title,
        value,
        onChange
    } = props;
    return (
        <>
            <Grid container sx={{ my: 2 }} spacing={2}>
                <Grid item md={4} xs={3} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <Box
                        sx={{
                            color: maincolor,
                            py: "7px",
                        }}
                    >
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 2
                            }}>

                            <Typography display={{ md: "block", xs: "none" }}>
                                فصيلة الدم
                            </Typography>
                            <Typography fontSize={{ md: "15px", xs: "30px" }}>
                                <b>{title}</b>
                            </Typography>
                        </Box>
                    </Box>
                </Grid>
                <Grid item md={2} xs={3}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <Button
                          onClick={()=>{
                            onChange(title,value+1)
                          }}
                            sx={{
                                width: 90,
                                height: 40,
                                border: 1,
                                borderRadius: 1,
                                borderColor: maincolor,
                                padding: "27px",
                                '&:active': {
                                    boxShadow: 'none',
                                    borderColor: '#e22c34',
                                },
                                '&:hover': {
                                    backgroundColor: "#fffff6",
                                    borderColor: '#e22c34',
                                    boxShadow: 'none',
                                },
                            }}
                            variant="outlined"
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "40px",
                                    color: maincolor
                                }}
                                ml={1}
                                mr={1}
                            >
                                +
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
                <Grid item md={2} xs={3}>
                    <TextField
                        name="bloodtype"
                        id="bloodtype"
                        label="الكمية"
                        fullWidth
                        type="text"
                        autoFocus
                        value={value}
                        onChange={(e)=>{
                            onChange(title,e.target.value)
                        }}
                        variant="outlined"
                        sx={{
                            '& label.Mui-focused': {
                                color: 'black',
                            },
                            '& .MuiInput-underline:after': {
                                borderBottomColor: 'black',
                            },
                            '& .MuiOutlinedInput-root': {
                                '& fieldset': {
                                    borderColor: 'black',
                                },
                                '&.Mui-focused fieldset': {
                                    borderColor: 'black',
                                },
                            },
                        }}
                    />
                </Grid>
                <Grid item md={2} xs={3}>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "center",
                        }}>
                        <Button
                            onClick={()=>{
                                onChange(title,value>0?value-1:value)
                              }}
                            sx={{
                                width: 90,
                                height: 40,
                                border: 1,
                                borderRadius: 1,
                                borderColor: maincolor,
                                padding: "27px",
                                '&:active': {
                                    boxShadow: 'none',
                                    borderColor: '#e22c34',
                                },
                                '&:hover': {
                                    backgroundColor: "#fffff6",
                                    borderColor: '#e22c34',
                                    boxShadow: 'none',
                                },
                            }}
                            variant="outlined"
                        >
                            <Typography
                                variant='h5'
                                sx={{
                                    fontWeight: "bold",
                                    fontSize: "40px",
                                    color: maincolor
                                }}
                                ml={2}
                                mr={2}
                            >
                                -
                            </Typography>
                        </Button>
                    </Box>
                </Grid>
            </Grid>
        </>
    );
};
export default BloodTypeAmount;