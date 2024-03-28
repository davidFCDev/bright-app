import Icon from "@/modules/common/icons";
import React from "react";
import { IoMdArrowDropdown } from "react-icons/io";

const Details = ({ delivery }: any) => {
    
  return (
    <div className="flex flex-col gap-6 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2 font-semibold">
          <h2 className="text-2xl">{delivery?.organization}</h2>
          <div className="flex items-center px-4 py-2 bg-secondary text-white rounde-[1px] text-base">
            {delivery?.location}
            <IoMdArrowDropdown className="text-white" />
          </div>
        </div>
        <button>
          <Icon svg="/icons/Edit.svg" width={18} />
        </button>
      </div>

      <div className="flex items-start gap-32">
        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-semibold">
            <Icon svg="/icons/Delivery.svg" width={16} />
            Address
          </p>
          <div className="flex flex-col">
            <p className="text-neutral-800 text-sm">{delivery?.address[0]}</p>
            <p className="text-neutral-800 text-sm">{delivery?.address[1]}</p>
          </div>
          <div className="flex items-center w-full justify-between">
            <span className="border border-neutral-200 px-4 py-1 text-xs">
              {delivery?.lat}
            </span>
            <span className="border border-neutral-200 px-4 py-1 text-xs">
              {delivery?.long}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-semibold">
            <Icon svg="/icons/Distance.svg" width={16} />
            Max Distance
          </p>
          <p className="text-neutral-800 text-sm">
            {delivery?.max_distance} miles
          </p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="flex items-center gap-2 font-semibold">
            <Icon svg="/icons/Zips.svg" width={16} />
            Zips
          </p>
          <p className="text-neutral-800 text-sm">
            {delivery?.zips[0]}, {delivery?.zips[1]}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Details;
