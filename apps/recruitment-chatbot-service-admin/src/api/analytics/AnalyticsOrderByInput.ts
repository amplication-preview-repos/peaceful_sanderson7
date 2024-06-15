import { SortOrder } from "../../util/SortOrder";

export type AnalyticsOrderByInput = {
  createdAt?: SortOrder;
  data?: SortOrder;
  generatedAt?: SortOrder;
  id?: SortOrder;
  reportType?: SortOrder;
  updatedAt?: SortOrder;
};
