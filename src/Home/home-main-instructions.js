import { Box } from '@mui/material';
import { Instructions } from './home-instructions';


export const MainInstruction = (props) => {
    const { children } = props;
    return (<Box sx={{ display: "flex" }}>
        <Instructions></Instructions>
        <Instructions></Instructions>
        <Instructions></Instructions>
    </Box>)
}