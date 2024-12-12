export interface User {
  id: string;
  name: string;
  role: 'string';
}
export interface Incidents extends IncidentsForm {
  id: string;
}

export interface IncidentsForm {
  assignedTo: string[];
  createdAt: string;
  creatorId: string;
  name?: string;
  priority: string;
  state: string;
}
