import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card1 from './Card1';
import Card2 from './Card2';
import SaveAsIcon from '@mui/icons-material/SaveAs';
export default function EditUser() {
  return (
    <Container>
    <Box >
    <Grid container spacing={3}   sx={{marginTop:"-170px",justifyContent:"center"}}>
    <Card1/>
        <Grid> <Card2/></Grid>
</Grid>  
<Box sx={{
  display:"flex",justifyContent:"center",
}}>
<Button variant="contained" startIcon={<SaveAsIcon />}
sx={{
  width :"100px",
  '& .css-i4bv87-MuiSvgIcon-root':{
    marginLeft :"15px"
  }
}}>
        حفظ  
      </Button>
  </Box>     
    </Box>
    </Container>
  );
};