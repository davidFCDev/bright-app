import React from "react";

interface MessageSentProps {
  name?: string;
  time?: string;
  text: string;
}

const MessageSent = ({ name, time, text }: MessageSentProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-md">
      {name && time && (
        <p className="text-xs font-semibold">
          {name} · {time}
        </p>
      )}
      <div className="p-4 bg-terciary text-black text-sm rounded">
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageSent;
