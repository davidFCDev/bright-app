import Icon from "@/modules/common/icons";
import React from "react";

const FormFilters = () => {
  return (
    <div className="flex items-center gap-3">
      <Icon svg="/icons/Filter.svg" />
      <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
        <option value="All">Status: All</option>
      </select>
      <select className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold">
        <option value="All">Date: All</option>
      </select>
    </div>
  );
};

export default FormFilters;