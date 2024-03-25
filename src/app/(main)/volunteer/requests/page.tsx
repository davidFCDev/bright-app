import RequestsTemplate from "@/modules/requests/volunteers/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests",
  description: "Requests and stats for volunteers.",
};

export default function Requests() {
  return <RequestsTemplate />;
}
