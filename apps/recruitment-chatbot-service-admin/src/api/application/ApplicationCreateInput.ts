import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { JobPostingWhereUniqueInput } from "../jobPosting/JobPostingWhereUniqueInput";

export type ApplicationCreateInput = {
  applicationDate?: Date | null;
  candidate?: CandidateWhereUniqueInput | null;
  jobPosting?: JobPostingWhereUniqueInput | null;
  status?: "Option1" | null;
};
