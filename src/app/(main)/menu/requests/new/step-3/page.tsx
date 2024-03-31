import StepThreeTemplate from "@/modules/new-request/templates/stepThreeTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard Form",
  description: "Step three page.",
};

export default function StepThreeForm() {
  return <StepThreeTemplate />;
}
