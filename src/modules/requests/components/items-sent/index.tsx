import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";
import ItemsSentTable from "../items-sent-table";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { AnimatePresence, motion } from "framer-motion";

const ItemsSent = () => {
  const { toggleShow, handleToggle, handleShowItemAdd } = useInterfaceContext();

  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(3)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/Sent.svg" />
          <h2 className="font-semibold">Items Sent</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[3] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
        <OutButton
          onClick={() => handleShowItemAdd()}
          text="Add"
          icon={<Icon svg="/icons/AddCircle.svg" width={14} />}
        />
      </div>

      {toggleShow[3] && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <ItemsSentTable />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default ItemsSent;
