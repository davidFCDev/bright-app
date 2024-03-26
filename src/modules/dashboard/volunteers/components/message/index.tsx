import Icon from "@/modules/common/icons";
import React from "react";

const Message = () => {
  return (
    <div className="w-full bg-terciary p-4 flex items-center gap-2">
      <h3 className="text-neutral-700">
        ⭐ You have 2 new requests! Lorem ipsum dolor sit amet.{" "}
        <a href="#" className="underline">Go to all Requests</a>
      </h3>
      <Icon svg="/icons/ArrowRight.svg" width={16} />
    </div>
  );
};

export default Message;
