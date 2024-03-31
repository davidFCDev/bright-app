import Icon from "@/modules/common/icons";
import React from "react";
import Note from "../note";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { AnimatePresence, motion } from "framer-motion";

const Notes = () => {
  const { toggleShow, handleToggle } = useInterfaceContext();
  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(6)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/Notes.svg" />
          <h2 className="font-semibold">Notes</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[6] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
      </div>

      {toggleShow[6] && (
        <AnimatePresence>
          <motion.div className="flex flex-col gap-3 w-full">
            <div className="w-full justify-between flex items-center border border-neutral-300 bg-neutral-50 p-4">
              <input
                type="text"
                className="w-full outline-none border-none"
                placeholder="Type note here..."
              />
              <button className="font-semibold text-primary min-w-28">
                Save Note
              </button>
            </div>

            <Note />
            <Note />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Notes;
