import { useInterfaceContext } from "@/lib/context/interface-context";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import AgencyInput from "@/modules/common/input-agency";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const AgencyAdd = () => {
  const { showAgencyAdd, handleShowAgencyAdd } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showAgencyAdd && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-full sm:w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <div className="flex items-center gap-2 ">
                  <h2 className="font-semibold text-xl">New Agency</h2>
                </div>
                <button onClick={handleShowAgencyAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <AgencyInput />
              <hr className="border border-neutral-200 w-full" />
              <div className="w-full flex justify-end">
                <Button text="Save" props={"w-full sm:w-fit"} />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AgencyAdd;
