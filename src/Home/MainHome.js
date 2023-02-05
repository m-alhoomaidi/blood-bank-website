import { Box,Button,Typography} from '@mui/material';
import { About } from './home-about-section';
import { HeaderSearchSection } from './home-header-search-section';
import { MainInstruction } from './home-main-instructions';
function MainHome() {
   return (
      <Box>
      <HeaderSearchSection></HeaderSearchSection>
     <About></About>
      <MainInstruction></MainInstruction>
      </Box>
  );
}

export default MainHome;