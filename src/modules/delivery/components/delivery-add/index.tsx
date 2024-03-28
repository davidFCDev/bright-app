import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useInterfaceContext } from "@/lib/context/interface-context";
import LocationInput from "@/modules/common/input-location";
import OrganizationInput from "@/modules/common/input-organization";
import AddressInput from "@/modules/common/input-adress";
import CityInput from "@/modules/common/input-city";
import DeliveryInput from "@/modules/common/input-delivery";

const DeliveryAdd = () => {
  const { showAdd, handleShowAdd } = useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showAdd && (
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
                  <h2 className="font-semibold text-xl">
                    New Delivery Location
                  </h2>
                  <div className="flex items-center border border-primary text-primary bg-terciary px-2 py-1">
                    <span className="text-xs">Active</span>
                    <MdArrowDropDown />
                  </div>
                </div>
                <button onClick={handleShowAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-5 py-5 px-8 text-sm">
              <OrganizationInput />
              <LocationInput />
              <AddressInput />
              <CityInput />
              <DeliveryInput />
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

export default DeliveryAdd;
