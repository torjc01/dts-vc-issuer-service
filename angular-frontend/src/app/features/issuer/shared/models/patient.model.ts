export interface Patient {
  id?: number;
  userId: string; // GUID
  hpdid: string;
  fullName: string;
  dateOfBirth: string;
  email: string;
}
