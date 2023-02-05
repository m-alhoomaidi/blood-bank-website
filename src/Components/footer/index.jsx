import {
  Box,
  Button,
  CardMedia,
  Grid,
  IconButton,
  Link,
  TextField,
  Typography,
} from "@mui/material";
import { SECONDARY_COLOR } from "../../constant/color";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TwitterIcon from "@mui/icons-material/Twitter";
import TelegramIcon from "@mui/icons-material/Telegram";
import { useState } from "react";

export const SmallFooter = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3b3970",
      }}
    >
      <Grid
        container
        // spacing={2}
        sx={{ py: 6, mt: 2 }}
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
              justifyContent: "center",
            }}
          >
            <CardMedia
              component="img"
              sx={{
                width: "50px",
                height: "50px",
              }}
              src="/logo.png"
            />
            <Typography
              sx={{ color: "#e3e1e8", mt: 1 }}
            >{`كل الحقوق محفوظة @${new Date()
              .toISOString()
              ?.slice(0, 4)}`}</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={2}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton>
              <WhatsAppIcon sx={{ fontSize: 33, color: "#e3e1e8" }} />
            </IconButton>
            <IconButton>
              <FacebookIcon sx={{ fontSize: 33, color: "#e3e1e8" }} />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12} md={5}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography sx={{ color: "#e3e1e8", textAlign: "center" }}>
              باستخدامك هذا الموقع، فإنك توافق على شروط الخدمة و سياسية الخصوصية
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export const Footer = () => {
  const [active, setActive] = useState(1);

  const style = { color: "white", lineHeight: 2, fontSize: 16 };

  const ButBox = ({ title, index }) => {
    return (
      <Box
        sx={{
          border: "1px solid #e3e1e8",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          px: 4,
          py: 1.5,
          borderRadius: "3px",
          backgroundColor: index == active ? "#e3e1e8" : "none",
          cursor: "pointer",
          "&:hover": {
            backgroundColor: "#e3e1e8",
          },
        }}
        onClick={() => setActive(index)}
      >
        <Typography
          color="primary"
          sx={{ color: index !== active && "#fefefe" }}
        >
          {title}
        </Typography>
      </Box>
    );
  };
  return (
    <>
      <section id="help-us">
        <Box
          sx={{
            backgroundColor: "#3b3970",
            mt: 7,
            // height: "100vh",
            px: { xs: 3, md: 10 },
            py: 7,
          }}
        >
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
              <Box sx={{ mt: 4 }}>
                <Typography
                  color="secondary"
                  sx={{
                    fontSize: { xs: 25, md: 30 },
                    fontWeight: "bold",
                  }}
                >
                  ساعدنا
                </Typography>
                <Typography
                  sx={{
                    color: "white",
                    lineHeight: 2,
                    fontSize: 17,
                  }}
                >
                  نرحب بجميع الأفراد والجهات المهتمة بدعم مبادرة نبض، تعاونكم
                  يمكّننا من التقدم نحو بناء مجتمع معطاء
                </Typography>
              </Box>
            </Grid>
          </Grid>

          <Grid container spacing={2}>
            <Grid item md={5} xs={12}>
              <Box sx={{ mt: 10 }}>
                <Box sx={{ mt: 2 }}>
                  <Typography sx={{ ...style }}>الأسم الكامل *</Typography>

                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                  />
                </Box>

                <Box sx={{ mt: 6 }}>
                  <Typography sx={{ ...style }}>البريد الإلكتروني *</Typography>

                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                    type="email"
                  />
                </Box>

                <Box sx={{ mt: 6 }}>
                  <Typography sx={{ ...style }}>رقم الجوال *</Typography>

                  <input
                    style={{
                      width: "100%",
                      height: "40px",
                    }}
                    type="email"
                  />
                </Box>
              </Box>
            </Grid>
            <Grid item xs={0} md={2} />
            <Grid item md={5} xs={12}>
              <Box sx={{ mt: 12 }}>
                <Typography sx={{ ...style }}>كيفية المساعدة *</Typography>
                <Box
                  sx={{ display: "flex", mt: 2, gap: 3, overflow: "hidden" }}
                >
                  <ButBox title="متبرع" index={1} />
                  <ButBox title="داعم" index={2} />
                  <ButBox title="أخرى" index={3} />
                </Box>

                <Box mt={3}>
                  <textarea
                    rows={7}
                    style={{ borderRadius: 2, width: "100%" }}
                  />
                </Box>

                <Box sx={{ mt: 2 }}>
                  <Button
                    color="secondary"
                    variant="contained"
                    sx={{
                      px: 8,
                      borderRadius: 5,
                    }}
                  >
                    إرسال
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
          <SmallFooter />
        </Box>
      </section>
    </>
  );
};
