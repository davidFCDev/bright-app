import Icon from "@/modules/common/icons";
import React from "react";

const NameImput = () => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="name2" className="font-semibold">
        Name
      </label>
      <div className="flex items-center gap-5 justify-between">
        <input
          type="text"
          id="name2"
          className="w-[400px] px-4 py-2 outline-none border border-neutral-300 bg-light"
          placeholder="Jaxson Geidt"
        />
        <Icon svg="/icons/Minus.svg" color="red" />
      </div>
    </div>
  );
};

export default NameImput;
