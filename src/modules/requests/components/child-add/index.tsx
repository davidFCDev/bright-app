import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useInterfaceContext } from "@/lib/context/interface-context";

const ChildAdd = () => {
  const { showChildAdd, handleShowChildAdd } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showChildAdd && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <div className="flex items-center gap-2 ">
                  <h2 className="font-semibold text-xl">Add Child</h2>
                </div>
                <button onClick={handleShowChildAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">
                  First Name
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                    placeholder="Jaxson Geidt"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">
                  Gender
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <select className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light">
                    <option>Male</option>
                    <option>Female</option>
                  </select>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">
                  Date of Birth
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="date"
                    className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="name" className="font-semibold">
                  # KK
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                    placeholder=""
                  />
                </div>
              </div>
              <hr className="border border-neutral-200 w-full" />
              <div className="w-full flex justify-end">
                <Button text="Save" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ChildAdd;
