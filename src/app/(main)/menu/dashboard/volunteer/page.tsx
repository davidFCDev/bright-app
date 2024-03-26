import DashboardTemplate from "@/modules/dashboard/templates/volunteer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard volunteer page.",
};

export default function Dashboard() {
  return <DashboardTemplate />;
}
