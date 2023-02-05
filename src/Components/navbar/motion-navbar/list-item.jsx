import * as React from "react";
import { motion } from "framer-motion";
import { Link, Typography } from "@mui/material";
import { Container } from "@mui/system";
import { SECONDARY_COLOR } from "../../../constant/color";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

export const MenuItem = ({ i, item }) => {
  return (
    <motion.li
      className="motion-li"
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      style={{
        padding: 2,
      }}
    >
      <Link
        key={item.name}
        href={item.href}
        sx={{
          textDecoration: "none",
          color: "gray",
          width: "80%",
          borderBottom: "1px solid gray",
          p: 1,
          transition: "0.5s",
        }}
      >
        <Container fixed>
          <Typography align="center" color="primary">
            {item.name}
          </Typography>
        </Container>
      </Link>
    </motion.li>
  );
};
