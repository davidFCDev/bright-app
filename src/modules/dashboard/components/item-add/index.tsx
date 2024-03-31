import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useInterfaceContext } from "@/lib/context/interface-context";
import SelectForm from "@/modules/common/select-form";
import InputForm from "@/modules/common/input-form";

const ItemAdd = () => {
  const { showItemAdd, handleShowItemAdd } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showItemAdd && (
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
                  <h2 className="font-semibold text-xl">Item Sent</h2>
                </div>
                <button onClick={handleShowItemAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-4 py-5 px-8 text-sm w-full">
              <div className="flex items-center gap-3 ">
                <SelectForm
                  id="item"
                  label="Item"
                  options={["Item1", "Item2"]}
                />
                <InputForm id="qty" label="Qty" placeholder="" />
              </div>
              <InputForm
                id="from"
                label="Purchased From"
                placeholder="Amazon"
              />
              <InputForm id="spent" label="Total Amount Spent" placeholder="" />
              <InputForm id="track" label="Tracking #" placeholder="" />

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

export default ItemAdd;
