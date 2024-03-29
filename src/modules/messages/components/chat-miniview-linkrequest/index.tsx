import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";
import RequestList from "../request-list";
import Search from "@/modules/common/search";

const ChatMiniviewLinkrequest = () => {
  return (
    <div className="absolute z-20 w-2/5 h-full bg-white right-0 top-0 border-l border-neutral-300">
      <div className="flex items-end justify-between w-full py-5 px-8">
        <div className="flex items-center gap-2">
          <h2 className="font-semibold text-lg">Link Request</h2>
        </div>
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-neutral-300">
            <Icon svg="/icons/ArrowSquare.svg" width={16} />
            <span className="font-semibold text-xs">Full View</span>
          </button>
          <button>
            <Icon svg="/icons/Close.svg" />
          </button>
        </div>
      </div>
      <Line />

      <div className="flex flex-col justify-between h-full">
        <div className="py-3 px-6 flex flex-col gap-3">
          <Search />
          <RequestList props={"grid grid-cols-1 gap-3"} />
        </div>
      </div>
    </div>
  );
};

export default ChatMiniviewLinkrequest;
