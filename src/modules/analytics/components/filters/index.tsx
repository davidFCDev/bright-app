import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const Filters = () => {
  return (
    <div className="flex items-center gap-6 text-sm font-semibold">
      <OutButton
        text="Export"
        icon={<Icon svg="/icons/Download.svg" width={16} />}
        props={"text-sm font-semibold hidden sm:flex"}
      />
      <p className="text-neutral-400">Period</p>
      <select className="border border-neutral-300 px-2 py-1">
        <option value="week">Last 12 months</option>
      </select>
    </div>
  );
};

export default Filters;
