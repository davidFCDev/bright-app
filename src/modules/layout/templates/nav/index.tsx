"use client";

import { AnimatePresence } from "framer-motion";
import { Route } from "@/types";
import Navbar from "../../components/navbar";
import Minibar from "../../components/minibar";

interface RoutesProps {
  routes: Route[];
}

const NavbarTemplate = ({ routes }: RoutesProps) => {
  return (
    <AnimatePresence>
      <div className="hidden sm:block">
        <Navbar routes={routes} />

        <Minibar routes={routes} />
      </div>
    </AnimatePresence>
  );
};

export default NavbarTemplate;
