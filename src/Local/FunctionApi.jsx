import React, { useState, useEffect } from 'react'
import { Button } from "@mui/material";
import { getToken } from "firebase/messaging";
import { messaging } from "../utils/firebase";

 
const Add =()=>{

    async function requestPermissions (){
        await Notification.requestPermission().then((permission)=>{
          if(permission === 'granted'){
            getToken(messaging,{vapidKey:'BBn3zGcKMynrgirvOIsFXTHoTHKNW-iX3FWefaw9zUVbRygfIzYSQqHqJabWsNcg5v-oYG2E1tDBsh42WR7RNzQ'}).then((token)=>{
             console.log(token);
            });
          } else if(permission === 'denied') 
          {
           alert("rrrrrrrrrrrrr")
       
          }
         
      
         });
        }
        useEffect(()=>{
          requestPermissions();
      
        },[]);
      
    
const Handled =()=>{
    const token ="";
    const message = 'Your receipt is ready for review and confirmation!';

  const payload = {
    token,
    notification: {
      title: 'Expense Tracker: Your expense has been processed',
      body: message,
    }
  };

  messaging().send(payload).then((response) => {
    // Response is a message ID string.
    console.log('Successfully sent message: ', response);
  }).catch((error) => {
    console.log('error: ', error);
  }); 


}
    return(
        <>
 

        <Button sx={{mt:"80px"}}>Send</Button>
        </>    
   
    );  
}; 
export default Add;