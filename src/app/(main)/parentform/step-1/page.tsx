import StepOneTemplate from "@/modules/parent-form/templates/stepOneTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Form",
  description: "Step one page.",
};

export default function StepOneParentForm() {
  return <StepOneTemplate />;
}
