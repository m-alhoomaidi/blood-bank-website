import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect } from "react";

export const NumberAnimation = () => {
  const count = useMotionValue(0);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    const animation = animate(count, 100, { duration: 10 });

    return animation.stop;
  }, []);

  return <motion.h1>{rounded}</motion.h1>;
};
