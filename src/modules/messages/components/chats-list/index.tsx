import { MESSAGES_LIST } from "@/constants";
import Link from "next/link";
import React from "react";

const ChatsList = () => {

  return (
    <div className="flex flex-col w-full text-sm">
      {MESSAGES_LIST.map((item, index) => (
        <Link href="/menu/messages/1"
          key={index}
          className="flex flex-col gap-2 border border-neutral-200 px-8 py-4 hover:bg-terciary hover:border-terciary hover:border-b hover:border-b-primary hover:cursor-pointer"
        >
          <div className="flex items-center justify-between">
            <p className="font-semibold flex items-center gap-2">
              <span
                className={`${
                  item.number ? "text-primary" : "text-neutral-900"
                }`}
              >
                {item.name}
              </span>
              {item.number && (
                <span className="px-2 py-1 bg-primary text-white text-xs rounded">
                  {item.number}
                </span>
              )}
            </p>
            <span className="text-xs text-neutral-700">{item.time}</span>
          </div>
          <p
            className={`${
              item.number ? "text-black font-semibold" : "text-neutral-700"
            } text-xs`}
          >
            {item.message}
          </p>
        </Link>
      ))}
    </div>
  );
};

export default ChatsList;
