import { MESSAGES_LIST } from "@/constants";
import React from "react";

const MessagesList = () => {
  return (
    <div className="flex flex-col max-w-sm  text-sm">
      {MESSAGES_LIST.map((item, index) => (
        <div
          key={index}
          className="flex flex-col gap-2 border border-neutral-200 px-8 py-4 hover:bg-terciary hover:border-terciary hover:border-b hover:border-b-primary hover:cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold">{item.name}</p>
            <p className="text-xs text-neutral-700">{item.time}</p>
          </div>
          <p className="text-xs text-neutral-700">{item.message}</p>
        </div>
      ))}
    </div>
  );
};

export default MessagesList;
