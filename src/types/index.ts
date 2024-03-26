
export interface Route {
    path: string;
    name: string;
    icon: React.ReactNode;
    number?: number;
  }

export interface RequestTable {
    date: string;
    status: string;
    assigned: string;
    name: string;
    children: number;
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
  