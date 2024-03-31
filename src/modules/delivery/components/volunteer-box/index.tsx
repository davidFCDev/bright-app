import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface DeliveryBoxProps {
  name: string;
  status: string;
  address: string;
  delivery: string;
  mail: string;
  phone: string;
}

const statusStyle = {
  active: "border-primary text-primary bg-terciary",
};

const VolunteerBox = ({
  name,
  status,
  address,
  delivery,
  mail,
  phone,
}: DeliveryBoxProps) => {
  return (
    <div className="w-full flex flex-col bg-white text-black  rounded border border-neutral-300 hover:bg-neutral-100">
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

            <div className="flex flex-col gap-1 items-start justify-between">
              <div className="flex items-center gap-1">
                <p className="text-sm font-semibold">{address}</p>
              </div>
              <p className="text-xs font-semibold">{delivery}</p>
              <p className="text-xs font-semibold flex items-center gap-1">
                <Icon svg="/icons/Mail.svg" width={16} />
                <span className="text-xs">{mail}</span>
              </p>
              <p className="text-xs font-semibold flex items-center gap-1">
                <Icon svg="/icons/Phone.svg" width={16} />
                <span className="text-xs">{phone}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerBox;
