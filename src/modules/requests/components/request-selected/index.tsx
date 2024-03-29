import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const RequestSelected = () => {
  return (
    <div className="flex items-center gap-4 text-sm font-semibold">
      <p className="text-neutral-500">3 items selected</p>
      <OutButton text="Select All" />
      <OutButton text="Deselect All" />
      <OutButton
        text="Assign to..."
        icon={<Icon svg="/icons/Users.svg" width={16} />}
      />
      <OutButton
        text="Download Address Labels"
        icon={<Icon svg="/icons/Union.svg" width={16} />}
      />
      <OutButton
        text="Mark as Complete"
        icon={<Icon svg="/icons/Complete.svg" width={16} />}
      />
    </div>
  );
};

export default RequestSelected;
