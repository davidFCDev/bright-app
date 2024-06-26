import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useInterfaceContext } from "@/lib/context/interface-context";
import AddressInput from "@/modules/common/input-adress";
import CityInput from "@/modules/common/input-city";
import NameImput from "@/modules/common/input-name";
import MailInput from "@/modules/common/input-email";
import PhoneInput from "@/modules/common/input-phone";
import StateInput from "@/modules/common/input-state";
import InputForm from "@/modules/common/input-form";

const DeliveryAddPerson = () => {
  const { showDeliveryVolunteers, handleShowDeliveryVolunteersAdd } =
    useInterfaceContext();

  return (
    <>
      {showDeliveryVolunteers && (
        <AnimatePresence>
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
                  <h2 className="font-semibold text-lg sm:text-xl">
                    New Delivery Volunteer
                  </h2>

                  <div className="flex items-center border border-primary text-primary bg-terciary px-2 py-1">
                    <span className="text-xs">Active</span>
                    <MdArrowDropDown />
                  </div>
                </div>
                <button onClick={handleShowDeliveryVolunteersAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-4 py-5 px-8 text-sm">
              <InputForm id="name" label="Name" placeholder="Kianna Bator" />
              <InputForm
                id="mail"
                label="Mail"
                placeholder="kiannab@gmail.com"
              />
              <div className="bg-terciary p-4 text-neutral-800">
                <p>
                  Once you submit this form, volunteer will be notified and
                  welcomed via email.
                </p>
              </div>
              <InputForm
                id="phone"
                label="Phone"
                placeholder="(206) 342-8631"
              />
              <InputForm
                id="address"
                label="Address"
                placeholder="1052 E State Highw3ay 152"
              />
              <InputForm id="city" label="City" placeholder="Mustang" />
              <div className="flex items-center gap-3 w-full">
                <InputForm id="state" label="State" placeholder="OK" />
                <InputForm id="zip" label="Zip" placeholder="73064" />
              </div>
              <hr className="border border-neutral-200 w-full" />
              <div className="w-full flex justify-end">
                <Button text="Save" props={"w-full sm:w-fit"} />
              </div>
            </form>
          </motion.div>
        </AnimatePresence>
      )}
    </>
  );
};

export default DeliveryAddPerson;
