import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

const names = [
  "Randy Saris",
  "Angel Mango",
  "Jakob Rhiel Madsen",
  "Jakob Rhiel Madsen",
  "Jakob Rhiel Madsen",
  "Jakob Rhiel Madsen",
  "Jakob Rhiel Madsen",
  "Jakob Rhiel Madsen",
];

const ResponsiveAssignRequest = () => {
  const { handleShowAssignRequest, showAssignRequest } = useInterfaceContext();

  return (
    <>
      {showAssignRequest && (
        <div
          onClick={handleShowAssignRequest}
          className="z-20 flex flex-col absolute w-full h-full bg-white left-0"
        >
          <div className="flex items-center justify-between w-full p-5">
            <h3 className="text-xl font-bold">Assign Request</h3>
            <Icon svg="/icons/Close.svg" />
          </div>
          <Line />
          {names.map((name, index) => (
            <div
              key={index}
              className="hover:bg-neutral-200 hover:cursor-pointer"
            >
              <h3 className="text-lg p-5 font-semibold">{name}</h3>
              <Line />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default ResponsiveAssignRequest;
