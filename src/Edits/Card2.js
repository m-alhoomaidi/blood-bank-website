import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import CardItem from './CardItem';
const Card2 =()=>{
return (
    <Box >
    <Grid >
    <CardItem sx={{margin:"20px"}}>
    <Grid item xs container direction="column" spacing={2} sx={{
      margin :"10px"
    }}>
      
    <TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        margin:"10px",
       }}
  required
  multiline
  id="phoneNumber"
  defaultValue="عبدالله اليفرسي"
  helperText="أنقر لتغيير اسمك الشخصي"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        margin:"10px",
       }}
       
  required
  multiline
  id="phoneNumber"
  defaultValue="+967 775076363"
  helperText="أنقر لتعيير رقم الهاتف"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        margin:"10px",
       }}
  required
  multiline
  id="phoneNumber"
  defaultValue="A+"
  helperText="أنقر لتعيير فصيلة دمك"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        }
        ,
        margin:"10px",
       }}
       
  required
  multiline
  id="phoneNumber"
  defaultValue="Abdullah@gmail.com"
  helperText="أنقر لتغيير البريد الالكتروني "
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
     

      <Grid  direction="row"  sx={{
        marginRight:"-30px"
     
    }}>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        marginRight:"20px",
       }}
  required
  multiline
  id="phoneNumber"
  defaultValue="إب"
  helperText="أنقر لتعيير المحافظة"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        marginRight:"20px",
       
       }}
  required
  multiline
  id="phoneNumber"
  defaultValue="جبلة"
  helperText="أنقر لتعيير المديرية"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
<TextField
  variant="standard"
       sx={{
        '& .css-1d1r5q-MuiFormHelperText-root' :{
          textAlign: 'right',
          fontSize:"18px",
          color :"black",
        },
        marginRight:"20px",
       }}
  required
  multiline
  id="phoneNumber"
  defaultValue="الشراعي"
  helperText="أنقر لتعيير المنطقة"
  name="phoneNumber"
  autoComplete="phoneNumber"
/>
</Grid>
</Grid>    
      </CardItem>
      </Grid>
        </Box>
);
};
export default Card2;