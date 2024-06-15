import { JsonFilter } from "../../util/JsonFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AnalyticsWhereInput = {
  data?: JsonFilter;
  generatedAt?: DateTimeNullableFilter;
  id?: StringFilter;
  reportType?: StringNullableFilter;
};
