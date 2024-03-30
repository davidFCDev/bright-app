import MessagesTemplate from "@/modules/messages/templates/main-template";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
  description: "Messages page.",
};

export default function Messages() {
  return <MessagesTemplate />;
}
