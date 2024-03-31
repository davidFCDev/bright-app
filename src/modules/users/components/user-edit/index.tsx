import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import { MdArrowDropDown } from "react-icons/md";
import SwitchInput from "@/modules/common/switch";
import QuickActions from "../quick-actions";
import { useInterfaceContext } from "@/lib/context/interface-context";
import InputForm from "@/modules/common/input-form";
import SelectForm from "@/modules/common/select-form";

const UserEdit = () => {
  const { showUserEdit, handleShowUserEdit } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showUserEdit && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.5 }}
            className="z-20 w-full sm:w-2/5 absolute h-full bg-white right-0 border-l border-neutral-300"
          >
            <div className="flex items-end justify-between border-b border-neutral-300 w-full">
              <div className="flex items-end justify-between w-full py-5 px-8">
                <div className="flex items-center gap-2 ">
                  <h2 className="font-semibold text-xl">Jaxson Geidt</h2>
                  <div className="flex items-center border border-primary text-primary bg-terciary px-2 py-1">
                    <span className="text-xs">Active</span>
                    <MdArrowDropDown />
                  </div>
                </div>
                <button onClick={handleShowUserEdit}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-4 py-5 px-8 text-sm">
              <QuickActions />
              <InputForm id="name" label="Name" placeholder="Jaxson Geidt" />
              <InputForm
                id="mail"
                label="Mail"
                placeholder="jaxson.geidt@webmail.com"
              />
              <InputForm
                id="phone"
                label="Phone"
                placeholder="(206) 342-8631"
              />
              <SelectForm
                id="user"
                label="User Type"
                options={["Admin", "User"]}
              />
              <div className="flex items-center gap-2">
                <SwitchInput />
                <p className="font-semibold text-neutral-800">
                  Notify via email about new requests
                </p>
              </div>
              <hr className="border border-neutral-200 w-full" />
              <div className="w-full flex justify-end">
                <Button
                  text="Save Changes and Close"
                  props={"w-full sm:w-fit"}
                />
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default UserEdit;
