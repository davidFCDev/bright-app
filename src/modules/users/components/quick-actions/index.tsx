import Icon from "@/modules/common/icons";
import React from "react";

const QuickActions = () => {
  return (
    <div className="w-full flex flex-col gap-5 bg-terciary py-5 px-8">
      <h3 className="font-semibold">Quick Actions</h3>
      <div className="flex items-center justify-center gap-6 text-xs font-semibold">
        <button className="flex items-center gap-2">
          <Icon svg="/icons/Login.svg" width={16} />
          <span>Send Log in Request</span>
        </button>
        <button className="flex items-center gap-2">
          <Icon svg="/icons/Password.svg" width={16} />
          <span>Send Password Reset</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;
