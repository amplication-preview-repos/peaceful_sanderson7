import { ApplicationCreateNestedManyWithoutCandidatesInput } from "./ApplicationCreateNestedManyWithoutCandidatesInput";

export type CandidateCreateInput = {
  applications?: ApplicationCreateNestedManyWithoutCandidatesInput;
  email?: string | null;
  experience?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  skills?: string | null;
};
