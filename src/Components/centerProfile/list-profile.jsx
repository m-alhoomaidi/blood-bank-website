import * as React from 'react';
import Box from '@mui/material/Box';
import { useEffect, useState } from "react";
import { Card,Grid, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import BloodtypeIcon from '@mui/icons-material/Bloodtype';
import ListItem from '@mui/material/ListItem';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import {PersonalInfoProfile} from './center-info-profile';
import BloodForm from './bloodForm';
function ProfileNavigation() {
    const[active ,setActive]=useState(true);
    const list = () => (
        <List >
                    <ListItem >
                        <ListItemButton
                            sx={{
                                backgroundColor: active ?"#3b3970" : "#fafafa",
                                borderRadius: 3,
                                '& .css-1fjo4ru-MuiListItemIcon-root':{color: !active ? "black" : "white"},
                                color: active ?"white" : "black",
                                '&:hover': {color:"black",
                                '& .css-1fjo4ru-MuiListItemIcon-root':{color:"black"}}

                            }} onClick={()=>{setActive(true);}}>
                            <ListItemIcon sx={{ fontSize: 10 }}>
                            <PermIdentityIcon  />
                            </ListItemIcon>
                        <ListItemText primary="معلومات الحساب"
                                sx={{
                                    textAlign:  'right' ,
                                    padding: '0 10px 0 0'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
                    <ListItem>
                        <ListItemButton
                        onClick={()=>{setActive(false);}}

                        sx={{
                            backgroundColor: !active ?"#3b3970" : "#fafafa",
                                borderRadius: 3,
                                '& .css-1fjo4ru-MuiListItemIcon-root':{color:active ?"black" : "white"},
                                color: !active ?"white" : "black",
                                '&:hover': {color:"black",
                                '& .css-1fjo4ru-MuiListItemIcon-root':{color:"black"}}

                            
                        }}>
                            <ListItemIcon sx={{ fontSize: 10 }}>
                            <BloodtypeIcon  />
                            </ListItemIcon>
                        <ListItemText primary="معلومات فصائل الدم"
                                sx={{
                                    textAlign:  'right' ,
                                    padding: '0 10px 0 0'
                                }}
                            />
                        </ListItemButton>
                    </ListItem>
        </List>
    )
    return (
        <Box mt={10} p={2}>
            <Grid container  flexDirection="row" spacing={3}>
                <Grid item xs={12} md={3.5}>
            <Card sx={{
                minHeight :{xs:"none",md:"92vh"},
                backgroundColor: "white",
                alignItems: 'center',
                borderRadius: 1,
            }}>
                
                {list()}
            </Card>
            </Grid>
            {active ?<Grid item xs={12} md={8} sx={{mt:{xs:5,md:0}}}> 
            <PersonalInfoProfile/>
            </Grid>: <Grid item xs={12} md={8.5} > 
            <BloodForm/>
            </Grid>}
            </Grid>
        </Box>
    );
}
export default ProfileNavigation;