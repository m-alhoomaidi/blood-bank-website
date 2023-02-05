import React, { useState } from "react";
import {
  GoogleMap,
  Marker,
  useJsApiLoader,
  DirectionsRenderer,
  OverlayView,
  MarkerClusterer,
} from "@react-google-maps/api";
import { nearestLocation } from "../../utils/get-nearest-location";
import { Avatar, Box, Divider, Typography } from "@mui/material";

const containerStyle = {
  width: "100%",
  height: "100vh",
};

let center = {
  lat: 13.973087796181742,
  lng: 44.162869922837544,
};
var symbolThree = {
  path: "M9.53144612,22.005 L9.53144612,13.0552149 L6.44166667,13.0552149 L6.44166667,9.49875 L9.53144612,9.49875 L9.53144612,6.68484375 C9.53144612,5.19972656 9.95946769,4.04680661 10.8155103,3.22608401 C11.6715529,2.4053613 12.808485,1.995 14.2263057,1.995 C15.3766134,1.995 16.3129099,2.04710915 17.0351961,2.15132812 L17.0351961,5.3169726 L15.1090998,5.3169726 C14.3868137,5.3169726 13.8919142,5.47330073 13.6244006,5.78595698 C13.4103902,6.04650407 13.3033846,6.46337874 13.3033846,7.03658198 L13.3033846,9.49875 L16.71418,9.49875 L16.2326559,13.0552149 L13.3033846,13.0552149 L13.3033846,22.005 L9.53144612,22.005 Z",
  strokeColor: "blue",
  strokeWeight: 6,
};
const data = [
  {
    coords: {
      lat: 13.974279144008882,
      lng: 44.16278508375451,
    },
    name: "محمد",
    bloodType: "O+",
    phoneNumber: "771511569",
  },
  {
    coords: {
      lat: 13.95925347982098,
      lng: 44.16640231857082,
    },
    name: "سامي",
    bloodType: "O+",
    phoneNumber: "771511542",
  },
  {
    coords: {
      lat: 13.971609757586048,
      lng: 44.157411483548415,
    },
    name: "خالد",
    bloodType: "O-",
    phoneNumber: "715015696",
  },
  {
    coords: {
      lat: 13.950156735486098,
      lng: 44.1669924226502,
    },
    name: "علي",
    bloodType: "A+",
    phoneNumber: "717015690",
  },
  {
    coords: {
      lat: 13.959390106818676,
      lng: 44.18167133616689,
    },
    name: "سامي",
    bloodType: "B+",
    phoneNumber: "71501569",
  },
  {
    coords: {
      lat: 13.964835321745667,
      lng: 44.193828479571074,
    },
    name: "راشد",
    bloodType: "O+",
    phoneNumber: "715017569",
  },
  {
    coords: {
      lat: 13.98106343411635,
      lng: 44.18574205386784,
    },
    name: "سعيد",
    bloodType: "O-",
    phoneNumber: "715017569",
  },
  {
    coords: {
      lat: 13.974390828998246,
      lng: 44.17589531780745,
    },
    name: "سالم",
    bloodType: "AB-",
    phoneNumber: "715017569",
  },

  {
    coords: {
      lat: 13.953817127862079,
      lng: 44.172464266417265,
    },
    name: "خليل",
    bloodType: "A+",
    phoneNumber: "715017569",
  },
  {
    coords: {
      lat: 13.920863446490008,
      lng: 44.173475415106225,
    },
    name: "أشرف",
    bloodType: "O+",
    phoneNumber: "715017569",
  },
];
var styleArray = [
  {
    featureType: "poi.business",
    stylers: [{ visibility: "off" }],
  },
  {
    featureType: "poi.park",
    stylers: [{ visibility: "on", color: "blue" }],
  },
  {
    featureType: "poi.medical",
    stylers: [{ visibility: "on" }],
  },
];

const options = {
  imagePath:
    "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m", // so you must have m1.png, m2.png, m3.png, m4.png, m5.png and m6.png in that folder
};
function createKey(location) {
  return location.lat + location.lng;
}
function MyComponent(props) {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyBvzLHODduqVIBHvrQJzJlr6A5HhS0QBl4",
  });
  /*global google*/

  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const onLoad = React.useCallback(function callback(map) {
    //TODO -- get current location
    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition((position) => {
    // const bounds = new window.google.maps.LatLngBounds({
    //   lat: 13.973087796181742,
    //   lng: 44.162869922837544,
    // });
    //     map.fitBounds(bounds);
    //     setMap(map);
    //   });
    // } else {
    //   const bounds = new window.google.maps.LatLngBounds(center);
    //   map.fitBounds(bounds);
    //   setMap(map);
    // }
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);

  const getPixelPositionOffset = (offsetWidth, offsetHeight, labelAnchor) => {
    return {
      x: offsetWidth + labelAnchor.x,
      y: offsetHeight + labelAnchor.y,
    };
  };

  return isLoaded ? (
    <div
      style={{
        height: "100vh",
        width: "100%",
      }}
    >
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        options={{
          styles: styleArray,
          zoomControl: false,
          streetViewControl: true,
          mapTypeControl: false,
          fullscreenControl: false,
        }}
        zoom={20}
        onLoad={onLoad}
        onUnmount={onUnmount}
        style={{
          width: "100%",
        }}
      >
        <MarkerClusterer options={options}>
          {(clusterer) => {
            return data.map((item, index) => (
              <>
                <Marker
                  clusterer={clusterer}
                  key={index}
                  position={item.coords}
                  draggable={false}
                  onClick={(e) => {
                    const d = nearestLocation(
                      data[index].coords,
                      data[index + 1].coords
                    );
                    alert(
                      "The space between " +
                        data[index].name +
                        " And " +
                        data[index + 1].name +
                        " = " +
                        d.toString()
                    );
                  }}
                  //
                  // TODO-- location icon
                  // icon={{
                  //   path: google.maps.SymbolPath.CIRCLE,
                  //   scale: 6,
                  //   strokeColor: "#919eec",
                  //   fillColor: "#FFFFFF",
                  //   fillOpacity: 1,
                  // }}
                />
                <OverlayView
                  key={index * 100 + 1}
                  position={item.coords}
                  mapPaneName={OverlayView.OVERLAY_MOUSE_TARGET}
                  getPixelPositionOffset={(x, y) =>
                    getPixelPositionOffset(x, y, { x: -30, y: -35 })
                  }
                >
                  <Box
                    sx={{
                      background: `#203254`,
                      padding: "7px 12px",
                      fontSize: "11px",
                      color: `white`,
                      borderRadius: "4px",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Typography sx={{ fontSize: "8px" }}>
                        {item?.name}
                      </Typography>
                      <Typography sx={{ fontSize: "8px" }}>
                        {item?.bloodType}
                      </Typography>
                      {/* TODO-- Donor Avatar */}
                      {/* <Avatar
                                src="/images/profile.png"
                                sx={{
                                  height: "30px",
                                  width: "30px",
                                }}
                              >
                                {item?.name}
                              </Avatar> */}
                    </Box>
                    <Box
                      sx={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <Typography sx={{ fontSize: "8px" }}>
                        {item?.phoneNumber}
                      </Typography>
                    </Box>
                  </Box>
                </OverlayView>
              </>
            ));
          }}
        </MarkerClusterer>
      </GoogleMap>
    </div>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
