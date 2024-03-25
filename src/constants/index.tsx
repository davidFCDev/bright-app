import { RiHome3Fill, RiPieChart2Fill } from "react-icons/ri";
import { CgNotes } from "react-icons/cg";
import { AiFillMessage } from "react-icons/ai";
import { NewRequests, Route } from "@/types";
import { FaUserCircle } from "react-icons/fa";
import { BsFillBoxSeamFill, BsFillCalendar2PlusFill } from "react-icons/bs";
import { IoGrid } from "react-icons/io5";

export const VOL_ROUTES: Route[] = [
  {
    path: "/volunteer/dashboard",
    name: "Dashboard",
    icon: <RiHome3Fill />,
  },
  {
    path: "/volunteer/notifications",
    name: "Notifications",
    icon: <CgNotes />,
  },
  {
    path: "/volunteer/requests",
    name: "Requests",
    icon: <AiFillMessage />,
  },
];

export const ADMIN_ROUTES: Route[] = [
  {
    path: "/admin/dashboard",
    name: "Dashboard",
    icon: <RiHome3Fill />,
  },
  {
    path: "/admin/requests",
    name: "Requests",
    icon: <AiFillMessage />,
  },
  {
    path: "/admin/extraforms",
    name: "Extra Forms",
    icon: <BsFillCalendar2PlusFill />,
  },
  {
    path: "/admin/analytics",
    name: "Analytics",
    icon: <RiPieChart2Fill />,
  },
  {
    path: "/admin/users",
    name: "Users",
    icon: <FaUserCircle />,
  },
  {
    path: "/admin/delivery",
    name: "Delivery Volunteers",
    icon: <BsFillBoxSeamFill />,
  },
  {
    path: "/admin/agencies",
    name: "Agencies",
    icon: <IoGrid />,
  },
  {
    path: "/admin/messages",
    name: "Messages",
    icon: <AiFillMessage />,
    number: 2,
  }
];

export const NEW_REQUESTS: NewRequests[] = [
  {
    date: "02/12/2024, 11:21 am",
    status: "New",
    assigned: "You",
    name: "Robert Miller",
    children: 2,
  },
  {
    date: "02/12/2024, 11:21 am",
    status: "New",
    assigned: "You",
    name: "Anna Thompson",
    children: 1,
  },
];
