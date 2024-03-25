import AnalyticsTemplate from "@/modules/analytics/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Analytics",
  description: "Analytics admin page.",
};

export default function Analytics() {
  return <AnalyticsTemplate />;
}
