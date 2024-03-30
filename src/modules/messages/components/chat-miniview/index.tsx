import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";
import ChatsList from "../chats-list";

const ChatMiniview = () => {

  return (
    <div className="absolute z-20 w-full sm:w-2/5 h-full bg-white right-0 top-0 border-l border-neutral-300">
      <div className="flex items-end justify-between w-full py-5 px-8">
        <div className="flex items-center gap-2 ">
          <h2 className="font-semibold text-xl">Messages</h2>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 px-4 py-2 border border-neutral-300">
            <Icon svg="/icons/ArrowSquare.svg" width={16} />
            <span className="font-semibold text-xs">Full View</span>
          </div>
          <button>
            <Icon svg="/icons/Close.svg" />
          </button>
        </div>
      </div>
      <Line />
      <ChatsList />
    </div>
  );
};

export default ChatMiniview;
