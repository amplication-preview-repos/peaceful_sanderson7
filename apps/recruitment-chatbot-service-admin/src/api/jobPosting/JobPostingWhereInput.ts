import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";

export type JobPostingWhereInput = {
  applications?: ApplicationListRelationFilter;
  description?: StringNullableFilter;
  id?: StringFilter;
  location?: StringNullableFilter;
  postedDate?: DateTimeNullableFilter;
  salary?: FloatNullableFilter;
  title?: StringNullableFilter;
};
