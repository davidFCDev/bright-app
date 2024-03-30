import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const HistoryList = () => {
  return (
    <div className="flex flex-col gap-3 w-full">
      <div className="flex items-center justify-between border border-neutral-300 px-4 py-2 text-sm">
        <p>06/06/2022, 2:37pm</p>
        <p className="text-base font-semibold">Rayna</p>
        <div className="flex flex-col">
          <p>1052 E State Highway 152</p>
          <p>Mustang, OK 73064</p>
        </div>
        <OutButton
          icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
          text="View Item"
          props={"text-sm font-semibold"}
        />
      </div>
      <div className="flex items-center justify-between border border-neutral-300 px-4 py-2 text-sm">
        <p>06/06/2022, 2:37pm</p>
        <p className="text-base font-semibold">Rayna</p>
        <div className="flex flex-col">
          <p>1052 E State Highway 152</p>
          <p>Mustang, OK 73064</p>
        </div>
        <OutButton
          icon={<Icon svg="/icons/ArrowRight.svg" width={16} />}
          text="View Item"
          props={"text-sm font-semibold"}
        />
      </div>
    </div>
  );
};

export default HistoryList;
