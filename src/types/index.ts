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
    status: string;
    assigned: string | ReactNode;
    name: string;
    children: number;
    date: string;
  }

export interface ExtraFormsTable {
    status: string;
    name: string;
    mail: string;
    date_sent: string;
    request: string;
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
  