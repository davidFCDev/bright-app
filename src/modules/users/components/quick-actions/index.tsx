import Icon from "@/modules/common/icons";
import React from "react";

const QuickActions = () => {
  return (
    <div className="w-full flex flex-col gap-5 bg-terciary py-3 sm:py-5 px-4 sm:px-8">
      <h3 className="font-semibold">Quick Actions</h3>
      <div className="flex items-center justify-center gap-3 sm:gap-6 text-xs font-semibold">
        <button className="flex items-center gap-1 sm:gap-2">
          <Icon svg="/icons/Login.svg" width={16} />
          <span className="text-xs sm:text-sm">Send Log in Request</span>
        </button>
        <button className="flex items-center gap-1 sm:gap-2">
          <Icon svg="/icons/Password.svg" width={16} />
          <span className="text-xs sm:text-sm">Send Password Reset</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
