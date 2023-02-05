import { Box, Typography } from "@mui/material";
import { FlexCenter } from "../common/flex-center";
import { FlexVertical } from "../common/flex-vertical";

export const MedicalInstructionsCard = ({ title, icon, description }) => {
  return (
    <FlexVertical>
      <FlexCenter>{icon}</FlexCenter>
      <FlexCenter>
        <Typography sx={{ color: "white" }}>{title}</Typography>
      </FlexCenter>
      <FlexCenter>
        <Typography sx={{ color: "white" }}>{description}</Typography>
      </FlexCenter>
    </FlexVertical>
  );
};
