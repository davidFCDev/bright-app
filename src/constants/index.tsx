import {
  AdminStats,
  MyStats,
  NameList,
  RequestTable,
  Route,
  StatsTable,
} from "@/types";
import Icon from "@/modules/common/icons";

export const VOL_ROUTES: Route[] = [
  {
    path: "/menu/dashboard/volunteer",
    name: "Dashboard",
    icon: <Icon svg="/icons/Dashboard.svg" />,
  },
  {
    path: "/menu/requests",
    name: "Requests",
    icon: <Icon svg="/icons/Requests.svg" />,
  },
  {
    path: "/menu/messages",
    name: "Notifications",
    icon: <Icon svg="/icons/Chat.svg" />,
    number: 2,
  },
];

export const ADMIN_ROUTES: Route[] = [
  {
    path: "/menu/dashboard/admin",
    name: "Dashboard",
    icon: <Icon svg="/icons/Dashboard.svg" />,
  },
  {
    path: "/menu/requests",
    name: "Requests",
    icon: <Icon svg="/icons/Requests.svg" />,
  },
  {
    path: "/menu/extraforms",
    name: "Extra Forms",
    icon: <Icon svg="/icons/ExtraRequests.svg" />,
  },
  {
    path: "/menu/analytics",
    name: "Analytics",
    icon: <Icon svg="/icons/Stats.svg" />,
  },
  {
    path: "/menu/users",
    name: "Users",
    icon: <Icon svg="/icons/Users.svg" />,
  },
  {
    path: "/menu/delivery",
    name: "Delivery Volunteers",
    icon: <Icon svg="/icons/Delivery.svg" />,
  },
  {
    path: "/menu/agencies",
    name: "Agencies",
    icon: <Icon svg="/icons/Agencies.svg" />,
  },
  {
    path: "/menu/messages",
    name: "Messages",
    icon: <Icon svg="/icons/Chat.svg" />,
    number: 2,
  },
];

export const REQUEST_TABLE: RequestTable[] = [
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

export const STATS_TABLE: StatsTable[] = [
  {
    location: "Life Church - South OKC",
    volunteers: 2,
    items_sent: 9,
    children_served: 2,
  },
  {
    location: "Life Church - Mustang",
    volunteers: 2,
    items_sent: 11,
    children_served: 5,
  },
];

export const MY_STATS: MyStats[] = [
  {
    title: "189",
    subtitle: "YTD Requests Filled",
    description: "-2% y/y",
    icon: <Icon svg="/icons/Requests.svg" />,
    status: false,
  },
  {
    title: "165",
    subtitle: "YTD Children Served",
    description: "-4% y/y",
    icon: <Icon svg="/icons/Children.svg" />,
    status: false,
  },
  {
    title: "219",
    subtitle: "MTD Requests Filled",
    description: "+18% y/y",
    icon: <Icon svg="/icons/Requests.svg" />,
    status: true,
  },
  {
    title: "189",
    subtitle: "MTD Children Served",
    description: "+10% y/y",
    icon: <Icon svg="/icons/Children.svg" />,
    status: true,
  },
];

export const ADMIN_STATS: AdminStats[] = [
  {
    title: "71",
    subtitle: "Max 1,000",
    description: "Children Served",
    icon: <Icon svg="/icons/Children.svg" />,
    percent: 7,
    status: false,
  },
  {
    title: "$169.00",
    subtitle: "Max $125.00",
    description: "Average Cost per Request",
    icon: <Icon svg="/icons/Cost.svg" />,
    percent: 112,
    status: false,
  },
  {
    title: "31 hrs",
    subtitle: "Max 48 hrs",
    description: "Request Completion time",
    icon: <Icon svg="/icons/Stopwatch.svg" />,
    percent: 68,
    status: true,
  },
  {
    title: "6",
    subtitle: "Max 7",
    description: "Working Volunteers",
    icon: <Icon svg="/icons/Volunteers.svg" />,
    percent: 86,
    status: true,
  },
];

export const NAME_LIST: NameList[] = [
  { name: "Cindy Gardner" },
  {
    name: "Omar Ekstrom Bothman",
  },
  {
    name: "Marley Rosser",
  },
  {
    name: "Roger Dokidis",
  },
  {
    name: "Emery Siphron",
  },
  {
    name: "Wilson Levin",
  },
];
