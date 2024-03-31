import Icon from "@/modules/common/icons";
import React from "react";

const Message = ({ number }: any) => {
  return (
    <div className="w-full bg-terciary p-3 sm:p-4 flex items-center gap-2">
      <h3 className="text-neutral-700 font-semibold flex items-center gap-2">
        ⭐ You have {number} new requests! Lorem ipsum dolor sit amet. Go to all
        Requests
        <Icon svg="/icons/ArrowRight.svg" width={16} props="hidden sm:block" />
      </h3>
    </div>
  );
};

export default Message;
