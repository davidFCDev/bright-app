import React from "react";
import Icon from "../icons";

const CancelButton = () => {
  return (
    <button className="flex items-center gap-2 bg-white shadow shadow-neutral-400 absolute pl-3 pr-10 py-3 right-10 bottom-3 rounded-[1px] font-semibold">
      <Icon svg="/icons/Close.svg" width={16} /> Cancel Request
    </button>
  );
};

export default CancelButton;
