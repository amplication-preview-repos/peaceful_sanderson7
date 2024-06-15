import { Application } from "../application/Application";

export type JobPosting = {
  applications?: Array<Application>;
  createdAt: Date;
  description: string | null;
  id: string;
  location: string | null;
  postedDate: Date | null;
  salary: number | null;
  title: string | null;
  updatedAt: Date;
};
