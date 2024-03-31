import StepTwoTemplate from "@/modules/new-request/templates/stepTwoTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Form",
  description: "Step two page.",
};

export default function StepTwoForm() {
  return <StepTwoTemplate />;
}
