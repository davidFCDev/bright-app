import ExtraformsTemplate from "@/modules/extraforms/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Extraforms",
  description: "Extraforms admin page.",
};

export default function Extraforms() {
  return <ExtraformsTemplate />;
}
