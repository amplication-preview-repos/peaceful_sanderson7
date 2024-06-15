import { Candidate } from "../candidate/Candidate";
import { JobPosting } from "../jobPosting/JobPosting";

export type Application = {
  applicationDate: Date | null;
  candidate?: Candidate | null;
  createdAt: Date;
  id: string;
  jobPosting?: JobPosting | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
