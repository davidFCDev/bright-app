import UsersTemplate from "@/modules/users/templates";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Users",
  description: "Users admin page.",
};

export default function Users() {
  return <UsersTemplate />;
}
