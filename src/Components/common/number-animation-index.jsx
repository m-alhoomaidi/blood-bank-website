import { useState } from "react";
import { Refresh } from "./refresh";
import { NumberAnimation } from "./number-animation";
import { Box } from "@mui/material";

export const NumberAnimationIndex = () => {
  const [count, setCount] = useState(0);

  return (
    <Box>
      <Refresh onClick={() => setCount(count + 1)} />
      {/* <NumberAnimation /> */}
    </Box>
  );
};
