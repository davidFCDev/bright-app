import Icon from "@/modules/common/icons";
import React from "react";

const Resume = () => {
  return (
    <div className="flex w-full">
      <div className="flex gap-4 items-center border border-terciary p-8 w-full">
        <Icon svg="/icons/Requests.svg" width={26} />
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-2xl">41</h2>
          <p className="text-neutral-500 text-sm">Requests Received</p>
        </div>
      </div>
      <div className="flex gap-4 items-center border border-terciary bg-terciary p-8 w-full">
        <Icon svg="/icons/Children.svg" width={26} />
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-2xl">72</h2>
          <p className="text-neutral-500 text-sm">Children Served</p>
        </div>
      </div>
      <div className="flex gap-4 items-center border border-terciary p-8 w-full">
        <Icon svg="/icons/Delivery.svg" width={26} />
        <div className="flex flex-col items-start">
          <h2 className="font-semibold text-2xl">8129</h2>
          <p className="text-neutral-500 text-sm">Items Sent</p>
        </div>
      </div>
    </div>
  );
};

export default Resume;
