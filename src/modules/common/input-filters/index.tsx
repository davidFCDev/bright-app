import React from "react";
import OutButton from "../outline-button";
import Icon from "../icons";

const InputFilters = ({ filters }: any) => {
  return (
    <div className="flex items-center gap-3">
      <OutButton
        text="Filter"
        icon={<Icon svg="/icons/Filter.svg" width={16} />}
        props={"font-semibold sm:hidden w-[100px] "}
      />
      <div className="hidden sm:flex items-center gap-3">
        <Icon svg="/icons/Filter.svg" />
        {filters &&
          filters.map((filter: any, index: number) => (
            <select
              key={index}
              className="border border-gray-300 rounded-[2px] px-3 py-1 text-xs font-semibold"
            >
              <option value="All">{filter}</option>
            </select>
          ))}
      </div>
    </div>
  );
};

export default InputFilters;
