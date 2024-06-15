import { InputJsonValue } from "../../types";

export type AnalyticsUpdateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  reportType?: string | null;
};
