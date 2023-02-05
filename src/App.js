import { ThemeProvider } from '@mui/material/styles';
import { theme } from './theme'
import ScrollToTop from "react-scroll-to-top";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import { HomePage, SignIn } from "./pages";
import Search from "./pages/search";
import ProfileUser from "./pages/profile";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import NavBar from './Components/navbar'
import SignUp from './pages/signup';
import { Footer, SmallFooter } from './Components/footer';
import { AuthConsumer, AuthProvider } from './context/auth-context';
import { AuthGuard } from './context/auth-gaurd';
import { db, auth } from './utils/firebase';
import MapPage from './pages/map';
import { Box } from '@mui/material';
import Aboutus from './pages/aboutus';
import SignUpCenter from './pages/signupcenter';
import CenterProfiles from './pages/centerprofile';
import Add from './Local/FunctionApi';
import { NotificationProvider } from './context/notification-context';
import './style/global-style.css'
import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from 'react';
const App = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [path, setPath] = useState(window.location.pathname)
  useEffect(() => {
    setPath(window.location.pathname)
  }, [window.location.pathname])

  return (
    <ThemeProvider theme={theme}>
      <AuthProvider>
        <NotificationProvider>
          <BrowserRouter>
            <AuthGuard>
              <Box sx={{ backgroundColor: "#fafafa", minHeight: '100vh', pt: 2 }}>
                <motion.div className="progress-bar" style={{ scaleX }} />
                <NavBar />
                <Box
                  px={{ md: 5, xs: 2 }}
                >
                  <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route path='/login' element={<SignIn />} />
                    <Route path='/search' element={<Search />} />
                    <Route path='/profile' element={<ProfileUser />} />
                    <Route path='/signup' element={<SignUp />} />
                    <Route path='/map' element={<MapPage />} />
                    <Route path='/aboutus' element={<Aboutus />} />
                    <Route path='/SignUpCenter' element={<SignUpCenter />} />
                    <Route path='/centerprofile' element={<CenterProfiles />} />
                    <Route path='/FunctionApi' element={<Add />} />
                  </Routes>
                </Box>
                {
                  path === '/' ?
                    <Footer /> :
                    <SmallFooter />

                }

              </Box>
              <ScrollToTop
                smooth
                component={<ExpandLessIcon color='primary' />} />
            </AuthGuard>
          </BrowserRouter>
        </NotificationProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}
export default App;