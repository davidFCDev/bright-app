import AdminDashboardTemplate from "@/modules/dashboard/templates/admin";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard admin page.",
};

export default function AdminDashboard() {
  return <AdminDashboardTemplate />;
}
