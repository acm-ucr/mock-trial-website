"use client";

import { motion } from "framer-motion";

type HeaderProps = {
  title: string;
};

const Header = ({ title }: HeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="bg-mocktrial-yellow pt-2 pb-2"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.15, ease: "easeOut" }}
        className="bg-mocktrial-blue p-4"
      >
        <p className="p-1 text-center text-5xl font-bold text-white">{title}</p>
      </motion.div>
    </motion.div>
  );
};

export default Header;
