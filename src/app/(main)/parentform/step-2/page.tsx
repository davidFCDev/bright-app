
import StepTwoTemplate from "@/modules/parent-form/templates/stepTwoTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Form",
  description: "Step two page.",
};

export default function StepTwoParentForm() {
  return <StepTwoTemplate />;
}
