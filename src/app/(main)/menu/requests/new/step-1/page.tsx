import StepOneTemplate from "@/modules/new-request/templates/stepOneTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Form",
  description: "Step one page.",
};

export default function StepOneForm() {
  return <StepOneTemplate />;
}
