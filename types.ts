export interface LeadData {
  name: string;
  email: string;
  phone: string;
  careerPath: string;
  isStudent: boolean;
  isTech: boolean;
  readyIn30Days: boolean;
}

export interface SheetRow {
  id: number;
  colA: string; // Name
  colB: string; // Email
  timestamp: string;
}

export interface WebhookLog {
  id: number;
  status: number;
  message: string;
  timestamp: string;
}
