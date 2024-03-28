import { useUsersContext } from "@/lib/context/users-context";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";

interface OptionsButtonProps {
  status: string;
}

const OptionsButton = ({
  status,
}: OptionsButtonProps) => {

  const { showEdit, handleShowEdit } = useUsersContext();
  
  return (
    <button className="w-48 z-20 flex flex-col items-start p-6 gap-3 bg-white border border-neutral-300 absolute right-12 top-0 rounded-[2px] font-semibold text-neutral-700 text-sm">
      <button onClick={handleShowEdit} className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Edit.svg" width={18} />
        <span>Edit</span>
      </button>
      <Line />
      {status === "Active" && (
        <button className="flex gap-2 items-center hover:scale-105">
          <Icon svg="/icons/EyeClosed.svg" width={18} />
          <span>Deactivate</span>
        </button>
      )}
      {status === "Inactive" && (
        <button className="flex gap-2 items-center hover:scale-105">
          <Icon svg="/icons/EyeOpen.svg" width={18} />
          <span>Activate</span>
        </button>
      )}
      <Line />
      <button className="flex gap-2 items-center hover:scale-105">
        <Icon svg="/icons/Delete.svg" width={18} />
        <span>Delete</span>
      </button>
    </button>
  );
};

export default OptionsButton;
