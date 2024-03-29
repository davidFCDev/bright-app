import {
  AdminStats,
  AgeTable,
  AgenciesList,
  CountryTable,
  DeliveryTable,
  ExtraFormsTable,
  MessageList,
  Messages,
  MyStats,
  NameList,
  NewRequestTable,
  RequestList,
  RequestsTable,
  Route,
  StatsTable,
  UsersTable,
  VolunteerTable,
} from "@/types";
import Icon from "@/modules/common/icons";
import User from "@/modules/messages/components/user";

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
    id: 1,
    status: "New",
    assigned: (
      <select>
        <option value="">Assign</option>
      </select>
    ),
    name: "Marilyn Lipshutz",
    child: 2,
    date: "02/12/2024, 11:21 am",
  },
  {
    id: 2,
    status: "Assigned",
    assigned: "Cheyenne Septimus",
    name: "Anna Thompson",
    child: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    id: 3,
    status: "Assigned",
    assigned: "Talan Kenter",
    name: "Adison Philips",
    child: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    id: 4,
    status: "Assigned",
    assigned: "Gretchen Workman",
    name: "Nolan Gouse",
    child: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    id: 5,
    status: "Assigned",
    assigned: "Jaxson Franci",
    name: "Madelyn Torff",
    child: 1,
    date: "02/12/2024, 11:21 am",
  },
  {
    id: 6,
    status: "Assigned",
    assigned: "Jaxson Workman",
    name: "Hanna Kenter",
    child: 1,
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
    id: 1,
    status: "Active",
    organization: "Life Church",
    location: "Mustang",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 2,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
  {
    id: 2,
    status: "Active",
    organization: "Life Church",
    location: "South OKC",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 1,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
  {
    id: 3,
    status: "Active",
    organization: "Act of Love",
    location: "Mustang",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 5,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
  {
    id: 4,
    status: "Active",
    organization: "Anna's Home",
    location: "Mustang",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 1,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
  {
    id: 5,
    status: "Active",
    organization: "Nine",
    location: "Mustang",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 3,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
  {
    id: 6,
    status: "Inactive",
    organization: "Foster Care",
    location: "Mustang",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
    volunteers: 2,
    lat: 35.3844,
    long: 35.3844,
    max_distance: 20,
    zips: [73064, 73099],
  },
];

export const VOLUNTEERS_TABLE: VolunteerTable[] = [
  {
    status: "Active",
    name: "Kianna Bator",
    email: "kiannab@gmail.com",
    phone: "(206) 342-8631",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
  },
  {
    status: "Active",
    name: "Zaire Franci",
    email: "zairefranc@gmail.com",
    phone: "(206) 342-8631",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
  },
  {
    status: "Active",
    name: "Marley Geidt Bator",
    email: "marleygeidt@gmail.com",
    phone: "(206) 342-8631",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
  },
  {
    status: "Inactive",
    name: "Kianna Septimus",
    email: "septimusk@gmail.com",
    phone: "(206) 342-8631",
    address: ["1052 E State Highway 152", "Mustang, OK 73064"],
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

export const AGENCIES_LIST: AgenciesList = {
  A: ["Act of Love", "Angels", "Anna's Home"],
  C: [
    "CASA",
    "Cherokee Nation",
    "Cheyenne and Arapho",
    "Chickasaw Nation",
    "Circle of Care",
  ],
  F: ["Family for Life", "Foster Care"],
  H: ["Homebase Services"],
  L: ["Legal Aide/Kids Space", "Lilyfield", "Lions Meadows of Hope"],
  N: ["Nightlight Christian Adoptions and Foster Care", "Nine"],
};

export const MESSAGES_LIST: MessageList[] = [
  {
    name: "Aspen Dorwart",
    number: 1,
    message:
      "Nunc suscipit risus ligula, malesuada mattis ante lacinia at. Maecenas maximu...",
    time: "2m ago",
  },
  {
    name: "Marilyn Vetrovs",
    message:
      "Nunc suscipit risus ligula, malesuada mattis ante lacinia at. Maecenas maximu...",
    time: "52m ago",
  },
  {
    name: "Philip Stanton",
    message:
      "Nunc suscipit risus ligula, malesuada mattis ante lacinia at. Maecenas maximu...",
    time: "Mon",
  },
  {
    name: "Leo Passaquindice Arcand",
    message:
      "Nunc suscipit risus ligula, malesuada mattis ante lacinia at. Maecenas maximu...",
    time: "Sun",
  },
  {
    name: "Leo Saris",
    message:
      "Nunc suscipit risus ligula, malesuada mattis ante lacinia at. Maecenas maximu...",
    time: "02:20",
  },
];

export const MESSAGES_TEXT: Messages = {
  message1: {
    name: "Marilyn Vetrovs",
    time: "11:18am",
    text: "Nullam id augue bibendum, facilisis libero nec, sagittis elit. Vivamus vulputate massa eget metus sollicitudin congue. Quisque eu lobortis mauris.",
  },
  message2: {
    name: "Marilyn Vetrovs",
    time: "11:18am",
    text: "Nullam id augue bibendum, facilisis libero nec, sagittis elit.",
    user: (
      <User
        name="Robert Miller"
        status="New"
        child="2"
        date="02/12/2024, 11:21 am"
      />
    ),
  },
  message3: {
    text: "Nullam id augue bibendum, facilisis libero nec, sagittis elit. Vivamus vulputate massa eget metus sollicitudin congue. Quisque eu lobortis mauris.",
  },
  message4: {
    text: "Vivamus vulputate massa eget!",
  },
};

export const REQUEST_LIST: RequestList[] = [
  {
    name: "Robert Miller",
    child: "2",
    status: "New",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Anna Thompson",
    child: "1",
    status: "New",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Marilyn Lipshutz",
    child: "2",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Anna Thompson",
    child: "1",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Adison Philips",
    child: "1",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Nolan Gouse",
    child: "1",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Madelyn Torff",
    child: "1",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
  {
    name: "Hanna Kenter",
    child: "1",
    status: "Assigned",
    date: "02/12/2024, 11:21 am",
  },
];
