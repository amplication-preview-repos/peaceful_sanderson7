import { Application } from "../application/Application";

export type Candidate = {
  applications?: Array<Application>;
  createdAt: Date;
  email: string | null;
  experience: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  phone: string | null;
  skills: string | null;
  updatedAt: Date;
};
