import TextField from "@mui/material/TextField";
const Steps1 = () => {
  return (
    <>
          <TextField
            name="fullName"
            id="full-name"
            margin="normal"
            required
            fullWidth
            autoComplete="fullname"
            autoFocus
            label=" الاسم الرباعي"
            variant="outlined"
          />
          <TextField
            name="userEmail"
            id="userEmail"
            margin="normal"
            required
            fullWidth
            autoComplete="email"
            label="البريد الالكتروني"
            variant="outlined"
            type="email"
          />
        
          <TextField
            name="phoneNumber"
            id="Phone-Number"
            margin="normal"
            required="phone"
            fullWidth
            label="رقم الهاتف "
            variant="outlined"
          />
        
          <TextField
            name="password"
            id="password"
            margin="normal"
            required
            fullWidth
            label=" كلمة السر"
            type="password"
            variant="outlined"
          />
    </>
  );
};
export default Steps1;
