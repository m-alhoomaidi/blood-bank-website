
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

  const top100Films1 = [
    {label: 'Ibb'},
    { label: 'Taiz' },
    { label: 'Aden' },
    { label: 'Sana`a' },
    { label: 'Theamar'},
    { label: 'Marib' },
    { label: 'Hudidah'},
    { label: 'Al-Mokala'},
  ];
const top100Films = [
  { label: 'A+'},
  { label: 'B+' },
  { label: 'AB+' },
  { label: 'O+' },
  { label: 'A-'},
  { label: 'B-' },
  { label: 'AB-'},
  { label: 'O-'},
];
const Step2 = () => {
    return (
      <>
       <Autocomplete
         name="typeBlood"
         id="ckeckboxes-tags-demo"
         margin="normal"
         marginTop="60px"
         required
         fullWidth 
         options={top100Films}
         disableCloseOnSelect  
         disableClearable
         
         variant="outlined"
         renderInput={(params) => <TextField {...params} label="فصيلة دمك ؟" />}
       />          
       <TextField
         name="city"
         id="ckeckboxes-tags-demo"
         margin="normal"
         required
         fullWidth 
         options={top100Films1}
         disableCloseOnSelect       
         disableClearable
         label="المحافظة"
         variant="outlined"
       />
       <TextField
         name="directorate"
         id="ckeckboxes-tags-demo"
         margin="normal"
         required
         fullWidth 
         options={top100Films1}
         disableCloseOnSelect       
         disableClearable
         label="المديـريـة"
         variant="outlined"
       />
       <TextField
         name="TheNeighborhood"
         id="first-name"
         margin="normal"
         required
         fullWidth 
         variant="outlined"
         label="أدخل إسم المنطقة"
       />  
       </>
    );
  };
  export default Step2;
  