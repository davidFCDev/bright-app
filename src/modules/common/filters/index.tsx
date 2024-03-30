import Icon from "@/modules/common/icons";
import React from "react";
import OutButton from "../outline-button";

const Filters = () => {
  return (
    <div className="flex items-center gap-3">
      <OutButton
        text="Filter"
        icon={<Icon svg="/icons/Filter.svg" width={16} />}
        props={"font-semibold sm:hidden w-[100px] "}
      />
      <div className="hidden sm:flex items-center gap-3">
        <Icon svg="/icons/Filter.svg" />
        <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
          <option value="All">Status: All</option>
        </select>
        <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
          <option value="All">Date: All</option>
        </select>
      </div>
    </div>
  );
};

export default Filters;
