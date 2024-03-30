import Icon from "@/modules/common/icons";
import { RequestList } from "@/types";
import React from "react";

const UserBox = ({ name, status, child, date }: RequestList) => {
  return (
    <div className="bg-white hover:bg-gray-200 hover:cursor-pointer flex flex-col gap-2 text-black px-3 py-3 rounded border border-neutral-200">
      <div className="flex items-center justify-between">
        <p className="font-semibold">{name}</p>
        <div
          className={`${
            status === "New"
              ? "border-primary text-primary bg-terciary"
              : "text-brown border-lightBrown"
          } px-3 py-1 text-xs border`}
        >
          {status}
        </div>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Icon svg="/icons/Children.svg" width={14} />
          <p className="text-xs">
            {child} <span>{child == "1" ? "Child" : "Children"}</span>
          </p>
        </div>
        <span className="text-xs">{date}</span>
      </div>
    </div>
  );
};

export default UserBox;
