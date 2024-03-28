import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import EmailInput from "@/modules/common/email-input";
import NameImput from "@/modules/common/name-input";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import PhoneInput from "@/modules/common/phone-input";
import UserInput from "@/modules/common/user-input";
import SwitchInput from "@/modules/common/switch";
import QuickActions from "../quick-actions";
import { useUsersContext } from "@/lib/context/users-context";

const UserEdit = ({ user }: any) => {
  const { showEdit, handleShowEdit } = useUsersContext();

  return (
    <>
      <AnimatePresence>
        {showEdit && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-2/5 absolute min-h-screen bg-white right-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <div className="flex items-center gap-2 ">
                  <h2 className="font-semibold text-xl">{user}</h2>
                  <div className="flex items-center border border-primary text-primary bg-terciary px-2 py-1">
                    <span className="text-xs">Active</span>
                    <MdArrowDropDown />
                  </div>
                </div>
                <button onClick={handleShowEdit}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <QuickActions />
              <NameImput showIcon={false} />
              <EmailInput />
              <PhoneInput />
              <UserInput />
              <div className="flex items-center gap-2">
                <SwitchInput />
                <p className="font-semibold text-neutral-800">
                  Notify via email about new requests
                </p>
              </div>
              <hr className="border border-neutral-200 w-full" />
              <div className="w-full flex justify-end">
                <Button text="Save Changes and Close" />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserEdit;
