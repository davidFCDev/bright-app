import React, { ReactNode } from "react";

interface MessageReceivedProps {
  name?: string;
  time?: string;
  text: string;
  user?: ReactNode;
}

const MessageReceived = ({ name, time, text, user }: MessageReceivedProps) => {
  return (
    <div className="flex flex-col gap-2 max-w-md">
      {name && time && (
        <p className="text-xs font-semibold">
          {name} · {time}
        </p>
      )}
      <div className="p-4 bg-secondary text-white text-sm rounded flex flex-col gap-3">
        {user}
        <p>{text}</p>
      </div>
    </div>
  );
};

export default MessageReceived;
