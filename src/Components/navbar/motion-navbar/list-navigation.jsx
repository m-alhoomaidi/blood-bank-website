import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./list-item";
const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.09, staggerDirection: -1 },
  },
};
const navItems = [
  {
    id: 1,
    name: "نبذه",
    href: "/#about",
  },
  {
    id: 2,
    name: "التطبيق",
    href: "/#app",
  },
  {
    id: 3,
    name: "ساعدنا",
    href: "/#help-us",
  },
  {
    id: 4,
    name: "تطوع معنا",
    href: "/search",
  },
];
export const Navigation = ({ isOpen }) => (
  <motion.ul
    className="motion-ul"
    variants={variants}
    style={{
      display: !isOpen && "none",
    }}
  >
    {navItems.map((item, index) => (
      <MenuItem i={index} key={index} item={item} />
    ))}
  </motion.ul>
);
