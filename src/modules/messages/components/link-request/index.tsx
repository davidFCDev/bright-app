import React from "react";
import User from "../user";
import { REQUEST_LIST } from "@/constants";
import Line from "@/modules/common/line";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import { AnimatePresence, motion } from "framer-motion";
import RequestList from "../request-list";

const LinkRequest = () => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute z-30 flex flex-col right-20 top-0 w-[60%] h-[50%] bg-white overflow-y-scroll border border-neutral-300 shadow shadow-neutral-300"
        >
          <div className="flex items-end justify-between w-full py-5 px-8">
            <div className="flex items-center gap-2 ">
              <h2 className="font-semibold text-xl">Link Request</h2>
            </div>
            <div className="flex items-center gap-4">
              <Search />
              <button>
                <Icon svg="/icons/Close.svg" />
              </button>
            </div>
          </div>
          <Line />

          <RequestList props={"grid grid-cols-2 p-5 gap-2"} />
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export default LinkRequest;
