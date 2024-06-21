import React, { useState } from "react";
import ToggleButton from "./toggleButton/ToggleButton";
import { motion } from "framer-motion";

const Sidebar = ({ navLinks }) => {
  const [open, setOpen] = useState(false);
  const variants = {
    open: {
      clipPath: "circle(1200px at 90% 50px)", // Changed coordinates
      transition: {
        type: "spring",
        stiffness: 20,
      },
    },
    closed: {
      clipPath: "circle(0px at 90% 50px)", // Changed coordinates
      transition: {
        delay: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 70,
      },
    },
  };

  const variant = {
    open: {
      transition: {
        staggerChildren: 0.1,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
    },
    closed: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <motion.div
      className="lg:hidden flex flex-col items-center justify-center "
      animate={open ? "open" : "closed"}
    >
      <motion.div
        className="fixed -top-5 right-0 bottom-0 w-[200px] "
        variants={variants}
      >
        <motion.div
          className="absolute w-full h-full flex flex-col items-center justify-center gap-5 bg-slate-700"
          variants={variant}
        >
          {navLinks.map((item) => (
            <motion.a
              className="text-gray-100 text-xl hover:text-[#d8a31c]"
              href={item.href}
              key={item}
              variants={itemVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {item.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
