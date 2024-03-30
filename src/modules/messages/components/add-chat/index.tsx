import { useInterfaceContext } from "@/lib/context/interface-context";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";

const ChatAdd = () => {
  const { showNewChat, handleShowNewChat } = useInterfaceContext();

  const NAMES = [
    "Talan Torff",
    "Jordyn Press",
    "Haylie Schleifer",
    "Kaiya Geidt",
    "Cheyenne Bator",
    "Alfonso Passaquindici Arcand",
    "Lydia Torff",
    "Alfonso Press",
  ];

  return (
    <>
      <AnimatePresence>
        {showNewChat && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-full sm:w-2/5 absolute h-full bg-white right-0 top-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <div className="flex items-center gap-2 ">
                  <h2 className="font-semibold text-xl">New Chat</h2>
                </div>
                <button onClick={handleShowNewChat}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <div className="flex flex-col gap-4 font-semibold">
                {NAMES.map((name, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <input type="checkbox" className="scale-125" />
                    <span>{name}</span>
                  </div>
                ))}
              </div>
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

export default ChatAdd;
