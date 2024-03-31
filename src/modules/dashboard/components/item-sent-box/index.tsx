import Icon from "@/modules/common/icons";
import React from "react";

const ItemSentBox = () => {
  return (
    <div className="w-full flex items-start justify-between border border-neutral-300 p-4">
      <div className="flex flex-col gap-3">
        <div className="text-xs flex items-center gap-2">
          <p className="font-bold text-green-500 bg-green-200 border border-green-500 px-2 py-1">
            Delivered
          </p>
          <p className="flex items-center gap-1">
            <span className="font-semibold">Tracking:</span> 4598...{" "}
            <Icon svg="/icons/copy.svg" width={16} />
          </p>
        </div>
        <div className="flex flex-col gap-1 text-xs">
          <p>02/13/2023, 09:24am</p>
          <div className="flex items-center gap-1">
            <p className="font-semibold">Bottles</p>
            <p>10</p>
            <p>$19.90</p>
            <p>Amazon</p>
          </div>
        </div>
      </div>
      <Icon svg="/icons/MoreOptions.svg" width={20} props="rotate-90" />
    </div>
  );
};

export default ItemSentBox;
