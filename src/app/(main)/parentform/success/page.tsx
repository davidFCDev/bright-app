import SuccessTemplate from "@/modules/parent-form/templates/successTemplate";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Parent Form",
  description: "Success page.",
};

export default function SuccessParentForm() {
  return <SuccessTemplate />;
}
