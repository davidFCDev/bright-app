import AdminRequestsTemplate from "@/modules/requests/admin/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Requests",
  description: "Requests admin page.",
};

export default function AdminRequests() {
  return <AdminRequestsTemplate />;
}
