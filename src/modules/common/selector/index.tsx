import React from "react";

const Selector = ({text, label}: any) => {
  return (
    <div className="flex items-center justify-start sm:justify-center text-sm gap-4">
      <p className="text-neutral-500">{text}</p>
      <select className="border border-neutral-300 px-2 py-1 focus:border-neutral-400">
        <option value="1" className="font-semibold">
          {label}
        </option>
      </select>
    </div>
  );
};

export default Selector;
