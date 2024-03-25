import MessagesTemplate from "@/modules/messages/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Messages",
  description: "Messages admin page.",
};

export default function Messages() {
  return <MessagesTemplate />;
}
