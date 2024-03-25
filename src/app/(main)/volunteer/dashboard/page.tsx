import DashboardTemplate from "@/modules/dashboard/volunteers/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard for Volunteers",
  description: "Dashboard for volunteers to manage their tasks and profile.",
};

export default function Dashboard() {
  return <DashboardTemplate />;
}
