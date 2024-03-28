import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

const AgencyOptions = () => {
  return (
    <button className="w-48 z-20 flex flex-col items-start p-6 gap-3 bg-white border border-neutral-300 absolute -right-5 top-10 rounded-[2px] font-semibold text-neutral-700 text-sm">
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Edit.svg" width={18} />
        <span>Edit</span>
      </button>
      <Line />

      <Line />
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Delete.svg" width={18} />
        <span>Delete</span>
      </button>
    </button>
  );
};

export default AgencyOptions;
