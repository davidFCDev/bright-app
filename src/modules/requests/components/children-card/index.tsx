import Icon from "@/modules/common/icons";
import React from "react";

const ChildrenCard = () => {
  return (
    <div className="w-full sm:min-w-52 p-5 flex flex-col gap-3 border border-neutral-300 font-semibold">
      <div className="flex justify-between">
        <p className="text-sm sm:text-xs bg-terciary border border-neutral-800 p-1">
          KK #4875782
        </p>
        <Icon svg="/icons/MoreOptions.svg" width={16} props="rotate-90" />
      </div>
      <div className="flex flex-col gap-1">
        <p className="text-lg sm:text-base font-semibold">Rayna</p>
        <p className="text-sm sm:text-xs text-neutral-700">Female</p>
      </div>
      <div className="flex items-center gap-1">
        <Icon svg="/icons/Age.svg" width={16} />
        <span className="text-sm sm:text-xs">2/13/2024 (Newborn)</span>
      </div>
    </div>
  );
};

export default ChildrenCard;
