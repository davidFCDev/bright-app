import StepThreeTemplate from "@/modules/parent-form/templates/stepThreeTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Form",
  description: "Step three page.",
};

export default function StepThreeParentForm() {
  return <StepThreeTemplate />;
}
