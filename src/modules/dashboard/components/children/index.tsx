import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import ChildrenCard from "../children-card";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { AnimatePresence, motion } from "framer-motion";

const Children = () => {
  const { toggleShow, handleToggle, handleShowChildAdd } =
    useInterfaceContext();

  return (
    <div className="flex flex-col gap-2 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(1)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/Children.svg" />
          <h2 className="font-semibold">Children (1)</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[1] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
        <OutButton
          onClick={() => handleShowChildAdd()}
          text="Add"
          icon={<Icon svg="/icons/AddCircle.svg" width={14} />}
        />
      </div>

      {toggleShow[1] && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ChildrenCard />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Children;
