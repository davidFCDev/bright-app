"use client";
import React from "react";
import Icon from "@/modules/common/icons";
import Line from "@/modules/common/line";
import Chat from "../components/chat";
import Link from "next/link";
import { useInterfaceContext } from "@/lib/context/interface-context";
import LinkRequest from "../components/link-request";

const ChatTemplate = () => {
  const { handleShowLinkRequest } = useInterfaceContext();

  return (
    <div className="relative w-full h-full bg-white right-0 top-0 border-l border-neutral-300">
      <div className="flex items-end justify-between w-full py-5 px-6">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1 text-xs">
            <Link href="/menu/messages">
              <Icon svg="/icons/ArrowRight.svg" width={16} props="rotate-180" />
            </Link>
            <p className="font-semibold">
              Messages / <span className="text-neutral-500">Aspen Dorwart</span>
            </p>
          </div>
        </div>
      </div>
      <Line />

      <div className="flex flex-col justify-between h-full">
        <div className="py-3 px-6">
          <Chat />
        </div>

        
      </div>

      <LinkRequest />
    </div>
  );
};

export default ChatTemplate;
