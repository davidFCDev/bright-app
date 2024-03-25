import DeliveryTemplate from "@/modules/delivery/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Delivery admin page.",
};

export default function Delivery() {
  return <DeliveryTemplate />;
}
