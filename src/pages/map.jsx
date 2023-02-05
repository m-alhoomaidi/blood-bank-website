import { useEffect, useState } from "react";
import MapView from "../Components/map/MapView";
import { Box } from "@mui/material";

const MapPage = () => {
  const [globalData, setGlobalData] = useState();
  useEffect(() => {
    const userLo = JSON.parse(localStorage.getItem("userLocation"));
    const centerLo = JSON.parse(localStorage.getItem("centerLocation"));
    let global = [...userLo, ...centerLo];
    global = global?.filter((item) => item?.data?.lat != "");
    global = global?.map((item) => {
      const data = item?.data;
      return {
        ...data,
      };
    });
    setGlobalData(global);
    console.log(global);
  }, []);
  return (
    <>
      {globalData?.length > 0 && (
        <Box
          sx={{
            mx: {
              xs: 0,
              md: -4,
            },
          }}
        >
          <MapView globalData={globalData} />
        </Box>
      )}
    </>
  );
};

export default MapPage;
