import Icon from "@/modules/common/icons";
import React from "react";
import Chat from "../chat";
import Line from "@/modules/common/line";

const ChatMiniviewChat = () => {
  return (
    <div className="absolute z-20 w-2/5 h-full bg-white right-0 top-0 border-l border-neutral-300">
      <div className="flex items-end justify-between w-full py-5 px-8">
        <div className="flex items-center gap-2">
          <button>
            <Icon svg="/icons/ArrowRight.svg" width={16} props="rotate-180" />
          </button>
          <h2 className="font-semibold text-lg">Leo Saris</h2>
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
        <div className="py-3 px-6">
          <Chat />
        </div>

        <div className="px-6">
          <div className="w-full flex items-center border border-neutral-300 rounded">
            <div className="flex w-full items-center p-3 gap-3 justify-between">
              <Icon svg="/icons/Link.svg" width={20} />
              <input
                type="text"
                placeholder="Type new message here..."
                className="w-full outline-none focus:outline-none text-sm"
              />
            </div>
            <button className="font-semibold text-primary px-3 hover:text-secondary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatMiniviewChat;
