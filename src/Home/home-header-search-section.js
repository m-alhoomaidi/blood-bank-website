import { Box, Button, Typography } from '@mui/material';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import backgroundHomeImage from '../Images/blood-donor.jpg';


export const HeaderSearchSection=(props)=>{
const{children}=props;
return (<Box sx={{width:"100%",height:"500px",backgroundImage: `url(${backgroundHomeImage})`,backgroundSize:"cover",backgroundRepeat:"no-repeat",display:"flex",justifyContent:"center",alignItems:"center"}}>
<Box sx={{dispaly:"flex",justifyContent:"center",alignItems:"center"}}>
<Typography variant='h3'>قربة دم قد تنقذ حياة</Typography>
<Box sx={{display:"flex",justifyContent:"center",alignItems:"center"}}>
<Button variant='contained'sx={{backgroundColor:"#c1262e"}} startIcon={<PersonSearchIcon sx={{marginLeft: "8px"}} />}> البحث عن متبرع </Button>
</Box>
</Box>
</Box>)
}

