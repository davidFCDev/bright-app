import DeliveryTemplate from "@/modules/delivery/templates/deliveryTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery",
  description: "Delivery page.",
};

export default function Delivery() {
  return <DeliveryTemplate />;
}
