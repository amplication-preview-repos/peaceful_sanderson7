import { ApplicationCreateNestedManyWithoutJobPostingsInput } from "./ApplicationCreateNestedManyWithoutJobPostingsInput";

export type JobPostingCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutJobPostingsInput;
  description?: string | null;
  location?: string | null;
  postedDate?: Date | null;
  salary?: number | null;
  title?: string | null;
};
