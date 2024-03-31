import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useInterfaceContext } from "@/lib/context/interface-context";
import InputForm from "@/modules/common/input-form";
import SelectForm from "@/modules/common/select-form";
import InputDate from "@/modules/common/input-date";

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
            className="z-20 w-screen sm:w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
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
            <form className="flex flex-col gap-4 py-5 px-8 text-sm">
              <InputForm
                id="name"
                label="First Name"
                placeholder="Jaxson Geidt"
              />
              <SelectForm
                id="gender"
                label="Gender"
                options={["Male", "Female"]}
              />
              <InputDate id="date" label="Date of Birth" />
              <InputForm id="kk" label="# KK" placeholder="" />
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

export default ChildAdd;
