import ChatTemplate from "@/modules/messages/templates/chat-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chat",
  description: "Chat messages page.",
};

export default function ChatMessages() {
  return <ChatTemplate />;
}
