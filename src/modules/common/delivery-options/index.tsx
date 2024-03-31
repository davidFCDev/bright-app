import { useInterfaceContext } from "@/lib/context/interface-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface DeliveryOptionsProps {
  status: string;
}

const DeliveryOptions = ({ status }: DeliveryOptionsProps) => {
  const { handleShowUserEdit: handleShowEdit } = useInterfaceContext();

  return (
    <button className="w-72 z-20 flex flex-col items-start p-6 gap-3 bg-white border border-neutral-300 absolute right-12 top-0 rounded-[2px] font-semibold text-neutral-700 text-sm">
      <button
        onClick={handleShowEdit}
        className="flex gap-2 items-center hover:scale-105"
      >
        <Icon svg="/icons/Edit.svg" width={18} />
        <span>Edit Details</span>
      </button>
      <Line />
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Delivery.svg" width={18} />
        <span>Manage Delivery Volunteers</span>
      </button>
      <Line />
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/EyeClosed.svg" width={18} />
        <span>Deactivate</span>
      </button>
      <Line />
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Delete.svg" width={18} />
        <span>Delete</span>
      </button>
    </button>
  );
};

export default DeliveryOptions;
