import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const HistoryList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-start sm:items-center justify-center border border-neutral-300 px-2 sm:px-4 py-2 text-sm w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between w-full">
          <p>06/06/2022, 2:37pm</p>
          <p className="text-base font-semibold">Rayna</p>
          <div className="flex flex-col">
            <p>1052 E State Highway 152</p>
            <p>Mustang, OK 73064</p>
          </div>
          <OutButton
            icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
            text="View Item"
            props={"text-sm font-semibold hidden sm:flex"}
          />
        </div>
        <OutButton
          icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
          text="View Item"
          props={"text-sm font-semibold sm:hidden"}
        />
      </div>
      <div className="flex items-start sm:items-center justify-center border border-neutral-300 px-2 sm:px-4 py-2 text-sm w-full">
        <div className="flex flex-col sm:flex-row items-start sm:items-center sm:justify-between w-full">
          <p>06/06/2022, 2:37pm</p>
          <p className="text-base font-semibold">Rayna</p>
          <div className="flex flex-col">
            <p>1052 E State Highway 152</p>
            <p>Mustang, OK 73064</p>
          </div>
          <OutButton
            icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
            text="View Item"
            props={"text-sm font-semibold hidden sm:flex"}
          />
        </div>
        <OutButton
          icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
          text="View Item"
          props={"text-sm font-semibold sm:hidden"}
        />
      </div>
    </div>
  );
};

export default HistoryList;
