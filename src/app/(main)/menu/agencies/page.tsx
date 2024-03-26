import AgenciesTemplate from "@/modules/agencies/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agencies",
  description: "Agencies page.",
};

export default function Agencies() {
  return <AgenciesTemplate />;
}
