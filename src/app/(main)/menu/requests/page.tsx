import RequestsTemplate from "@/modules/requests/templates/request";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests",
  description: "Requests page.",
};

export default function Requests() {
  return <RequestsTemplate />;
}
