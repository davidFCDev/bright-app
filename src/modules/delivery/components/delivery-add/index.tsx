import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import { MdArrowDropDown } from "react-icons/md";
import { useInterfaceContext } from "@/lib/context/interface-context";
import InputForm from "@/modules/common/input-form";

const DeliveryAdd = () => {
  const { showDeliveryLocations, handleShowDeliveryLocationsAdd } =
    useInterfaceContext();

  return (
    <>
      <AnimatePresence>
        {showDeliveryLocations && (
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
                  <h2 className="font-semibold text-xl">
                    New Delivery Location
                  </h2>
                  <div className="flex items-center border border-primary text-primary bg-terciary px-2 py-1">
                    <span className="text-xs">Active</span>
                    <MdArrowDropDown />
                  </div>
                </div>
                <button onClick={handleShowDeliveryLocationsAdd}>
                  <Icon svg="/icons/Close.svg" />
                </button>
              </div>
            </div>
            <form className="flex flex-col gap-4 py-5 px-8 text-sm">
              <InputForm
                id="organization"
                label="Organization"
                placeholder="Life Church"
              />
              <InputForm id="location" label="Location" placeholder="Mustang" />
              <InputForm
                id="address"
                label="Address"
                placeholder="1052 E State Highway 152"
              />
              <InputForm id="city" label="City" placeholder="Mustang" />
              <div className="flex items-center gap-3 w-full">
                <InputForm id="state" label="State" placeholder="OK" />
                <InputForm id="zip" label="Zip" placeholder="73064" />
              </div>
              <div className="flex items-center gap-3 w-full">
                <InputForm id="lat" label="Lat" placeholder="35.38888265" />
                <InputForm id="long" label="Long" placeholder="35.38888265" />
              </div>
              <InputForm id="distance" label="Max Distance" placeholder="" />
              <InputForm id="zips" label="Allow Zips" placeholder="73064" />
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

export default DeliveryAdd;
