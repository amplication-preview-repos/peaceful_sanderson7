import { ApplicationUpdateManyWithoutCandidatesInput } from "./ApplicationUpdateManyWithoutCandidatesInput";

export type CandidateUpdateInput = {
  applications?: ApplicationUpdateManyWithoutCandidatesInput;
  email?: string | null;
  experience?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  phone?: string | null;
  skills?: string | null;
};
