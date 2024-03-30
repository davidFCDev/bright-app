"use client";
import { useInterfaceContext } from "@/lib/context/interface-context";
import Button from "@/modules/common/button";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import React from "react";
import ChatsList from "../components/chats-list";
import Chat from "../components/chat";
import ChatAdd from "../components/add-chat";
import LinkRequest from "../components/link-request";

const MessagesTemplate = () => {
  const { handleShowNewChat } = useInterfaceContext();

  return (
    <div className="relative">
      <div className="flex items-center justify-between w-full px-8 py-4">
        <div className="title">
          <Icon svg="/icons/Chat.svg" />
          <h2>Messages</h2>
        </div>
        <div className="flex items-center gap-4">
          <Button text="+ New Chat" onClick={() => handleShowNewChat()} />
        </div>
      </div>

      <Line />

      <div className="w-full flex">
        <div className="w-full sm:max-w-sm">
          <ChatsList />
        </div>

        <div className="hidden sm:block px-12 py-4 w-full">
          <Chat />
        </div>

        <LinkRequest />
        <ChatAdd />
      </div>
    </div>
  );
};

export default MessagesTemplate;
