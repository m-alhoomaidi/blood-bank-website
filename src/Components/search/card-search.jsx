import React, { useState ,useEffect} from 'react';
import { Avatar, Box, Card,Grid, Typography} from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import Button from '@mui/material/Button';
import ClockIcon from '@mui/icons-material/AccessTime';
import MessageIcon from '@mui/icons-material/Message';


export const CardSearch = ({nameSearch,bloodType,neighborhood}) => { 
   
    return (
      <>
      {nameSearch !== "" ?
    <Box sx={{'& .css-1o2f6ek-MuiPaper-root-MuiCard-root':{p:2}}}>
       <Card sx={{ height: '100%' }}>
          <Grid container spacing={3} >
            <Grid item >
                <Avatar
                   sx={{backgroundColor: 'error.main',marginRight:"20px"}}>
                     {bloodType}
                </Avatar>
             </Grid>
            <Grid item>
                <Typography sx={{marginTop:"8px"}}>{nameSearch}</Typography>
            </Grid>
           
            </Grid>
          <Grid container spacing={2} sx={{justifyContent:"center",flexDirection:"column" }} >
           <Grid item >
              <Typography sx={{marginRight:"80px"}}>المنطقة - {neighborhood}</Typography>
            </Grid>
           
          </Grid>
          <Box  sx={{margin:"20px 20px",display:"flex",justifyContent:'center'}}>
            <Grid container spacing={6} sx={{justifyContent:"center"}}>
            <Grid item >
              <a href="tel:+976776259340" >
               <Button variant="contained" sx={{background:"green", "&:hover": {
                  backgroundColor: "#69af69",
                  textDecoration: "none",
                },}} ><LocalPhoneIcon /></Button></a>
            </Grid>
            <Grid item >
                <Button variant="contained" sx={{background:"#f79898", "&:hover": {
                  backgroundColor: "#df2525",
                  textDecoration: "none",
                },}}><MessageIcon /></Button>
             </Grid>
            </Grid>
          </Box>
          
       </Card>
    </Box>
       :"" }
    </>
  );
};
