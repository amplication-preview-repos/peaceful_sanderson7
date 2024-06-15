import { ApplicationListRelationFilter } from "../application/ApplicationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CandidateWhereInput = {
  applications?: ApplicationListRelationFilter;
  email?: StringNullableFilter;
  experience?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  skills?: StringNullableFilter;
};
