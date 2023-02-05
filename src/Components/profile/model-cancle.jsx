import  React,{useEffect,useState} from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CloseIcon from '@mui/icons-material/Close';
import  Divider  from '@mui/material/Divider';
import { IconButton,Card,CardHeader,Grid,Alert,Container,Modal } from '@mui/material';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../../utils/firebase';
import { AlertSnackBar } from '../common/alert-snackbar';

const style = {
  position: 'absolute',
  top: '50%',
  width:{xs:"320px",md:"450px"},
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 25,
  p: 2,
  borderRadius:'10px',
  px:3,
};   
const id = localStorage.getItem("uid");
export const ModelCancle = ({opens,Hand,displayed,IsShowning}) =>{
  const HideUser =  async () =>{
   const isShown = "0";
        const userDoc = doc (db,"donors",id);
    updateDoc(userDoc ,{ is_shown : isShown}).then((response) =>{
      displayed(false);
      IsShowning("0");
      
    });
  };
    return(
        <div> 
        <Modal
        open={opens}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
            <Box sx={style}>
             <Box sx={{
                       display:"flex" ,
                       justifyContent:"space-between",
                       flexDirection:"row",
                       "& .css-i4bv87-MuiSvgIcon-root":{
                       fill:"red"}
                    }}>
                  <Typography id="modal-modal-title"  >
                      الغاء تنشيط الحساب
                  </Typography> 
                  <IconButton  sx={{marginTop:"-10px"}} onClick={Hand}><CloseIcon/></IconButton> </Box>
                  <Divider 
                       sx={{
                margin:"20px 0px 20px 0px",
                width:"100%"
            }}/>
              <Box 
                sx={{
                display:"flex",
                justifyContent:"center",
                '& .css-1oq6h0e ':{justifyContent:"centre"}}}>
                 <Typography >
                هل أنت متأكد من إلغاء تنشيط حسابك؟
                  </Typography>
            </Box>
            <Box 
                sx={{
                display:"flex",
                '& .css-1oq6h0e ':{justifyContent:"centre"},justifyContent:"center",margin:"10px"}}>
                <Button variant="contained"
                 sx={{
                    margin:"20px",
                    background:"gainsboro",
                    width:"150px",
                    "&:hover":{background:"darkgray"}}} onClick={()=>{Hand()}}> إلغاء
                </Button> 
                <Button color="error" variant="contained" 
                    sx={{
                      margin:"20px",
                      width:"150px"
                }} onClick={() => {HideUser();}} >نعم
                </Button>
            </Box>
                  </Box>
            </Modal>
        </div>
    );
}
export const CardSucces = ({displayed,Hand,IsShowning})=>{
  const [showTost, setShowTost] = useState(false);
  const [tost, setTost] = useState({
    tostMsg: "لم يتم تنشيط حسابك! أعد المحاولة",
    tostType: "error",
});

  const ShowUser =  async () =>{
    const Shown = "1";
         const userDoc = doc (db,"donors",id);
     updateDoc(userDoc ,{ is_shown : Shown}).then((response) =>{
      displayed(true);
      IsShowning("1");
      setShowTost(true);
      setTost({
          tostMsg: "لقد تم تنشيط حسابك بنجاح",
          tostType: "success",
      });
     });
   };
     return (
      <Box>
             <Card sx={{marginTop:"20px",p:1}}>
                    <CardHeader 
                         title="تنشيط عملية التبرع" 
                         sx={{marginRight:"70px"}}/>
                       <Grid container spacing={2} justifyContent="center" >
                              <Grid item xs={10} md={10}  
                                sx={{
                                  "& .css-1pxa9xg-MuiAlert-message":
                                    { color: "green" }
                                }} >
                             <Alert 
                                  icon={false} 
                                  severity="success">تفعيل تنشيط حسابك ! <br/> لكي تظهر بياناتك عند البحث عن المتبرع  </Alert>  
                              </Grid>
                        <Grid item xs={10} md={10}>
                               <Button 
                                   fullWidth 
                                   variant="contained" 
                                   color="success" 
                                   onClick={() => {
                                                   Hand();
                                                   ShowUser();
                                                  }}
                                   >
                                 تنشيط عملية التبرع</Button>    
                        </Grid> 
            </Grid>
            </Card>
            <AlertSnackBar
                   open={showTost}
                   handleClose={() => setShowTost(false)}
                   message={tost.tostMsg}
                   type={tost.tostType}/> 
            </Box>

     );

}