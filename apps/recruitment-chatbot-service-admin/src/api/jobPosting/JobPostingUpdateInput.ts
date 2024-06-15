import { ApplicationUpdateManyWithoutJobPostingsInput } from "./ApplicationUpdateManyWithoutJobPostingsInput";

export type JobPostingUpdateInput = {
  applications?: ApplicationUpdateManyWithoutJobPostingsInput;
  description?: string | null;
  location?: string | null;
  postedDate?: Date | null;
  salary?: number | null;
  title?: string | null;
};
