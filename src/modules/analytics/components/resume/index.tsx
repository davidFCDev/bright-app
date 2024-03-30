import Icon from "@/modules/common/icons";
import React from "react";

const Resume = () => {
  return (
    <div className="flex flex-col sm:flex-row w-full">
      <div className="flex gap-4 items-center justify-between border border-terciary p-4 sm:p-8 w-full">
        <div className="flex items-center gap-2">
          <Icon svg="/icons/Requests.svg" width={26} />
          <div className="flex flex-col items-start">
            <h2 className="hidden sm:block font-semibold text-2xl">41</h2>
            <p className="text-neutral-500 text-sm">Requests Received</p>
          </div>
        </div>
        <h2 className="sm:hidden font-semibold text-2xl">41</h2>
      </div>
      <div className="flex gap-4 items-center justify-between border border-terciary bg-terciary p-4 sm:p-8 w-full">
        <div className="flex items-center gap-2">
          <Icon svg="/icons/Children.svg" width={26} />
          <div className="flex flex-col items-start">
            <h2 className="hidden sm:block font-semibold text-2xl">72</h2>
            <p className="text-neutral-500 text-sm">Children Served</p>
          </div>
        </div>
        <h2 className="sm:hidden font-semibold text-2xl">72</h2>
      </div>
      <div className="flex gap-4 items-center justify-between border border-terciary p-4 sm:p-8 w-full">
        <div className="flex items-center gap-2">
          <Icon svg="/icons/Delivery.svg" width={26} />
          <div className="flex flex-col items-start">
            <h2 className="hidden sm:block font-semibold text-2xl">8129</h2>
            <p className="text-neutral-500 text-sm">Items Sent</p>
          </div>
        </div>
        <h2 className="sm:hidden font-semibold text-2xl">8129</h2>
      </div>
    </div>
  );
};

export default Resume;
