import * as React from 'react';
import CardHeader from '@mui/material/CardHeader';
import Box from '@mui/material/Box';
import imgss from '../Images/abdullah.jpg';
import Grid from '@mui/material/Grid';
import Fab from '@mui/material/Fab';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import { CardContent, CardMedia } from '@mui/material';
import Typography from '@mui/material/Typography';
import CardItem from './CardItem';
const  Card1 = () => {
    return (
      <Box>
        <Grid minWidth={350}>
          <CardItem sx={{margin:"20px"}}>
      <Box>
    <CardMedia
        component="img"
        image={imgss}
        alt="Paella dish"
        sx={{
          width:"150px",
          height :"150px",
          borderRadius :"100px",
          marginTop :"10px",
        }}
      />
      <Fab color="primary" aria-label="add" size="small" style={{marginTop :"-60px",marginLeft:"90px",width:"30px"}}>
        <AddAPhotoIcon />
      </Fab>
      <CardHeader title="عبدالله اليفرسي"></CardHeader>
      <CardContent >
        <Typography variant="h5" gutterBottom sx={{
          marginTop :"-25px",
          marginLeft :"20px"
        }}>A+</Typography>
      </CardContent>
      </Box>
      </CardItem>
    </Grid>



      </Box>
    );
};
export default Card1;