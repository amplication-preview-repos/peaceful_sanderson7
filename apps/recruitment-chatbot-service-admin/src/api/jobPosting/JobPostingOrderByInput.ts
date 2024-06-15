import { SortOrder } from "../../util/SortOrder";

export type JobPostingOrderByInput = {
  createdAt?: SortOrder;
  description?: SortOrder;
  id?: SortOrder;
  location?: SortOrder;
  postedDate?: SortOrder;
  salary?: SortOrder;
  title?: SortOrder;
  updatedAt?: SortOrder;
};
