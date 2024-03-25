
import LoginTemplate from "@/modules/login/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Main page",
  description: "Login and access the dashboard",
};

export default function Root() {
  return <LoginTemplate />;
}
