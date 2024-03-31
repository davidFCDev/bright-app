import { useNavContext } from "@/lib/context/nav-context";
import Icon from "@/modules/common/icons";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Routes from "../routes";

const TopBar = () => {
  const { showMenu, handleShow } = useNavContext();
  return (
    <nav className="sm:hidden z-40 flex flex-col w-full fixed top-0 bg-white">
      <div className="h-16 flex items-center justify-between px-4 py-3 border-b border-neutral-300">
        {showMenu ? (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-2"
          >
            <h3 className="font-semibold text-lg">Robert Miller</h3>
            <p className="text-xs px-2 py-1 border border-secondary text-secondary bg-terciary">
              Admin
            </p>
          </motion.div>
        ) : (
          <Image src="/logo-sm.png" alt="logo" width={50} height={50} />
        )}
        <div className="flex items-center gap-4">
          <Icon svg="/icons/Chat.svg" width={30} />
          <button onClick={handleShow}>
            <Icon svg="/icons/Hamburger.svg" width={30} />
          </button>
        </div>
      </div>

      {showMenu && (
        <motion.div
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 100 }}
          transition={{ duration: 0.5 }}
          className="w-full absolute h-screen top-[60px] bg-white"
        >
          <Routes />
        </motion.div>
      )}
    </nav>
  );
};

export default TopBar;
