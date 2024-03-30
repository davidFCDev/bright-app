import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { useInterfaceContext } from "@/lib/context/interface-context";

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
            className="z-20 w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
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
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <div className="flex items-center gap-3">
                <div className="flex flex-col gap-1 w-full">
                  <label htmlFor="item" className="font-semibold">
                    Item
                  </label>
                  <div className="flex items-center gap-5 justify-between w-full">
                    <select className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light">
                      <option value="1">Select Item</option>
                    </select>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="qty" className="font-semibold">
                    Qty
                  </label>
                  <div className="flex items-center gap-5 justify-between">
                    <input
                      type="text"
                      id="qty"
                      className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                      placeholder=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="from" className="font-semibold">
                  Purchased From
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="text"
                    id="from"
                    className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                    placeholder="Amazon"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="amount" className="font-semibold">
                  Total Amount Spent
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="text"
                    id="amount"
                    className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <label htmlFor="track" className="font-semibold">
                  Tracking #
                </label>
                <div className="flex items-center gap-5 justify-between">
                  <input
                    type="text"
                    id="track"
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

export default ItemAdd;
