import React from "react";

const StateInput = () => {
  return (
    <div className="flex items-center gap-4">
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="state" className="font-semibold">
          State
        </label>
        <div className="flex items-center gap-5 justify-between">
          <input
            type="text"
            id="state"
            className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
            placeholder="OK"
          />
        </div>
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="zip" className="font-semibold">
          Zip
        </label>
        <div className="flex items-center gap-5 justify-between">
          <input
            type="text"
            id="zip"
            className="w-full px-4 py-3 outline-none border border-neutral-300 bg-light"
            placeholder="73064"
          />
        </div>
      </div>
    </div>
  );
};

export default StateInput;
