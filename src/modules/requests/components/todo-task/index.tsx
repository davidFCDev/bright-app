import Icon from "@/modules/common/icons";
import React from "react";

const TodoTask = () => {
  return (
    <div className="w-1/4 flex flex-col gap-5 bg-terciary p-5 font-semibold">
      <h3>To do:</h3>
      <ul className="flex flex-col gap-6 px-5 pb-5 text-xs">
        <li className="flex items-center gap-2">
          <Icon svg="/icons/Complete.svg" width={16} />
          <span>Confirm shipping address</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon svg="/icons/Complete.svg" width={16} />
          <span>Confirm Email</span>
        </li>
        <li className="flex items-center gap-2">
          <Icon svg="/icons/Complete.svg" width={16} />
          <span>Verify with Caseworker</span>
        </li>
      </ul>
    </div>
  );
};

export default TodoTask;
