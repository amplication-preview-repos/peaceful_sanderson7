import { Analytics as TAnalytics } from "../api/analytics/Analytics";

export const ANALYTICS_TITLE_FIELD = "reportType";

export const AnalyticsTitle = (record: TAnalytics): string => {
  return record.reportType?.toString() || String(record.id);
};
