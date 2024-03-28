"use client";
import { useInterfaceContext } from "@/lib/context/interface-context";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";
import MessagesList from "../components/messages-list";
import Chat from "../components/chat";
import ChatAdd from "../components/add-chat";

const MessagesTemplate = () => {
  const { handleShowAdd } = useInterfaceContext();
  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full px-8 py-4">
        <div className="title">
          <Icon svg="/icons/Chat.svg" />
          <h2>Messages</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button text="+ New Chat" onClick={() => handleShowAdd()} />
        </div>
      </div>

      <Line />

      <div className="w-full flex ">
        <MessagesList />

        <Chat />

        <ChatAdd />
      </div>
    </div>
  );
};

export default MessagesTemplate;
