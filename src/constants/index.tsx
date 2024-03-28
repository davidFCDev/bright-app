import {
  AdminStats,
  AgeTable,
  CountryTable,
  DeliveryTable,
  ExtraFormsTable,
  MyStats,
  NameList,
  NewRequestTable,
  RequestsTable,
  Route,
  StatsTable,
  UsersTable,
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

export const NEW_REQUEST_TABLE: NewRequestTable[] = [
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

export const REQUESTS_TABLE: RequestsTable[] = [
  {
    status: "New",
    assigned: (
      <select>
        <option value="">Assign</option>
      </select>
    ),
    name: "Marilyn Lipshutz",
    children: 2,
    date: "02/12/2024, 11:21 am",
  },
  {
    status: "Assigned",
    assigned: "Cheyenne Septimus",
    name: "Anna Thompson",
    children: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    status: "Assigned",
    assigned: "Talan Kenter",
    name: "Adison Philips",
    children: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    status: "Assigned",
    assigned: "Gretchen Workman",
    name: "Nolan Gouse",
    children: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    status: "Assigned",
    assigned: "Jaxson Franci",
    name: "Madelyn Torff",
    children: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    status: "Assigned",
    assigned: "Jaxson Workman",
    name: "Hanna Kenter",
    children: 1,
    date: "02/12/2024, 11:21 am",
  },
];

export const EXTRA_FORMS_TABLE: ExtraFormsTable[] = [
  {
    status: "Sent",
    name: "Talan Kenter",
    mail: "talan29@hotmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "-",
  },
  {
    status: "Used",
    name: "Kaylynn Bator",
    mail: "septimus.c@gmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "Ready (02/12/2024, 11:21 am)",
  },
  {
    status: "Sent",
    name: "Erin Herwitz",
    mail: "erinher@gmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "-",
  },
  {
    status: "Sent",
    name: "Gretchen Workman",
    mail: "get1990@webmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "-",
  },
  {
    status: "Resent",
    name: "Jaxson Franci",
    mail: "jaxsonfraa@hotmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "-",
  },
  {
    status: "Resent",
    name: "Jaxson Workman",
    mail: "workmanjax00@gmail.com",
    date_sent: "02/12/2024, 11:21 am",
    request: "-",
  },
];

export const USERS_TABLE: UsersTable[] = [
  {
    status: "Active",
    name: "Talan Kenter",
    mail: "talan29@hotmail.com",
    phone: "(206) 342-8631",
    user_type: "Admin",
  },
  {
    status: "Active",
    name: "Kaylynn Bator",
    mail: "septimus.c@gmail.com",
    phone: "(206) 342-8631",
    user_type: "Admin",
  },
  {
    status: "Active",
    name: "Erin Herwitz",
    mail: "erinher@gmail.com",
    phone: "(206) 342-8631",
    user_type: "Volunteer",
  },
  {
    status: "Active",
    name: "Gretchen Workman",
    mail: "get1990@webmail.com",
    phone: "(206) 342-8631",
    user_type: "Volunteer",
  },
  {
    status: "Active",
    name: "Jaxson Franci",
    mail: "jaxsonfraa@hotmail.com",
    phone: "(206) 342-8631",
    user_type: "Admin",
  },
  {
    status: "Inactive",
    name: "Jaxson Workman",
    mail: "workmanjax00@gmail.com",
    phone: "(206) 342-8631",
    user_type: "Volunteer",
  },
];

export const DELIVERY_TABLE: DeliveryTable[] = [
  {
    status: "Active",
    organization: "Life Church",
    location: "Mustang",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 2
  },
  {
    status: "Active",
    organization: "Life Church",
    location: "South OKC",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 1
  },
  {
    status: "Active",
    organization: "Act of Love",
    location: "Mustang",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 5
  },
  {
    status: "Active",
    organization: "Anna's Home",
    location: "Mustang",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 1
  },
  {
    status: "Active",
    organization: "Nine",
    location: "Mustang",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 3
  },
  {
    status: "Inactive",
    organization: "Foster Care",
    location: "Mustang",
    address: [
      "1052 E State Highway 152",
      "Mustang, OK 73064"
    ],
    volunteers: 2
  },
]

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

export const AGE_TABLE: AgeTable[] = [
  {
    age: "Age 3 and Under",
    children_served: 48,
    percent: 57.8,
  },
  {
    age: "Age 4-7",
    children_served: 15,
    percent: 7,
  },
  {
    age: "Age 7-12",
    children_served: 11,
    percent: 6,
  },
  {
    age: "Age 13 and Up",
    children_served: 9,
    percent: 5,
  },
];

export const COUNTRY_TABLE: CountryTable[] = [
  {
    country: "Oklahoma",
    children_served: 48,
    percent: 24,
  },
  {
    country: "Tulsa",
    children_served: 7,
    percent: 7,
  },
  {
    country: "Grady",
    children_served: 11,
    percent: 6,
  },
  {
    country: "Washington",
    children_served: 9,
    percent: 5,
  },
  {
    country: "Payne",
    children_served: 8,
    percent: 4,
  },
  {
    country: "Comanche",
    children_served: 5,
    percent: 3,
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
