import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface UserFormProps {
  name: string;
  status: string;
  mail: string;
  type: string;
  phone: string;
}

const statusStyle = {
  active: "border-primary text-primary bg-terciary",
};

const UserBoxUsers = ({ name, status, mail, type, phone }: UserFormProps) => {
  const { handleShowUserEdit } = useInterfaceContext();
  return (
    <div onClick={handleShowUserEdit} className="w-full flex flex-col bg-white text-black  rounded border border-neutral-300 hover:bg-neutral-200">
      <div className="flex items-start w-full px-3 py-3 gap-4">
        <input type="checkbox" className="scale-150 mt-4" />
        <div className="flex flex-col gap-4 text-black w-full">
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <p className="font-semibold text-lg">{name}</p>
              <div
                className={`${
                  status === "Active" && statusStyle.active
                } px-2 py-1 rounded text-xs border`}
              >
                {status}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <p className="text-sm">{mail}</p>
              </div>
              <span className="text-xs font-semibold">{type}</span>
            </div>

            <p className="text-sm">{phone}</p>
          </div>
        </div>
      </div>

      {type === "Admin" && (
        <div className="flex flex-col">
          <Line />
          <div className="flex">
            <div className="flex flex-col gap-2 items-end border font-semibold border-neutral-300 bg-neutral-50 w-[25%] p-4">
              <div
                className={`${
                  status === "Active" && statusStyle.active
                } px-2 py-1 rounded text-xs border`}
              >
                {status}
              </div>
              <span className="text-sm">{type}</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-sky-800 hover:bg-sky-700 text-white border border-neutral-300 w-[25%] p-4 gap-3">
              <Icon svg="/icons/Edit.svg" />
              <span className="text-xs">Edit</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-sky-800 hover:bg-sky-700 text-white border border-neutral-300 w-[25%] p-4 gap-3">
              <Icon svg="/icons/EyeClosed.svg" />
              <span className="text-xs">Deactivate</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-red-600 hover:bg-red-500 text-white border border-neutral-300 w-[25%] p-4 gap-3">
              <Icon svg="/icons/Edit.svg" />
              <span className="text-xs">Delete</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBoxUsers;
