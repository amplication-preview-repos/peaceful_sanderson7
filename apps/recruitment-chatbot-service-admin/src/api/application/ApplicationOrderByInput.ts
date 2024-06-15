import { SortOrder } from "../../util/SortOrder";

export type ApplicationOrderByInput = {
  applicationDate?: SortOrder;
  candidateId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  jobPostingId?: SortOrder;
  status?: SortOrder;
  updatedAt?: SortOrder;
};
