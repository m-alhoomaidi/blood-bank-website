import React from "react";
import Lottie from "react-lottie";

const LottieApp = ({ animationpath }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    path: animationpath,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div onClick={() => null}>
      <Lottie options={defaultOptions} />
    </div>
  );
};
export default LottieApp;
