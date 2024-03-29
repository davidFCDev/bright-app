import React from "react";
import MessageReceived from "../message-received";
import { MESSAGES_TEXT } from "@/constants";
import MessageSent from "../message-sent";

const Chat = () => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <MessageReceived
        name={MESSAGES_TEXT.message1.name}
        time={MESSAGES_TEXT.message1.time}
        text={MESSAGES_TEXT.message1.text}
      />

      <div className="flex justify-end">
        <MessageSent
          name="You"
          time="02:55pm"
          text="Sed eu ex nulla. Nulla commodo, sem sit amet tempus ultricies, lacus nisl consectetur dolor, id elementum justo risus non massa. Sed ut condimentum mauris"
        />
      </div>

      <div className="flex flex-col gap-2 max-w-md">
        <MessageReceived
          name={MESSAGES_TEXT.message2.name}
          time={MESSAGES_TEXT.message2.time}
          text={MESSAGES_TEXT.message2.text}
          user={MESSAGES_TEXT.message2.user}
        />

        <MessageReceived text={MESSAGES_TEXT.message3.text} />

        <MessageReceived text={MESSAGES_TEXT.message4.text} />
      </div>
    </div>
  );
};

export default Chat;
