import DeliveryDetailsTemplate from "@/modules/delivery/templates/deliveryDetailsTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Delivery details",
  description: "Delivery details page.",
};

export default function DeliveryDetails() {
  return <DeliveryDetailsTemplate />;
}
