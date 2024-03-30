import Icon from "@/modules/common/icons";
import OutButton from "@/modules/common/outline-button";
import React from "react";

const RequestDate = () => {
  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-1">
          <h2 className="font-semibold">Request Date: 2/13/2024</h2>
          <Icon svg="/icons/Share.svg" />
        </div>
        <p className="text-neutral-700 text-xs font-semibold">
          Assigned to: Cheyenne Septimus
        </p>
      </div>
      <OutButton
        icon={<Icon svg="/icons/Complete.svg" width={16} />}
        text="Mark Request as Complete"
        props={"text-xs font-semibold hidden sm:block"}
      />
    </div>
  );
};

export default RequestDate;
