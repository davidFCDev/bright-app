import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface UserFormProps {
  name: string;
  status: string;
  mail: string;
  date: string;
  ready?: string;
}

const statusStyle = {
  used: "border-primary text-primary bg-terciary",
  sent: "text-brown border-lightBrown",
};

const UserBoxExtraForm = ({ name, status, mail, ready, date }: UserFormProps) => {
  return (
    <div className="w-full flex items-start gap-4 bg-white text-black px-3 py-3 rounded border border-neutral-300 hover:bg-neutral-100">
      <input type="checkbox" className="scale-150 mt-4" />
      <div className="flex flex-col gap-4 text-black w-full">
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-between">
            <p className="font-semibold text-lg">{name}</p>
            <div
              className={`${
                (status === "Used" && statusStyle.used) ||
                (status === "Sent" && statusStyle.sent)
              } px-2 py-1 rounded text-xs border`}
            >
              {status}
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1">
              <Icon svg="/icons/Children.svg" width={14} />
              <p className="text-xs">{mail}</p>
            </div>
            <span className="text-sm">{date}</span>
          </div>
        </div>
        {ready && (
          <>
            <Line />
            <div className="flex items-center justify-end">
              <p className="flex items-center gap-1 font-bold text-xs">
                {ready}
                <Icon svg="/icons/ArrowRight.svg" width={14} />
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default UserBoxExtraForm;
