
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