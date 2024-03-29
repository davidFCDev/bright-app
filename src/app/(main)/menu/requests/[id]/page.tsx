import RequestsPreviewTemplate from "@/modules/requests/templates/requestPreview";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request preview",
  description: "Request preview page.",
};

export default function RequestPreview() {
  return <RequestsPreviewTemplate />;
}
