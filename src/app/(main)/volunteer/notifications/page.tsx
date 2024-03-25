import NotificationsTemplate from "@/modules/notifications/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Notifications",
  description: "Notifications for volunteers.",
};

export default function Notifications() {
  return <NotificationsTemplate />;
}
