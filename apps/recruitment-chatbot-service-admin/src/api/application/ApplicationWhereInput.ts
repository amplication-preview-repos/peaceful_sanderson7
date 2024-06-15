import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CandidateWhereUniqueInput } from "../candidate/CandidateWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { JobPostingWhereUniqueInput } from "../jobPosting/JobPostingWhereUniqueInput";

export type ApplicationWhereInput = {
  applicationDate?: DateTimeNullableFilter;
  candidate?: CandidateWhereUniqueInput;
  id?: StringFilter;
  jobPosting?: JobPostingWhereUniqueInput;
  status?: "Option1";
};
