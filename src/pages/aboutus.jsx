import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { CardMedia } from "@mui/material";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
const Aboutus = (props) => {
  return (
    <>
    <Grid container component="main" sx={{ dir: "ltr" }}>
      <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign:"center",
              height: "100%",
              padding:"20px",
              margin:"0 70px",
            }}
          >
            <Typography
            variant="h4"
            sx={{
              color:"black",
            }}
            >
                من نحن
            </Typography>
            <Typography
            sx={{
                textAlign: "justify",
                color:"#685f5f"
            }}
            >
                هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة لأنه مازال نصاً بديلاً ومؤقتاً.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box
            sx={{
              textAlign:"center",
              height: "100%",
              padding:"5px",
              margin:"0 70px", 
            }}
          >
            <FormatQuoteIcon
            sx={{
                fontSize:"40px"
            }}
            />
            <Typography
            sx={{
                color:"#685f5f",
                textAlign: "justify",
            }}
            >
                احنا هنا سىشتئاؤئاءؤنئاءترائءتنؤائنمؤائتاؤنئؤتؤيت
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}
        sx={{
          height:"430px",
          width:"100%"
        }}
        >
        <CardMedia
            component="img"
            image="/images/us.jpg"

            sx={{
              objectFit: "contain",
              height:"100%"
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box
            sx={{
              textAlign:"center",
              padding:"5px",
              margin:"0 70px",
            }}
          >
            <Typography
             variant="h4"
             sx={{
               color:"black",
             }}
            >
                . Your major does not prevent you being a human
            </Typography>
            <Typography
            sx={{
                color:"#685f5f",
                textAlign: "center",
            }}
            >
               قد ربما يكون سبب الحياة ، كود !!
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Aboutus;
