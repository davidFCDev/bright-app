"use client";

import { AnimatePresence } from "framer-motion";
import Navbar from "../../components/navbar";
import TopBar from "../../components/topbar";

const NavbarTemplate = () => {
  return (
    <AnimatePresence>
      <Navbar />
      <TopBar />
    </AnimatePresence>
  );
};

export default NavbarTemplate;
