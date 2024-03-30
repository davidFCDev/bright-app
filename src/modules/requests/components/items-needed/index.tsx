import Icon from "@/modules/common/icons";
import React, { useState } from "react";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { AnimatePresence, motion } from "framer-motion";
import ItemsList from "../item-list";

const ItemsNeeded = () => {
  const { toggleShow, handleToggle } = useInterfaceContext();

  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(2)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/Items.svg" />
          <h2 className="font-semibold">Items Needed (6)</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[2] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
      </div>

      {toggleShow[2] && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <div className="flex flex-col gap-3 w-full">
              <ItemsList />

              <div className="w-full bg-terciary flex flex-col gap-1 text-sm px-5 py-3 ">
                <p className="font-semibold">Additional notes:</p>
                <p>Lorem ipsum dolor sit amet.</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ItemsNeeded;
