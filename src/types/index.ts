
export interface Route {
    path: string;
    name: string;
    icon: React.ReactNode;
    number?: number;
  }

export interface NewRequests {
    date: string;
    status: string;
    assigned: string;
    name: string;
    children: number;
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
    color: string;
  }

  export interface NameList {
    name: string;
  }
  