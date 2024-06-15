import { SortOrder } from "../../util/SortOrder";

export type CandidateOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  experience?: SortOrder;
  firstName?: SortOrder;
  id?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  skills?: SortOrder;
  updatedAt?: SortOrder;
};
