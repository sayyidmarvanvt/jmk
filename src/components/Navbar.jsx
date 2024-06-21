import React from "react";
import Sidebar from "./sidebar/Sidebar";
import { motion } from "framer-motion";

const Navbar = () => {
  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "About Us", href: "#about-us" },
    { name: "Our Services", href: "#services" },
    { name: "Gallery", href: "#gallery" },
    { name: "Contact us", href: "#contact" },
  ];

  const variants = {
    initial: {
      x: -100,
      opacity: 0,
    },
    animate: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.1,
      },
    },
  };

  return (
    <motion.nav className="bg-slate-500 p-5 fixed w-full z-10">
      <Sidebar navLinks={navLinks} />
      <motion.div
        initial="initial"
        animate="animate"
        variants={variants}
        className="mx-auto max-w-6xl flex justify-center lg:justify-normal items-center"
      >
        <motion.div
          variants={variants}
          className="flex flex-col gap-4 leading-[10px] items-center text-slate-200"
        >
          <a
            href="#hero"
            className="flex items-center font-bold text-3xl leading-[10px]"
          >
            SMART
            <span className="ms-2 text-[#d8a31c]">HOST</span>
          </a>
          <p className="text-xs">property network</p>
        </motion.div>
        <motion.div
          variants={variants}
          className="hidden lg:flex gap-4  w-full justify-evenly"
        >
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="text-gray-100 text-md  hover:text-[#d8a31c]"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
