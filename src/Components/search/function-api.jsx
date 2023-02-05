import React, { useState, useEffect, useRef } from 'react'
import { Box, IconButton, Typography, Button, Grid } from '@mui/material';
import {CardSearch} from './card-search';
import { NotFoundData } from './not-fondData';
export const TypeBlood = [
  { label: "A+" },
  { label: "B+" },
  { label: "AB+" },
  { label: "O+" },
  { label: "A-" },
  { label: "B-" },
  { label: "AB-" },
  { label: "O-" },
];
export const Apositive = [
  { label: "A+" },
  { label: "A-" },
  { label: "O+" },
  { label: "O-" },
];
export const Bpositive = [
  { label: "B+" },
  { label: "B-" },
  { label: "O+" },
  { label: "O-" },
];
export const Anegative = [
  { label: "A-" },
  { label: "O-" },
];
export const Bnegative = [
  { label: "B-" },
  { label: "O-" },
];
export const ABpositive = [
  { label: "AB+" },
  { label: "AB-" },
  { label: "A+" },
  { label: "A-" },
  { label: "B+" },
  { label: "B-" },
  { label: "O-" },
  { label: "O+" },
];
export const ABnegative = [
  { label: "AB-" },
  { label: "A-" },
  { label: "B-" },
  { label: "O-" },
];
export const Onegative = [
  { label: "O-" },
];
export const Opositive = [
  { label: "O+" },
  { label: "O-" },
];
export const style = {
  "& .css-wx798j-MuiButtonBase-root-MuiIconButton-root": {
    backgroundColor: "#f8f8f8",
    color: "black",
    fontSize: "18px",
    borderRadius: "15px",
    width: "80px",
    mt: "8px",
    ml: "3px",
    "&:hover": {
      backgroundColor: "white",
      color: "red",
      border: "1px solid red",
      "&:hover": { background: "#f8f8f8" },
    }
  }
}


export const TypeBloodSame = ({ resultSearch,BloodType }) => {

  return (
    <Grid container justifyContent="center" flexDirection="row" spacing={2} mt={2}>
      {
        resultSearch.map((user, index) => {
          return (
            BloodType === "A+" && user.data.is_shown === "1" ?
           user.data.blood_type === "A+" || user.data.blood_type === "A+"  || user.data.blood_type === "O+"  || user.data.blood_type === "O-"  ?
              <Grid item xs={10} md={3.5} key={index} >
                <CardSearch
                  nameSearch={user.data.name}
                  bloodType={user.data.blood_type}
                  neighborhood={user.data.neighborhood}
                  sx={{ margin: "10px", p: 2 }}
                /> </Grid>
                 :"" :
              BloodType === "B+" && user.data.is_shown === "1" ?
               user.data.blood_type === "B+" || user.data.blood_type === "B-" || user.data.blood_type === "O+" || user.data.blood_type === "O-" ?
                <Grid item xs={10} md={3.5} key={index} >
                  
                  <CardSearch
                    nameSearch={user.data.name}
                    bloodType={user.data.blood_type}
                    neighborhood={user.data.neighborhood}
                    sx={{ margin: "10px", p: 2 }}
                  /></Grid> :"":
                  BloodType === "O+" && user.data.is_shown === "1" ?
                user.data.blood_type === "O+" && user.data.blood_type === "O-" ?
                  <Grid item xs={10} md={3.5} key={index} >
                    <CardSearch
                      nameSearch={user.data.name}
                      bloodType={user.data.blood_type}
                      neighborhood={user.data.neighborhood}
                      sx={{ margin: "10px", p: 2 }}
                    /></Grid>:"" :

                    BloodType === "O-" && user.data.is_shown === "1" ? 
                    <Grid item xs={10} md={3.5} key={index} >
                      
                      <CardSearch
                        nameSearch={user.data.name}
                        bloodType={user.data.blood_type}
                        neighborhood={user.data.neighborhood}
                        sx={{ margin: "10px", p: 2 }}
                      /></Grid> :
                      BloodType === "A-" && user.data.is_shown === "1" ? 
                        user.data.blood_type === "O-" || user.data.blood_type === "O-" ?
                      <Grid item xs={10} md={3.5} key={index} >
                        
                        <CardSearch
                          nameSearch={user.data.name}
                          bloodType={user.data.blood_type}
                          neighborhood={user.data.neighborhood}
                          sx={{ margin: "10px", p: 2 }}
                        /></Grid> :"":
                        BloodType === "B-" && user.data.is_shown === "1" ? 
                       user.data.blood_type === "B-" || user.data.blood_type === "O-" ?
                        <Grid item xs={10} md={3.5} key={index} >
                          <CardSearch
                           
                            nameSearch={user.data.name}
                            bloodType={user.data.blood_type}
                            neighborhood={user.data.neighborhood}
                            sx={{ margin: "10px", p: 2 }}
                          /></Grid>
                             :"" :
                          BloodType === "AB-" && user.data.is_shown === "1" ?
                         user.data.blood_type === "AB-" || user.data.blood_type === "A-" || user.data.blood_type === "B-" || user.data.blood_type === "O-" ?
                          <Grid item xs={10} md={3.5} key={index} >
                            <CardSearch
                              nameSearch={user.data.name}
                              bloodType={user.data.blood_type}
                              neighborhood={user.data.neighborhood}
                              sx={{ margin: "10px", p: 2 }}
                            /></Grid> :"" :

                          user.data.is_shown === "1"  && BloodType === "AB+" ?
                            <Grid item xs={10} md={3.5} key={index} >
                              <CardSearch
                                nameSearch={user.data.name}
                                bloodType={user.data.blood_type}
                                neighborhood={user.data.neighborhood}
                                sx={{ margin: "10px", p: 2 }}
                              /></Grid> : ""


          );
        })
      }
    </Grid>
  );
}


