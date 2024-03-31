import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import React from "react";
import HistoryList from "../history-list";
import { AnimatePresence, motion } from "framer-motion";

const RequestsHistory = () => {
  const { toggleShow, handleToggle } = useInterfaceContext();

  return (
    <div className="flex flex-col gap-3 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(4)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/History.svg" />
          <h2 className="font-semibold">Requests History</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[4] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
      </div>

      {toggleShow[4] && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <HistoryList />
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default RequestsHistory;
