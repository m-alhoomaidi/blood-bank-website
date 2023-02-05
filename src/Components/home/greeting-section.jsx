import {
  Box,
  Button,
  CardMedia,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import {
  DOCTOR,
  GREETING_VID,
  HEALTH_LOTTIE,
  HEMATOLOGY,
  LOCATION,
  MAP,
  STATISTICAL,
} from "../../constant/media";
import { AnimationOnScroll } from "react-animation-on-scroll";
import "animate.css";
import LottieApp from "../lottie";
import { NumberAnimationIndex } from "../common/number-animation-index";
import { useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
export const GreetingSection = (props) => {
  const navigate = useNavigate();
  return (
    <>
      <NumberAnimationIndex />
      <section id="about">
        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                mt: 12,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box sx={{ mx: 3, mt: -10 }} id="scrolly-section">
                <Typography
                  sx={{
                    color: "red",
                    fontWeight: 800,
                    fontSize: "38px",
                  }}
                >
                  نبض
                </Typography>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: 20,
                    fontWeight: 500,
                    lineHeight: 2,
                  }}
                >
                  نبض هي مبادرة تسعى إلى تقليص فجوة التواصل بين المتبرعين
                  والمحتاجين للدم حتى تصبح عملية التبرع بالدم أسهل.
                </Typography>

                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 2,
                    gap: 2,
                    flexDirection: {
                      xs: "column",
                      md: "row",
                    },
                  }}
                >
                  <CardMedia
                    component="img"
                    sx={{
                      width: "172px",
                      height: "48px",
                      cursor: "pointer",
                    }}
                    src="https://wateenapp.org/Assets/images/google-play.svg"
                  />

                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#3b3970",
                      height: "50px",
                      borderRadius: 3,
                      width: "180px",
                      justifyContent: "center",
                      gap: 2,
                    }}
                    onClick={() => navigate("/search")}
                  >
                    <Typography sx={{ fontSize: 15 }}>
                      البحث عن متبرع
                    </Typography>
                    <SearchIcon sx={{ color: "white" }} />
                  </Button>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                mt: 12,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
              }}
            >
              <LottieApp animationpath={DOCTOR} />
            </Box>
          </Grid>
        </Grid>
      </section>

      <section id="app">
        <Typography
          sx={{
            color: "red",
            fontWeight: 800,
            fontSize: "38px",
            mx: 3,
            mt: 7,
          }}
        >
          حقائق عن نبض
        </Typography>

        <Grid container>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                mt: 12,
                height: "100%",
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  mx: 3,
                  mt: -10,
                  width: "100%",
                }}
              >
                <Box
                  sx={{
                    backgroundImage:
                      "url(https://wateenapp.org/Assets/images/hearts.svg)",
                    // backgroundRepeat: "no-repeat",
                    backgroundSize: "contain",
                    height: "340px",
                    width: "100%",
                    mt: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Typography
                    color="primary"
                    sx={{
                      fontSize: 60,
                      fontWeight: 800,
                      lineHeight: 2,
                    }}
                  >
                    900000
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                width: "100%",
              }}
            >
              <Box>
                <Typography
                  color="primary"
                  sx={{
                    fontSize: 50,
                    fontWeight: 800,
                    lineHeight: 2,
                    mt: 10,
                  }}
                >
                  متبرع
                </Typography>
                <Typography color="primary" sx={{ fontSize: 20 }}>
                  نبض فخور بكل فرد مبادر بالعطاء على عمله الإنساني.
                </Typography>
                <Typography
                  sx={{
                    color: "#34c2bc",
                  }}
                >
                  {`{وَمَنْ أَحْيَاهَا فَكَأنَّمَا أَحْيَا النَّاسَ جَمِيْعَاً}`}
                  <span
                    style={{
                      color: "#2b2a61",
                    }}
                  >
                    {" "}
                    المائدة:٣٢
                  </span>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>

      <section>
        <Grid container sx={{ mt: 10 }}>
          <Grid item xs={0} md={6}>
            <Box>
              <CardMedia
                component="img"
                sx={{}}
                src="https://wateenapp.org/Assets/images/screen_5.png"
              />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                color="secondary"
                sx={{
                  fontSize: 35,
                  fontWeight: 600,
                }}
              >
                التطبيق
              </Typography>
              <Typography color="primary" sx={{ fontSize: 20, mt: 2 }}>
                نبض هو إحدى تطبيقات التبرع في الدم بالجمهورية اليمنية، سواء كنت
                متبرع أو محتاج للدم نبض يوفر لك العديد من المزايا
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 6,
                mt: 4,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <LottieApp animationpath={LOCATION} />
                </Box>
                <Typography color="primary" sx={{ fontWeight: 700 }}>
                  طلب تبرع من مجتمع نبض
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <LottieApp animationpath={MAP} />
                </Box>
                <Typography color="primary" sx={{ fontWeight: 700 }}>
                  خريطة المتبرعين وبنوك الدم القريبة منك
                </Typography>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    width: "60px",
                    height: "60px",
                  }}
                >
                  <LottieApp animationpath={STATISTICAL} />
                </Box>
                <Typography color="primary" sx={{ fontWeight: 700 }}>
                  متابعة إحصائية التبرعات
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </section>
    </>
    // <Box>
    //   <Box
    //     sx={{
    //       position: "relative",
    //     }}
    //   >
    //     <Box>
    //       <video
    //         autoPlay
    //         muted
    //         loop
    //         style={{
    //           width: "100%",
    //         }}
    //       >
    //         <source src={GREETING_VID} type="video/mp4" />
    //       </video>
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: 0,
    //           width: "100%",
    //           height: "99%",
    //           backgroundColor: "gray",
    //           opacity: 0.3,
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       ></Box>
    //       <Box
    //         sx={{
    //           position: "absolute",
    //           top: 0,
    //           width: "100%",
    //           height: "99%",
    //           display: "flex",
    //           justifyContent: "center",
    //           alignItems: "center",
    //         }}
    //       >
    //         {/* <FlexVertical> */}
    //         <Box
    //           sx={{
    //             width: "70%",
    //             display: {
    //               xs: "none",
    //               md: "flex",
    //             },
    //           }}
    //         >
    //           <Typography
    //             sx={{
    //               color: "white",
    //               fontSize: "5vw",
    //               textAlign: "center",
    //             }}
    //           >
    //             {GreetingData.title}
    //           </Typography>
    //         </Box>
    //         {/* </FlexVertical> */}
    //       </Box>
    //     </Box>
    //   </Box>
    // </Box>
  );
};
