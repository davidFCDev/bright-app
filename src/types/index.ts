import { ReactNode } from "react";

export interface Route {
    path: string;
    name: string;
    icon: React.ReactNode;
    number?: number;
  }

export interface NewRequestTable {
  date: string,
  status: string,
  assigned: string,
  name: string,
  children: number,
  }

export interface RequestsTable {
    id: number;
    status: string;
    assigned: string | ReactNode;
    name: string;
    child: number;
    date: string;
  }

export interface ExtraFormsTable {
    status: string;
    name: string;
    mail: string;
    date_sent: string;
    request: string;
  }

export interface UsersTable {
    status: string;
    name: string;
    mail: string;
    phone: string;
    user_type: string;
  }

export interface DeliveryTable {
  id: number;
  status: string;
  organization: string;
  location: string;
  address: [
      string,
      string
    ];
  volunteers: number;
  lat: number;
  long: number;
  max_distance: number;
  zips: [number, number],
}

export interface VolunteerTable {
    status: string;
    name: string;
    email: string;
    phone: string;
    address: [string, string];
  }

export interface AgeTable {
    age: string;
    children_served: number;
    percent: number;
  }

export interface CountryTable {
    country: string;
    children_served: number;
    percent: number;
 }

export interface StatsTable {
    location: string;
    volunteers: number;
    items_sent: number;
    children_served: number;
  }

export interface MyStats {
  title: string;
  subtitle: string;
  description: string;
  icon: React.ReactNode;
  status: boolean;
 }

export interface AdminStats  {
    title: string;
    subtitle: string;
    description: string;
    icon: React.ReactNode;
    percent: number;
    status: boolean;
  }

export interface NameList {
    name: string;
  }

export interface AgenciesList {
    [key: string]: string[];
  }

export interface MessageList {
    name: string;
    number?: number;
    message: string;
    time: string;
  }
  
export interface Message {
    name?: string;
    time?: string;
    text: string;
    user?: string | JSX.Element;
  }
  
export interface Messages {
    [key: string]: Message;
  }

export interface RequestList {
    name: string;
    child: string;
    status: string;
    date: string;
  }

export interface ItemsSentList {
    status: string,
    item: string,
    qty: number,
    price: string,
    bought_from: string,
    date_sent: string,
    tracking: string,
}
