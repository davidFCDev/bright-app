"use client";
import { useContext } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import Image from "next/image";
import Routes from "../../components/routes";
import { Route } from "@/types";
import User from "../../components/user";
import { NavContext } from "@/lib/context/nav-context";

interface RoutesProps {
  routes: Route[];
}

const NavbarTemplate = ({ routes }: RoutesProps) => {
  const navContext = useContext(NavContext);

  if (!navContext) {
    throw new Error("useNavContext must be used within a NavProvider");
  }

  const { showMenu, handleShow } = navContext;

  return (
    <>
      <AnimatePresence>
        {showMenu && (
          <motion.nav
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="w-fit min-h-screen flex flex-col gap-20 justify-between text-neutral-800 border-r border-neutral-300"
          >
            <div className="flex flex-col">
              <div className="border-b border-neutral-300">
                <div className="p-10">
                  <Image src="/logo.png" alt="logo" width={200} height={200} />
                </div>
              </div>
              <div className="px-3 py-6">
                <Routes routes={routes} />
              </div>
            </div>

            <div className="flex flex-col p-3 gap-3 font-semibold">
              <button
                className="flex items-center justify-start gap-2 "
                onClick={handleShow}
              >
                <div className="border border-neutral-600 rounded p-[3px]">
                  <MdKeyboardDoubleArrowLeft />
                </div>
                <span className="text-sm text-neutral-900">Hide Menu</span>
              </button>

              <User />
            </div>
          </motion.nav>
        )}

        {!showMenu && (
          <motion.aside
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 1 }}
            className="w-fit min-h-screen flex flex-col gap-20 justify-between text-neutral-800 border-r border-neutral-300"
          >
            <div className="flex flex-col">
              <div className="border-b border-neutral-300 flex justify-center items-center">
                <div className="px-3 py-10">
                  <Image src="/logo-sm.png" alt="logo" width={40} height={40} />
                </div>
              </div>
              <div className="px-3 py-6">
                <Routes routes={routes} />
              </div>
            </div>

            <div className="flex flex-col p-5 gap-4 font-semibold items-start">
              <button onClick={handleShow}>
                <div className="border border-neutral-600 rounded text-xl p-[2px]">
                  <MdKeyboardDoubleArrowRight />
                </div>
              </button>

              <User />
            </div>
          </motion.aside>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarTemplate;
