import Icon from "@/modules/common/icons";
import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import AcceptedVolunteer from "../accepted-volunteer";
import DeliveryVolunteerList from "../delivery-volunteer-list";
import { useInterfaceContext } from "@/lib/context/interface-context";
import { AnimatePresence, motion } from "framer-motion";

const Delivery = () => {
  const [accepted, setAccepted] = useState(false);
  const { toggleShow, handleToggle } = useInterfaceContext();

  return (
    <div className="flex flex-col gap-4 w-full items-start">
      <div className="flex items-center justify-between w-full">
        <button
          onClick={() => handleToggle(5)}
          className="flex items-center gap-2"
        >
          <Icon svg="/icons/Delivery.svg" />
          <h2 className="font-semibold">Delivery</h2>
          <Icon
            svg="/icons/DropDown.svg"
            props={`${toggleShow[5] ? "rotate-180" : ""}`}
            width={16}
          />
        </button>
        {toggleShow[5] && (
          <>
            {accepted ? (
              <div className="flex items-center gap-1 font-semibold text-xs border border-green-600 text-green-600 bg-terciary px-2 py-1">
                <FaCircleCheck />
                Accepted by Volunteer
              </div>
            ) : (
              <div className="font-semibold text-xs border border-primary text-primary bg-terciary px-2 py-1">
                Delivery Request Sent
              </div>
            )}
          </>
        )}
      </div>

      {toggleShow[5] && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* TODO: MANAGE THE LOGIC */}

            {/* <div className="w-full flex justify-center items-center py-4">
        <p className="text-base font-semibold text-neutral-600">
          Request has been sent to the relevant delivery volunteers. Wait for
          them to answer.
        </p>
      </div> */}

            {accepted ? <AcceptedVolunteer /> : <DeliveryVolunteerList />}
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
};

export default Delivery;
