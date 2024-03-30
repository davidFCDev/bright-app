import React from "react";
import MessageReceived from "../message-received";
import { MESSAGES_TEXT } from "@/constants";
import MessageSent from "../message-sent";
import Icon from "@/modules/common/icons";
import { useInterfaceContext } from "@/lib/context/interface-context";

const Chat = () => {
  const { handleShowLinkRequest } = useInterfaceContext();
  return (
    <div className="flex flex-col justify-between w-full h-full gap-20">
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

      <div className="w-full flex items-center border border-neutral-300 rounded">
        <div className="flex w-full items-center p-3 gap-3 justify-between">
          <button onClick={handleShowLinkRequest}>
            <Icon svg="/icons/Link.svg" width={20} />
          </button>
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
  );
};

export default Chat;
