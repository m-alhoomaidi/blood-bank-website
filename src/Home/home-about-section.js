import { Box, Button, Typography } from '@mui/material';
import aboutSectionImage from '../Images/fh-pr-image-blood.jpg';


export const About=(props)=>{
const{children}=props;
return (<Box sx={{padding:"6px 16px",display:"flex",flexDirection:"column",flexWrap:"wrap",justifyContent:"center",width:"97%",marginTop:"5px",marginBottom:"30px",height:"250px"}}>
<Box sx={{width:"49%",padding:"0 5px",color:"#282A35"}}>
   <Typography variant='h4' sx={{textAlign:"center"}}>عن الموقع </Typography>
   <Typography>الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع الدم الموقع  </Typography>
</Box>
<Box sx={{width:"49%",overflow:"hidden"}}>
 <img src={aboutSectionImage} style={{height: "263px", width: "493px"}}></img>
</Box>
</Box>)
}
