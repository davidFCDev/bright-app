import React from "react";
import UserBox from "../../../common/user";
import { REQUEST_LIST } from "@/constants";
import Line from "@/modules/common/line";
import Icon from "@/modules/common/icons";
import Search from "@/modules/common/search";
import { AnimatePresence, motion } from "framer-motion";
import RequestList from "../request-list";
import { useInterfaceContext } from "@/lib/context/interface-context";

const LinkRequest = () => {
  const { handleShowLinkRequest, showLinkRequest } = useInterfaceContext();
  return (
    <>
      <AnimatePresence>
        {showLinkRequest && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute z-30 flex flex-col sm:right-20 sm:bottom-16 w-full sm:w-[60%] h-full sm:h-[40%] bg-white overflow-y-scroll border border-neutral-300 shadow shadow-neutral-300"
          >
            <div className="flex items-end justify-between w-full py-5 px-8">
              <div className="flex items-center gap-2 ">
                <h2 className="font-semibold text-xl">Link Request</h2>
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden sm:block">
                  <Search />
                </div>
                <button onClick={handleShowLinkRequest}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <div className="sm:hidden px-8 pb-5">
              <Search />
            </div>
            <Line />

            <RequestList props={"grid grid-cols-1 sm:grid-cols-2 p-5 gap-2"} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default LinkRequest;
