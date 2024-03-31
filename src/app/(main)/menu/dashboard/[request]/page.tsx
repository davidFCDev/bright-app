import RequestsPreviewTemplate from "@/modules/dashboard/templates/requestPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request preview",
  description: "Request preview page.",
};

export default function RequestPreview() {
  return <RequestsPreviewTemplate />;
}
