import Icon from "@/modules/common/icons";
import React from "react";

const Message = ({ number }: any) => {
  return (
    <div className="w-full bg-terciary p-4 flex items-center gap-2">
      <h3 className="text-neutral-700 font-semibold flex items-center gap-2">
        ⭐ You have {number} new requests! Lorem ipsum dolor sit amet.{" "}
        <a href="#" className="underline flex items-center gap-1">
          <span>Go to all Requests</span>{" "}
          <Icon
            svg="/icons/ArrowRight.svg"
            width={16}
            props="hidden sm:block"
          />
        </a>
      </h3>
    </div>
  );
};

export default Message;
