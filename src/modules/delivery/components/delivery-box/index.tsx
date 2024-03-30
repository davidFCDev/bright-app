import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import { useRouter } from "next/navigation";
import React from "react";

interface DeliveryBoxProps {
  name: string;
  status: string;
  address: string;
  delivery: string;
  volunteer: number;
}

const statusStyle = {
  active: "border-primary text-primary bg-terciary",
};

const DeliveryBox = ({
  name,
  status,
  address,
  delivery,
  volunteer,
}: DeliveryBoxProps) => {
  const router = useRouter();

  const handleShowDetails = (id: number) => {
    router.push(`/menu/delivery/1`);
  };

  return (
    <div
      onClick={() => handleShowDetails(1)}
      className="w-full flex flex-col bg-white text-black  rounded border border-neutral-300 hover:bg-neutral-200"
    >
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
              <span className="text-xs font-semibold">{delivery}</span>
              <p className="text-sm font-semibold flex items-center gap-1">
                <Icon svg="/icons/Volunteers.svg" />
                <span>{volunteer}</span>
                <span>{volunteer > 1 ? "Volunteers" : "Volunteer"}</span>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col">
        <Line />
        <div className="flex">
          <div className="flex flex-col items-center justify-center bg-sky-800 hover:bg-sky-700 text-white border border-neutral-300 w-[25%] p-4 gap-3">
            <Icon svg="/icons/Edit.svg" />
            <span className="text-xs">Edit</span>
          </div>
          <div className="flex flex-col items-center justify-center bg-sky-800 hover:bg-sky-700 text-white border border-neutral-300 w-[25%] p-4 gap-3">
            <Icon svg="/icons/Delivery.svg" />
            <span className="text-xs">Manage</span>
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
    </div>
  );
};

export default DeliveryBox;
