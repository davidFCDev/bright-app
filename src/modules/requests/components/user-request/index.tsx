import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface UserRequestProps {
  name: string;
  status: string;
  child: number;
  volunteer: string;
  date: string;
}

const statusStyle = {
  new: "border-primary text-primary bg-terciary",
  completed: "border-green-500 text-green-500 bg-green-100",
  assigned: "text-brown border-lightBrown",
};

const UserBoxRequest = ({
  name,
  status,
  child,
  volunteer,
  date,
}: UserRequestProps) => {
  const { handleShowAssignRequest } = useInterfaceContext();

  return (
    <div onClick={handleShowAssignRequest} className="w-full flex items-start gap-4 bg-white hover:bg-neutral-200 text-black px-3 py-3 rounded border border-neutral-300">
      <input type="checkbox" className="scale-150 mt-4" />
      <div className="flex flex-col gap-4 text-black w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">{name}</p>
            <div
              className={`${
                (status === "Assigned" && statusStyle.assigned) ||
                (status === "New" && statusStyle.new) ||
                (status === "Completed" && statusStyle.completed)
              } px-2 py-1 rounded text-xs border`}
            >
              {status}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Icon svg="/icons/Children.svg" width={14} />
              <p className="text-xs">
                {child}
                {child > 1 ? " Children" : "Child"}
              </p>
            </div>
            <span className="text-sm">{date}</span>
          </div>
        </div>
        <Line />
        <div className="flex items-center justify-between">
          <p className="font-semibold text-xs">Volunteer</p>
          <p className="flex items-center gap-1 font-semibold text-sm">
            <Icon svg="/icons/Complete.svg" width={14} />
            {volunteer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserBoxRequest;
