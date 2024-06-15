import { InputJsonValue } from "../../types";

export type AnalyticsCreateInput = {
  data?: InputJsonValue;
  generatedAt?: Date | null;
  reportType?: string | null;
};
