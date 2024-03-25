import AdminDashboardTemplate from "@/modules/dashboard/admin/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Dashboard admin page.",
};

export default function AdminDashboard() {
  return <AdminDashboardTemplate />;
}
